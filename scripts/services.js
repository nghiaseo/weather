const defaultKey = 'f77f9d7c10468b8e8d04fbe1e159f286'
const getLocation = (s)=>{
   return fetch(`https://nominatim.openstreetmap.org/?addressdetails=1&q=${s}&format=json&limit=1`)
    .then(res=>{return res.json()})
}
const getWeather = (lat,lon,apikey)=>{
    if(!apikey) apikey = defaultKey
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&lang=vi&units=metric`)
    .then(res=>{return res.json()})
}
export {getLocation,getWeather}