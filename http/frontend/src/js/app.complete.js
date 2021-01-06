// TODO: write code here

const subscribeWidget = document.querySelector('[data-widget=subscribe]');
const subscribeForm = subscribeWidget.querySelector('[data-id=subscribe-form]');
const nameInput = subscribeWidget.querySelector('[data-id=name]');
const phoneInput = subscribeWidget.querySelector('[data-id=phone]');

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

// GET (slide 35)
// subscribeForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const queryString = Array.from(subscribeForm.elements)
//     .filter(({ name }) => name)
//     .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
//     .join('&');
//   const url = `http://localhost:7070/?${queryString}`;
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   // event listener here
//   xhr.send();
// });

// POST (slide 38)
// subscribeForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const params = Array.from(subscribeForm.elements)
//     .filter(({ name }) => name)
//     .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
//     .join('&');
//   const url = 'http://localhost:7070';
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', url, true);
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   // event listener here
//   xhr.send(params);
// });

// GET (slide 41)
// subscribeForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const params = new URLSearchParams();
//   Array.from(subscribeForm.elements)
//     .filter(({ name }) => name)
//     .forEach(({ name, value }) => params.append(name, value));
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `http://localhost:7070/?${params}`);
//   xhr.send();
// });

// POST (slide 41)
// subscribeForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const params = new URLSearchParams();
//   Array.from(subscribeForm.elements)
//       .filter(({ name }) => name)
//       .forEach(({ name, value }) => params.append(name, value));
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'http://localhost:7070');
//   xhr.send(params);
// });

// File upload (slide 55)
// document.querySelector('[data-id=upload-form]').addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const formData = new FormData(evt.currentTarget);

//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'http://localhost:7070');
//   // TODO: subscribe to response
//   xhr.send(formData);
// })

// File upload and show (slide 58)
// document.querySelector('[data-id=upload-form]').addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const formData = new FormData(evt.currentTarget);

//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'http://localhost:7070');

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       const img = document.createElement('img');
//       img.src = `http://localhost:7070/${xhr.response}`;
//       console.log(xhr.response);
//       document.body.appendChild(img);
//     }
//   });

//   xhr.send(formData);
// })