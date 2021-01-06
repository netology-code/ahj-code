if (navigator.serviceWorker) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register(
        '/service-worker.js', { scope: './' }
      );
    } catch (e) {
      console.log(e);
    }

    setTimeout(() => {
      document.querySelector('[data-id=image]').src = 'img/js.png';
    }, 5000);

    setTimeout(async () => {
      try {
        // const response = await fetch('/api/2.json');
        // const data = await response.json();
        // console.log(data);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/1.json');
        xhr.addEventListener('load', (evt) => {
          console.log(evt);
          console.log(evt.currentTarget);
        });
        xhr.send();
      } catch (e) {
        console.log(e);
      }
    }, 5000);
  });
}