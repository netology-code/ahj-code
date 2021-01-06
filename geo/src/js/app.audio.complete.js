(async () => {
  if (!navigator.mediaDevices) {
    return;
  }
  try {
    const audio = document.createElement('audio');
    audio.controls = true;
    document.body.appendChild(audio);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    audio.srcObject = stream;
    audio.play();

    setTimeout(() => {
      stream.getTracks().forEach((track) => track.stop());
      audio.srcObject = null;
    }, 5000);

    // Record:
    // if (!window.MediaRecorder) {
    //     return;
    // }
    // const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});

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
    //   audio.src = URL.createObjectURL(blob);
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
