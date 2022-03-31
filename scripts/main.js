import * as Services from './services.js'
const search = ()=>{
    const location = document.getElementById('location').value;
    const apikey = document.getElementById('apikey').value;
    Services.getLocation(location).then(data=>{
        Services.getWeather(data[0].lat,data[0].lon,apikey).then(res=>{
            console.log(res)
            document.getElementById('weather').innerText = res.weather[0].description
            document.getElementById('temp').innerText = `${res.main.temp} độ C`
            document.getElementById('humidity').innerText = res.main.humidity+'%'
            document.getElementById('vision').innerText = res.visibility+'m'
            document.getElementById('wind').innerText = res.wind.speed
        })
    })
}
const remove = ()=>{
    document.getElementById('weather').innerText = ''
            document.getElementById('temp').innerText = ''
            document.getElementById('humidity').innerText = ''
            document.getElementById('vision').innerText =''
            document.getElementById('wind').innerText = ''
            document.getElementById('location').value = ''
}
window.onload = ()=>{
    document.getElementById('search').addEventListener('click',()=>{search()})
    document.getElementById('remove').addEventListener('click',()=>{remove()})
}