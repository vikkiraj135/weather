let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valueSearch.value !== '') {
        searchWeather(valueSearch.value);
    }
});

let id = '3c6524984d85ff686b65fd716062c6bf';

const searchWeather = (cityName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${id}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        city.textContent = data.name;
        temperature.textContent = data.main.temp + ' °C';
        description.textContent = data.weather[0].description;
        clouds.textContent = data.clouds.all + '%';
        humidity.textContent = data.main.humidity + '%';
        pressure.textContent = data.main.pressure + ' hPa';
    })
    .catch(error => console.error('Error fetching the weather data:', error));
}