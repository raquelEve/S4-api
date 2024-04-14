interface Ivote {
  id: string;
  score: number;
  date: string;
  source: string;
}

//* the array with voting report
const reportJoke: Array<Ivote> = [];

//*the variable that conforms all the info of the vote
const currentJoke: Ivote = { id: "", score: 0, date: "", source: "" };

//***  call the function on load */
window.onload = function () {
  randomCall();
};

//* function that manages the fillRate process
const handleFillRate = (vote: number) => {
  currentJoke.id; //updated in displayDadJoke & chuck
  currentJoke.score = vote;
  currentJoke.date = dateIso();
};

//* function that manages the next process
const handleNext = () => {
  if (currentJoke.score !== 0) {
    addRateInArr();
  }
  randomCall();
  resertCurrentJoke();
  randonBubble();
};

//* function that call the joke api
const displayDadJoke = async (): Promise<void> => {
  let boxJoke: HTMLElement | null = document.getElementById("box-joke");

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
};

//* add Rate in array
const addRateInArr = () => {
  //push in array
  reportJoke.push({ ...currentJoke });
};

//* convert the data in a ISO
const dateIso = (): string => {
  let date: Date = new Date();
  return date.toISOString();
};

//* resert currentJoke values
const resertCurrentJoke = () => {
  currentJoke.id; //updated in displayDadJoke & chuck
  currentJoke.score = 0;
  currentJoke.date = "";
  currentJoke.source = "";
};

/************* CHUCK NORRIS JOKES */

const displayChuckJoke = async (): Promise<void> => {
  let boxJoke: HTMLElement | null = document.getElementById("box-joke");

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
};

//* call an joke api depends of a random number
const randomCall = (): void => {
  let num: number = Math.floor(Math.random() * 2) + 1;

  if (num % 2 == 0) {
    displayDadJoke();
  } else {
    displayChuckJoke();
  }
};

/************* BUBBLES BACKGROUND */

const randonBubble = () => {
  // getEelementByTagName returns an array
  let body: HTMLElement = document.getElementsByTagName("body")[0];
  let currentClass: string = body.className.split(" ")[0];
  let num: number = Math.floor(Math.random() * 6) + 1;

  //apply the random class
  body.classList.remove(currentClass);
  body.classList.add(`bubble-${num}`);

  let miniA: HTMLElement | null = document.getElementById("posA");
  let miniB: HTMLElement | null = document.getElementById("posB");

  if (miniA) {
    if (miniA.classList.contains("mini-bubble-1")) {
      console.log("cambiamos de 1 a 2");
      miniA.classList.remove("mini-bubble-1");
      miniA.classList.add("mini-bubble-2");
    } else {
      console.log("cambiamos de 2 a 1");
      miniA.classList.remove("mini-bubble-2");
      miniA.classList.add("mini-bubble-1");
    }
  }
  if (miniB) {
    console.log("b", miniB);
    if (miniB.classList.contains("mini-bubble-3")) {
      console.log("cambiamos de 3 a 4");
      miniB.classList.remove("mini-bubble-3");
      miniB.classList.add("mini-bubble-4");
    } else {
      console.log("cambiamos de 4 a 3");
      miniB.classList.remove("mini-bubble-4");
      miniB.classList.add("mini-bubble-3");
    }
  }
  console.log("---------------------");
};
