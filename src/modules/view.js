const getCard = (()=>{
    function displayCard(data){
        const card = document.getElementById("card-container")
        card.innerHTML=
        `
        <div class="card-section" id="card-section">
                    <div class="city-name"><h1>${data}</h1></div>
                    <div class="city-temp"><h1>23.01</h1></div>
                    <div class="readings">
                        <div class="fells-like">Fells like: 22.01</div>
                        <div class="humidity">Humidity: 23%</div>
                        <div class="wind">Wind: 12.04 km/h</div>
                    </div>
                    
        </div>
        `
    } 
    return {displayCard}
})();

export default getCard;