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
const currentJoke = {};
//* call the function on load
window.onload = function () {
    displayRandomJoke();
};
//* function that manages the addRate process
const handleAddRate = (vote) => {
    currentJoke.id; //updated in displayRandomJoke
    currentJoke.score = vote;
    currentJoke.date = dateIso();
};
const handleNext = () => {
    if (currentJoke.score !== 0) {
        addRate();
    }
    displayRandomJoke();
    resertCurrentJoke();
};
//* function that call the joke api
const displayRandomJoke = () => __awaiter(void 0, void 0, void 0, function* () {
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
const addRate = () => {
    //push in array
    reportJoke.push(Object.assign({}, currentJoke));
};
//* convert the data in a ISO
const dateIso = () => {
    let date = new Date();
    return date.toISOString();
};
//* resert currentJoke values
const resertCurrentJoke = () => {
    currentJoke.id; //updated in displayRandomJoke
    currentJoke.score = 0;
    currentJoke.date = "";
};
//# sourceMappingURL=index.js.map