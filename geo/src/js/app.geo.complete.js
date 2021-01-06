// TODO: write code here

console.log('app.js bundled');

if (navigator.geolocation) {
  console.log('geo');
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      const { latitude, longitude, accuracy } = position.coords;
      console.log(`lat: ${latitude}, lng: ${longitude}, acc: ${accuracy}`);
    }, (error) => {
      console.log(error);
    },
  );
}
