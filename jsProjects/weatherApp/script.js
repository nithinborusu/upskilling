

const inputBox = document.getElementById('inputBox');

const tbody = document.querySelector('tbody');

let citycount =0;
const addedCities= new Set();
const country=document.querySelector('#countryName');
const state=document.querySelector('#stateName');
const cityName=document.querySelector('#cityName');
const humidity=document.querySelector('#humidity');
const windSpeed=document.querySelector('#windSpeed');
const temperature=document.querySelector('#temperature');
const logo=document.querySelector('#logoImage');
const weatherStatus=document.querySelector('#weatherStatus');


const getData = async (event)=>{
    event.preventDefault();
    console.log(inputBox.value);
    if(!inputBox.value){
        alert("Please Enter the City Name");
        return;
    }
    const url =`https://api.weatherapi.com/v1/current.json?key=503b246732ef4d54aef115856242205&q=${inputBox.value}`;
    const fetchData = await fetch(url);

    const cityData = await fetchData.json();
    console.log(cityData);
     
    const weatherData = cityData.current;
    const locationData=cityData.location;
    // Creating table object for table element
    const weatherinfo={};
    //location
    weatherinfo['city']=cityName.innerHTML = locationData.name;
    weatherinfo['country']=country.innerHTML = locationData.country;
    weatherinfo['state']=state.innerHTML = locationData.region;
    //weatherdetails
    weatherinfo['humidity']=humidity.innerHTML=weatherData.humidity;
    weatherinfo['windSpeed']=windSpeed.innerHTML=weatherData.wind_kph;
    weatherinfo['temperature']=temperature.innerHTML=weatherData.temp_c;
    
    weatherinfo['logo']=logo.src=weatherData.condition.icon;
    weatherinfo['status']=weatherStatus.innerText=weatherData.condition.text;
    logo.style.width ="40px";
     updateWeatherTable(weatherinfo);
};

const updateWeatherTable =(weatherinfo)=>{
    if (addedCities.has(weatherinfo.city)) {
        return;
    }
    addedCities.add(weatherinfo.city);
    citycount++;
    const trow = document.createElement('tr');
    trow.style.fontWeight='600';
    trow.style.fontSize='16px';
    trow.style.color='red';

    for (const key in  weatherinfo) {
        const td = document.createElement('td');
        if(key==='logo'){
            const img = document.createElement('img');
            img.src=weatherinfo[key];
            img.style.width ="50px";
            td.appendChild(img);
        }
        else{
            td.innerText=weatherinfo[key];
        }
        trow.appendChild(td);
        
    }
    if(citycount%2===0){
        trow.style.color='#0284c7';
    }
    tbody.appendChild(trow);
};