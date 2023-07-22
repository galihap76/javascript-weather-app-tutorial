let inputField = document.querySelector('#input-field');
let btn = document.querySelector('button');
let city = document.querySelector('#city');
let icon = document.querySelector('#icon');
let temperature = document.querySelector('#temperature');
let description = document.querySelector('#description');

btn.addEventListener('click', function(){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=APP_KEY`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      city.innerText = data.name;
      icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon">`;
      temperature.innerText = `${Math.round(data.main.temp)}°C`;
      description.innerText = data.weather[0].description;
    })
    .catch(error => console.log('Error:', error));
});