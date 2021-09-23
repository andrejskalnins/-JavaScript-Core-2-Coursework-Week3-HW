/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
let body = document.querySelector("body");
let colours = ["green", "pink", "purple", "orange"];
let i = 0;

// Changes the background to goldenrod after 2 seconds of loading the page.
setTimeout(() => {
  body.style.backgroundColor = "goldenrod";
}, 2000);

function changeBgColour() {
  body.style.backgroundColor = colours[i];
  i = (i + 1) % colours.length;
}
setInterval(changeBgColour, 5000);
