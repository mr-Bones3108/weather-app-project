import getTemperature from "./modules/app";
import getCard from "./modules/view";

const form = document.getElementById("searchForm")
const inputCity = document.getElementById("cityNameInput")
const submitBtn = document.getElementById("searchBtn")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})

submitBtn.addEventListener("click",async ()=>{
    if(inputCity.value === "") return;
    const getData = await getTemperature.getWeatherData(inputCity.value)
    getCard.displayCard(getData)
})



