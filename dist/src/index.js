"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//* the array with voting report
const reportJoke = [];
//*the variable that conforms all the info of the vote
const currentJoke = { id: "", score: 0, date: "", source: "" };
//***  call the function on load */
window.onload = function () {
    randomCall();
    displayWeather();
};
//* function that manages the fillRate process
const handleFillRate = (vote) => {
    //currentJoke.id; updated in displayDadJoke & chuck
    currentJoke.score = vote;
    currentJoke.date = dateIso();
};
//* function that manages the next process
const handleNext = () => __awaiter(void 0, void 0, void 0, function* () {
    if (currentJoke.score !== 0) {
        addRateInArr();
    }
    yield randomCall();
    resetCurrentJoke();
    randonBubble();
});
//* function that call the joke api
//* function that call the joke api
const displayDadJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    let boxJoke = document.getElementById("box-joke");
    fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
        // If boxJoke exists => add a joke
        if (boxJoke) {
            boxJoke.innerHTML = `" ${data.joke} "`;
            currentJoke.id = data.id; // we update the id on each call
            currentJoke.source = "dad";
            console.log("current en api", currentJoke);
        }
    })
        .catch((error) => {
        console.error("Error fetching joke:", error);
        if (boxJoke) {
            boxJoke.innerHTML = "no jokes available";
        }
    });
});
//* add Rate in array
const addRateInArr = () => {
    //push in array
    reportJoke.push(Object.assign({}, currentJoke));
};
//* convert the data in a ISO
const dateIso = () => {
    let date = new Date();
    return date.toISOString();
};
//* resert currentJoke values
const resetCurrentJoke = () => {
    //currentJoke.id; updated in displayDadJoke & chuck
    currentJoke.score = 0;
    currentJoke.date = "";
    currentJoke.source = "";
};
/************* CHUCK NORRIS JOKES */
const displayChuckJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    let boxJoke = document.getElementById("box-joke");
    fetch("https://api.chucknorris.io/jokes/random", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
        // If boxJoke exists => add a joke
        if (boxJoke) {
            boxJoke.innerHTML = `" ${data.value} "`;
            currentJoke.id = data.id; // we update the id on each call
            currentJoke.source = "chuck";
            console.log("current en api", currentJoke);
        }
    })
        .catch((error) => {
        console.error("Error fetching joke:", error);
        if (boxJoke) {
            boxJoke.innerHTML = "no jokes available";
        }
    });
});
//* call an joke api depends of a random number
const randomCall = () => __awaiter(void 0, void 0, void 0, function* () {
    let num = Math.floor(Math.random() * 2) + 1;
    if (num % 2 == 0) {
        yield displayDadJoke();
    }
    else {
        yield displayChuckJoke();
    }
});
/************* BUBBLES BACKGROUND */
const randonBubble = () => {
    // getEelementByTagName returns an array
    let body = document.getElementsByTagName("body")[0];
    let currentClass = body.className.split(" ")[0];
    let num = Math.floor(Math.random() * 6) + 1;
    //apply the random class
    body.classList.remove(currentClass);
    body.classList.add(`bubble-${num}`);
    let miniA = document.getElementById("posA");
    let miniB = document.getElementById("posB");
    if (miniA) {
        if (miniA.classList.contains("mini-bubble-1")) {
            miniA.classList.remove("mini-bubble-1");
            miniA.classList.add("mini-bubble-2");
        }
        else {
            miniA.classList.remove("mini-bubble-2");
            miniA.classList.add("mini-bubble-1");
        }
    }
    if (miniB) {
        if (miniB.classList.contains("mini-bubble-3")) {
            miniB.classList.remove("mini-bubble-3");
            miniB.classList.add("mini-bubble-4");
        }
        else {
            miniB.classList.remove("mini-bubble-4");
            miniB.classList.add("mini-bubble-3");
        }
    }
};
/************* WEATHER API */
const displayWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = "YOUR-API-KEY";
    const city = "Barcelona";
    let lat = "41.38879";
    let lon = "2.15899";
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        printWeather(data);
    })
        .catch((error) => {
        console.error("Error fetching current weather data:", error);
    });
});
const printWeather = (data) => {
    let icon = document.getElementById("icon");
    let temp = document.getElementById("temp");
    // Convert temperature to degrees Celsius and round to 2 decimal places.
    let tempData = (data.main.temp - 273.15).toFixed(2);
    // Use an <img> tag to display the weather icon.
    let iconData = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;
    icon.innerHTML = iconData;
    temp.innerHTML = tempData + " °C"; // Display temperature together with Celsius symbol
};
//# sourceMappingURL=index.js.map