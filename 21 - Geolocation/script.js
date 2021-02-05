const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

const lat = document.querySelector('.latitud');
const lon = document.querySelector('.longitud');


navigator.geolocation.watchPosition(data => {
    console.log(data);

    let wind = data.coords.speed ?? '40.3';
    speed.textContent = wind;

    let angle = data.coords.heading ?? '20';
    arrow.style.transform = `rotate(${angle}deg)`;

    //EXTRA
    let latitude = data.coords.latitude;
    lat.textContent = `LAT: ${latitude}`;

    let longitude = data.coords.longitude;
    lon.textContent = `LONG: ${longitude}`;

}), (err) => {
    console.log(err);
    alert('Hey, you have to allow permission');
};