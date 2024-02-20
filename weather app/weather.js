let btn = document.querySelector(".btn")
let weathercontainer = document.querySelector(".weather")
let input = document.querySelector(".input")
let getdata = async(apilink) => {
    let data = await fetch(apilink)
    let json = await data.json()

    return json

}


btn.addEventListener("click", async() => {
    if (input.value === "") {
        alert("please enter the name of city")
    }
    let city = document.querySelector(".input").value
    let apiKey = "a65f810e44dad1363e88691577fbcabf"
    let params = new URLSearchParams();
    params.append("q", city)

    let jsondata = await getdata("https://api.openweathermap.org/data/2.5/weather?units=metric?&" + params + `&appid=${apiKey}`)
        //console.log(jsondata)
    let temp = String(Math.round(jsondata.main.temp - 273.15));
    //console.log(typeof temp)
    if (input.value === jsondata.name) {
        alert("u enter wrong name")
    } else {


        weathercontainer.innerHTML = `

            <img src="" alt="" class="weather-icon">
            <h1 class="temp">${temp}°C</h1>
            <h2 class="city">${jsondata.name}</h2>
            <p>${jsondata.weather[0].main}</p>
            <div class="details">
                <div class="col">
                    <img src="/images/humidity.png" alt="">

                    <div class="humidity">
                        <p>${jsondata.main.humidity} %</p>
                        <p>Humidity</p>
                    </div>
                </div>


                <div class="col">
                    <img src="/images/wind.png" alt="">
                    <div class="humidity">
                        <p> ${jsondata.wind.speed} Km/H</p>
                        <p>wind</p>
                    </div>


                </div>


            </div>
    `

        let weatherIcon = document.querySelector(".weather-icon")
        if (jsondata.weather[0].main === "Clouds") {
            weatherIcon.src = "/images/clouds.png"
        } else if (jsondata.weather[0].main === "Clear") {
            weatherIcon.src = "/images/clear.png"

        } else if (jsondata.weather[0].main === "Rain") {
            weatherIcon.src = "/images/rain.png"

        } else if (jsondata.weather[0].main === "Drizzle") {
            weatherIcon.src = "/images/drizzle.png"

        } else if (jsondata.weather[0].main === "Mist") {
            weatherIcon.src = "/images/mist.png"

        } else if (jsondata.weather[0].main === "Snow") {
            weatherIcon.src = "/images/snow.png"

        }
    }


})