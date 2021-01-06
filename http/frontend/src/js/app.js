// TODO: write code here

const subscribeWidget = document.querySelector('[data-widget=subscribe]');
const subscribeForm = subscribeWidget.querySelector('[data-id=subscribe-form]');
const nameInput = subscribeWidget.querySelector('[data-id=name]');
const phoneInput = subscribeWidget.querySelector('[data-id=phone]');

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
