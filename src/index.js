import getTemperature from "./modules/app";
import getCard from "./modules/view";

const getData = await getTemperature.getWeatherData("pune")
getCard.displayCard(getData)