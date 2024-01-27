console.log("Hie")


function getTemperature(){
    fetch("https://api.weatherapi.com/v1/current.json?key=1fb9b24b0ecd46f3b25110719242301&q=london",{
        mode:'cors'
    }).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data.location.name)
        console.log(data.current.temp_c)
        console.log(data.current.feelslike_c)
        console.log(data.current.humidity)
        console.log(data.current.wind_kph)
        console.log(data)
    })
}

getTemperature()