export const fetchGenres = () =>
  new Promise((resolve) => {
    // Simulation of network request. Don't edit
    setTimeout(() => {
      fetch("./genres.json").then(resolve);
    }, 1000);
  });
