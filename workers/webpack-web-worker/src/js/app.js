import Worker from './web-worker';

const fileEl = document.querySelector('[data-id=file-input]');
const resultEl = document.querySelector('[data-id=result-text]');
fileEl.addEventListener('change', async (evt) => {
  const file = evt.currentTarget.files[0];
  const worker = new Worker();
  worker.addEventListener('message', ({ data: result }) => {
    resultEl.textContent = result;
    worker.terminate();
  });
  worker.postMessage(file);
});
