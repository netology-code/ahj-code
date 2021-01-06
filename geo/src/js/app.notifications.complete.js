(async () => {
  if (!window.Notification) {
    // didn't support notification
    return;
  }

  const btn = document.createElement('button');
  btn.textContent = 'Show notification';
  btn.className = 'btn';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    console.log(Notification.permission);
    const notification = new Notification(`Sample notification ${new Date()}`, {
      body: 'Long long long notification body text',
      image: '/img/js.png',
      icon: '/img/netology.png',
      // tag: 'fixed',
      requireInteraction: true,
    });

    notification.onclick = () => {
      console.log('click');
    };

    notification.onclose = () => {
      console.log('closed');
    };
  });

  if (Notification.permission === 'granted') {
    // TODO: show notification
    return;
  }

  if (Notification.permission === 'default') {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // TODO: show
    }
  }
})();
