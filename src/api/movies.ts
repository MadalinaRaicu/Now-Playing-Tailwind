export const fetchMovies = () =>
  new Promise((resolve) => {
    // Simulation of network request. Don't edit
    setTimeout(() => {
      fetch('../assets/movies.json').then((response) => response.json());
    }, 1300);
  });
