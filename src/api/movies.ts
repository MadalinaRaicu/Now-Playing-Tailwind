export const fetchMovies = () =>
  new Promise((resolve) => {
    // Simulation of network request. Don't edit
    setTimeout(() => {
      fetch("./movies.json").then(resolve);
    }, 1300);
  });
