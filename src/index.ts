interface Ivote {
  id?: string; //optional beacuse I want initialize with {}
  score?: number;
  date?: string;
}

//* the array with voting report
const reportJoke: Array<Ivote> = [];

//*the variable that conforms all the info of the vote
const currentJoke: Ivote = {};

//* call the function on load
window.onload = function () {
  displayRandomJoke();
};

//* function that manages the addRate process
const handleAddRate = (vote: number) => {
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
const displayRandomJoke = async (): Promise<void> => {
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
const addRate = () => {
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
  currentJoke.id; //updated in displayRandomJoke
  currentJoke.score = 0;
  currentJoke.date = "";
};
