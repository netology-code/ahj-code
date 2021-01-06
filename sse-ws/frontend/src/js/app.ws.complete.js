const ws = new WebSocket('ws://localhost:7070/ws');

ws.addEventListener('open', () => {
  console.log('connected');
  ws.send('hello');
});

ws.addEventListener('message', (evt) => {
  console.log(evt);
});

ws.addEventListener('close', (evt) => {
  console.log('connection closed', evt);
});

ws.addEventListener('error', () => {
  console.log('error');
});

setInterval(() => {
  try {
    ws.send('hello');
  } catch (e) {
    console.log('err');
    console.log(e);
  }
}, 1000);
