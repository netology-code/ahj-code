(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register(
        '/service-worker.js',
      );
      console.log('sw registered');
    }
  } catch (e) {
    console.log(e);
  }
})();