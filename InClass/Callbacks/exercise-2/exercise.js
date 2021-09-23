/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

//  Task 1
// create showMovies function
function showMovies() {
  movies.forEach((movie, index) => {
    setTimeout(() => {
      let movieInfo = document.createElement("p");
      let movieContainer = document.querySelector("#all-movies");
      movieInfo.innerHTML = `${movie.title} by ${movie.director}`;
      movieContainer.appendChild(movieInfo);

      let movieTotal = document.querySelector("#movies-number");
      movieTotal.innerText = (index % movies.length) + 1;
    }, 2000 * index);
  });
}
// setTimeout(showMovies, 1000);

// create a new movie object for your favorite movie
const myMovie = {
  title: "Mystery Train",
  director: "Jim Jarmuch",
  type: "independent",
  haveWatched: true,
};
// create addMovies function

function addMovie(movie, renderMovie) {
  setTimeout(() => {
    movies.push(movie);
    renderMovie(movies);
  }, 2000);
}
addMovie(myMovie, showMovies);

// add a film from the input form
// function userMovie() {
//   let movieForm = document.querySelector("form");
//   movieForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let newMovie = {};
//     let title = document.querySelector("#movieTitle");
//     newMovie.title = title.value;

//     let directorName = document.querySelector("#directorName");
//     newMovie.name = directorName.value;

//     let genre = document.querySelector("#genre");
//     newMovie.type = genre.value;

//     let haveWatched = document.querySelector("#check");
//     if (haveWatched.value === "yes") {
//       return (newMovie.haveWatched = true);
//     } else if (haveWatched.value === "no") {
//       return (newMovie.haveWatched = false);
//     }

//     movies.push(newMovie);
//     // [...movieForm.elements].forEach((input) => {
//     //   let newMovie = {};
//     //   console.log(input.value);
//     // });
//   });
// }

// const userMovie = (ev) => {
//   ev.preventDefault(); //to stop the form submitting
//   let movie = {
//     id: Date.now(),
//     title: document.getElementById("title").value,
//     director: document.getElementById("yr").value,
//   };
//   movies.push(movie);
//   document.forms[0].reset(); // to clear the form for the next entries
//   //document.querySelector('form').reset();

//   //for display purposes only
//   console.warn("added", { movies });

//   //saving to localStorage
//   localStorage.setItem("MyMovieList", JSON.stringify(movies));
// };
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("btn").addEventListener("click", userMovie);
// });
// addMovie(userMovie, showMovies);
