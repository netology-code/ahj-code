const eventSource = new EventSource('http://localhost:7070/sse');

eventSource.addEventListener('comment', (evt) => {
  console.log(evt);
});

eventSource.addEventListener('open', (evt) => {
  console.log(evt);
  console.log('connected');
});

eventSource.addEventListener('error', (evt) => {
  console.log(evt);
  console.log('error');
});
