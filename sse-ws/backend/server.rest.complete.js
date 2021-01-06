const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const uuid = require('uuid');
const app = new Koa();

app.use(async (ctx, next) => {
  const origin = ctx.request.get('Origin');
  if (!origin) {
    return await next();
  }

  const headers = { 'Access-Control-Allow-Origin': '*', };

  if (ctx.request.method !== 'OPTIONS') {
    ctx.response.set({ ...headers });
    try {
      return await next();
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }

  if (ctx.request.get('Access-Control-Request-Method')) {
    ctx.response.set({
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    });

    if (ctx.request.get('Access-Control-Request-Headers')) {
      ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Request-Headers'));
    }

    ctx.response.status = 204;
  }
});

app.use(koaBody({
  text: true,
  urlencoded: true,
  multipart: true,
  json: true,
}));

const contacts = [];
const router = new Router();

router.get('/contacts', async (ctx, next) => {
  // return list of contacts
  console.log('contacts');
  ctx.response.body = contacts;
});
router.post('/contacts', async (ctx, next) => {
  // create new contact
  contacts.push({...ctx.request.body, id: uuid.v4()});
  ctx.response.status = 204
});
router.delete('/contacts/:id', async (ctx, next) => {
  // remove contact by id (ctx.params.id)
  const index = contacts.findIndex(({ id }) => id === ctx.params.id);
  if (index !== -1) {
    contacts.splice(index, 1);
  };
  ctx.response.status = 204
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
