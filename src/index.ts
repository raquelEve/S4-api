//  la función al cargar la página
window.onload = function () {
  displayRandomJoke();
};

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
      console.log(data);
      console.log(data.joke);
      // If boxJoke exists, add a joke
      if (boxJoke) {
        boxJoke.innerHTML = `" ${data.joke} "`;
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      if (boxJoke) {
        boxJoke.innerHTML = "no jokes available";
      }
    });
};
