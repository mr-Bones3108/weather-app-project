const getTemperature = (()=>{

    const convertData = (data)=>{
      const name = data.location.name
      const {
        temp_c:temp_c,
        temp_f:temp_f
        } = data.current;
      console.log(name)
      console.log(temp_c)
      console.log(temp_f)
    }

    async function getWeatherData(city){
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1fb9b24b0ecd46f3b25110719242301&q=${city}`;
        
        try{
            const response = await fetch(apiUrl, {mode:'cors'})
            if(!response.ok) throw new Error(`entered ${city} is not a city`)
            const data = await response.json()
            convertData(data)
            console.log(data)
            return data
        }
        catch(error){
            alert(error)
            return null
        }
}
return{getWeatherData}
})();

getTemperature.getWeatherData("nagpur")
