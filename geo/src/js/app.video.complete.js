(async () => {
  if (!navigator.mediaDevices) {
    return;
  }
  try {
    const video = document.createElement('video');
    video.controls = true;
    document.body.appendChild(video);

    const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
    video.srcObject = stream;
    video.play();

    setTimeout(() => {
      stream.getTracks().forEach(track => track.stop());
      video.srcObject = null;
    }, 5000)

    // Record:
    // if (!window.MediaRecorder) {
    //     return;
    // }
    // const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});

    // const recorder = new MediaRecorder(stream);

    // const chunks = [];
    // recorder.addEventListener('start', (evt) => {
    //   console.log('recording started');
    // });

    // recorder.addEventListener("dataavailable", (evt) => {
    //   console.log('data available');
    //   chunks.push(evt.data);
    // });

    // recorder.addEventListener('stop', (evt) => {
    //   console.log('recording stopped');
    //   const blob = new Blob(chunks);
    //   video.src = URL.createObjectURL(blob);
    // })
    // recorder.start();

    // setTimeout(() => {
    //   recorder.stop();
    //   stream.getTracks().forEach(track => track.stop());
    // }, 5000)
  } catch (e) {
    console.error(e);
  }
})();
