const getCard = (()=>{
    function displayCard(data){
        if(!data) return;
        const cardSection = document.getElementById("card-container")
        const gifSection = document.getElementById("gifSection")
        
        cardSection.classList.add("active")
        gifSection.classList.add("active")


        const gifImage = document.querySelector('img')
        const cityName = document.getElementById("cityName")
        const cityTemp = document.getElementById("cityTemp")
        const feelsLike = document.getElementById("feelsLike")
        const condition = document.getElementById("condition")
        const humidity = document.getElementById("humidity")
        const wind = document.getElementById("wind")

        cityName.innerText=`${data.name}`
        cityTemp.innerText=`${data.temp_in_c} °C`
        feelsLike.innerText=`Fells like: ${data.what_feelslike_c} °C`
        condition.innerText=`condition: ${data.condition}`
        humidity.innerText=`Humidity: ${data.what_humidity} %`
        wind.innerText=`Wind: ${data.wind_in_kph} km/h`
        gifImage.src=data.gifImageUrl
    } 
    return {displayCard}
})();

export default getCard;