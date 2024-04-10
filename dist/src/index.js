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
//  la función al cargar la página
window.onload = function () {
    displayRandomJoke();
};
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
        console.log(data);
        console.log(data.joke);
        // If boxJoke exists, add a joke
        if (boxJoke) {
            boxJoke.innerHTML = data.joke;
        }
    })
        .catch((error) => {
        console.error("Error fetching joke:", error);
        if (boxJoke) {
            boxJoke.innerHTML = "no jokes available";
        }
    });
});
//# sourceMappingURL=index.js.map