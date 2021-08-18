// API data
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = 'a0f23197dceb65571e4554a9a09e08fd';
document.getElementById('ctry').value = "at";

// Date
let date = new Date();
let newDate = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear();

// UI elements
const dateField = document.getElementById('date');
const locField = document.getElementById('location');
const tempField = document.getElementById('temp');
const weatherField = document.getElementById('weather');
const moodField = document.getElementById('content');

const retrieveData = async (url = '') => {
  const request = await fetch(url);

  try {
    const allData = await request.json();
    return allData;

  } catch (error) {
    console.log('error', error);
  }
};

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = await response.json();
    return newData;

  } catch (error) {
    console.log('Error', error);
  }
};

const getWeather = async (url) => {
  const response = await fetch(url);

  try {
    const data = await response.json();
    return data;

  } catch (error) {
    console.log('error', error);
  }
}

const updateUI = data => {
  // console.log(data);
  dateField.innerHTML = data.date;
  locField.innerHTML = data.name + ", on the ";
  tempField.innerHTML = data.temp + "° C , ";
  weatherField.innerHTML = data.weather;
  moodField.innerHTML = `"${data.mood}"`;
  document.getElementById('zip').value = "";
  document.getElementById('feelings').value = "";
}

const handleButton = e => {
  let zipCode = document.getElementById('zip').value;
  let feelings = document.getElementById('feelings').value;
  let country = document.getElementById('ctry').value;;
  const endpoint = `${baseUrl}${zipCode},${country}&appid=${apiKey}&units=metric`;

  
  e.preventDefault();

  if (zipCode && feelings) {
    getWeather(endpoint)

    .then(apiData => {
      postData('/add', {
        temp: apiData.main.temp,
        name: apiData.name,
        weather: apiData.weather[0].description,
        date: newDate,
        mood: feelings
      });
    })

    .then(data => {
     return retrieveData('/all');
     
    })

    .then(data => {
      updateUI(data);
    })

  } else {
    alert("Please fill out all fields!")
  }
}

document.getElementById('generate').addEventListener('click', handleButton)