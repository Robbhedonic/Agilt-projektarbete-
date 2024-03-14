let btn = document.querySelector(".btn")
let weathercontainer = document.querySelector(".weather")
let DailyweatherDiv = document.querySelector(".daily-weather")
let link = document.querySelector(".link");
let cityName = document.querySelector(".input")
let rigthBtn = document.querySelector("i.fa-solid.fa-chevron-right")
let leftBtn = document.querySelector("i.fa-solid.fa-chevron-left")
let forecastContainer = document.querySelector(".forecast-container")
let apiKey = "a65f810e44dad1363e88691577fbcabf";
let weekday = ["Sunday", "Monday", "Tuesday", "Wedesday", "Thursday",
    "Freday", "Saturday"
]


let getdata = async(apilink) => {
        let data = await fetch(apilink)
        let json = await data.json()

        return json

    }
    // function get weather according to day
let getWeatherDetails = (name, lat, lon) => {
        let WeatherapiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

        fetch(WeatherapiUrl).then(res => res.json())
            .then(data => {
                    let forecastDays = [];
                    cityName.value = "";
                    DailyweatherDiv.innerHTML = ""
                    weathercontainer.innerHTML = ""


                    let filterDays = data.list.filter((item) => {
                        let forecastDate = new Date(item.dt_txt).getDate()
                        if (!forecastDays.includes(forecastDate)) {
                            return forecastDays.push(forecastDate)
                        }

                    })


                    filterDays.forEach((element, index) => {
                        // NAMR OF DAY
                        let d = new Date(element.dt_txt)
                        let dayname = weekday[d.getDay()]

                        //console.log(element.weather[0].icon)
                        let temp = String(Math.round(element.main.temp - 273.15));

                        if (index === 0) {
                            let newCurrentdiv = document.createElement("div")
                            newCurrentdiv.className = "main-section"
                            newCurrentdiv.innerHTML =
                                `
                        <h2>${name}</h2>  
                        <h2>${dayname} </h2>
 
    <h3> Date: ${element.dt_txt.split(" ")[0]}</h3>
            <img src="" alt="" class="weather-icon">
            <h1 class="temp">${temp}°C</h1>
            <p>${element.weather[0].main}</p>
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png" alt="">

                    <div class="humidity">
                        <p>${element.main.humidity} %</p>
                        <p>Humidity</p>
                    </div>
                </div>

                <div class="col">
                    <img src="images/wind.png" alt="">
                    <div class="humidity">
                        <p> ${element.wind.speed} Km/H</p>
                        <p>wind</p>
                    </div>


                </div>


            </div>
    `
                            weathercontainer.append(newCurrentdiv)
                        } else {
                            let newDailydiv = document.createElement("div");
                            newDailydiv.className = "section"
                            newDailydiv.innerHTML = `
                            <h2 class="day">${dayname}</h2> 

                        <h3> Date: ${element.dt_txt.split(" ")[0]}</h3>
                                <img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" alt="" class="weather-icon">
                                <h1 class="temp">${temp}°C</h1>
                                <p>${element.weather[0].main}</p>
                                <div class="details">
                                    <div class="col">
                                        <img src="images/humidity.png" alt="">

                                        <div class="humidity">
                                            <p>${element.main.humidity} %</p>
                                            <p>Humidity</p>
                                        </div>
                                        <h4>${element.weather[0].description}</h4>
                                    </div>


                                    <div class="col">
                                        <img src="images/wind.png" alt="">
                                        <div class="humidity">
                                            <p> ${element.wind.speed} Km/H</p>
                                            <p>wind</p>
                                        </div>


                                    </div>


                                </div>    
                                </div>  
                         
                        `


                            DailyweatherDiv.append(newDailydiv)


                        }
                        let weatherIcon = document.querySelector(".weather-icon")

                        if (element.weather[0].main === "Clouds") {
                            weatherIcon.src = "images/clouds.png"
                        } else if (element.weather[0].main === "Clear") {
                            weatherIcon.src = "images/clear.png"

                        } else if (element.weather[0].main === "Rain") {
                            weatherIcon.src = "images/rain.png"

                        } else if (element.weather[0].main === "Drizzle") {
                            weatherIcon.src = "images/drizzle.png"

                        } else if (element.weather[0].main === "Mist") {
                            weatherIcon.src = "images/mist.png"

                        } else if (element.weather[0].main === "Snow") {
                            weatherIcon.src = "images/snow.png"

                        }
                    })
                }

            )

    }
    //console.log(DailyweatherDiv)

// function get name and lat for city
btn.addEventListener("click", async() => {
    link.style.display = "block"
    if (cityName.value === "") {
        alert("Please enter the name of city")
    }
    let city = document.querySelector(".input")
    let params = new URLSearchParams();
    params.append("q", city.value)

    //let jsondata = await getdata("https://api.openweathermap.org/data/2.5/weather?units=metric?&" + params + `&appid=${apiKey}`)
    let jsondata = await getdata("http://api.openweathermap.org/geo/1.0/direct?" + params + `&limit=1&appid=${apiKey}`)
        //console.log(jsondata)
    if (!jsondata.length) {
        console.log("error")
    }
    let { name, lat, lon } = jsondata[0]
    console.log(jsondata[0])
    getWeatherDetails(name, lat, lon)

})

// function to show div
let showDiv = (e) => {

    forecastContainer.classList.add("show")
    let forecastDivs = document.querySelectorAll(".section")
    showforecastDivs(forecastDivs)


}

link.addEventListener("click", showDiv)

// slide function


function showforecastDivs(forecastDivs) {
    forecastDivs[0].classList.add("show")

    rigthBtn.addEventListener("click", nextFunction);
    leftBtn.addEventListener("click", previousFunction);
    let currentIndex = 0;

    function nextFunction(e) {
        if (currentIndex === forecastDivs.length - 1) {
            e.target.classList.add("stop")
            leftBtn.classList.remove("stop")
        } else {
            currentIndex++
            leftBtn.classList.remove("stop")

            addclass()
        }

    }

    function previousFunction(e) {
        if (currentIndex === 0) {
            e.target.classList.add("stop")
            rigthBtn.classList.remove("stop")

        } else {
            currentIndex--
            rigthBtn.classList.remove("stop")

            addclass()
        }
    }
    let addclass = () => {
        removeclass()
        forecastDivs[currentIndex].classList.add("show")

    }
    let removeclass = () => {
        forecastDivs.forEach((el) => {
            el.classList.remove("show")
        })
    }
}
let dailyForecastClose = document.querySelector(".daily-forecast-close");
dailyForecastClose.addEventListener("click", () => {
    forecastContainer.classList.remove("show")
    window.location.reload();
})
let backbtn = document.querySelector(".back-weather");
backbtn.addEventListener("click", () => {
    window.location = "user.html"
})