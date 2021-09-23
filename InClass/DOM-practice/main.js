console.log("Testing JS file loaded!");

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
let sectionList = document.querySelectorAll("section");
sectionList.forEach((section) => {
  section.style.backgroundColor = "white";
});

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
let imageList = document.querySelectorAll("img");
imageList.forEach((image) => {
  image.className = "content-title";
});

// Hint: look at the CSS to see if there are any classes already written which you can use.

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let graceHopperContainer = document.querySelector(
  " body > section:nth-child(2)"
);
let graceHopperDob = document.createElement("p");
graceHopperDob.innerText = "Born on 9 December 1906 Died 1 January 1992";
graceHopperContainer.appendChild(graceHopperDob);

let katherineJohnsonContainer = document.querySelector(
  " body > section:nth-child(4)"
);
let katherineJohnsonDob = document.createElement("p");
katherineJohnsonDob.innerText = "Born on 26 August 1918 Died 24 February 2020";
katherineJohnsonContainer.appendChild(katherineJohnsonDob);

let adaLovelaceContainer = document.querySelector(
  " body > section:nth-child(6)"
);
let adaLovelaceDob = document.createElement("p");
adaLovelaceDob.innerText = "Born on 10 December 1815 Died 27 November 1852";
adaLovelaceContainer.appendChild(adaLovelaceDob);

let headingsList = document.querySelectorAll("section > h1");

headingsList.forEach((heading) => {
  heading.style.textAlign = "center";
});
