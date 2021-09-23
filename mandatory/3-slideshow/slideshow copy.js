// Write your code here
let images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/500/300",
  "https://picsum.photos/600/300",
  "https://picsum.photos/700/300",
  "https://picsum.photos/800/400",
];

let activeSlideIndex = 0;
let userTimer = 5000;
let backwardTimer;
let forwardTimer;
function slideForward() {
  activeSlideIndex++;
  clearBackwardTimer();
  clearForwardTimer();
  renderElements();

  if (activeSlideIndex > images.length - 1) {
    activeSlideIndex = 0;
    renderElements();
  }
}
function slideBackward() {
  console.log("slide backward");
  activeSlideIndex--;
  clearBackwardTimer();
  clearForwardTimer();
  renderElements();

  if (activeSlideIndex < 0) {
    activeSlideIndex = images.length - 1;
    renderElements();
  }
}
function slideForwardAuto() {
  activeSlideIndex++;
  clearBackwardTimer();
  renderElements();

  if (activeSlideIndex > images.length - 1) {
    activeSlideIndex = 0;
    renderElements();
  }
  forwardTimer = setTimeout(slideForwardAuto, userTimer);
}

function slideBackwardAuto() {
  console.log("slide backward");

  activeSlideIndex--;
  clearForwardTimer();
  renderElements();
  if (activeSlideIndex < 0) {
    activeSlideIndex = images.length - 1;
    renderElements();
  }
  backwardTimer = setTimeout(slideBackwardAuto, userTimer);
}
let clearForwardTimer = () => {
  clearInterval(forwardTimer);
};
let clearBackwardTimer = () => {
  clearInterval(backwardTimer);
};

function getUserTimer() {
  return (userTimer = document.querySelector("input").value * 1000);
}
// button forward
// button backward
// function for setInterval or theother one

function renderElements() {
  let slideShowContainer = document.querySelector(".slideshow");
  slideShowContainer.replaceChildren();
  let nextSlideBtn = document.createElement("button");
  let previousSlideBtn = document.createElement("button");
  let nextSlideBtnAuto = document.createElement("button");
  let previousSlideBtnAuto = document.createElement("button");
  let stopAutoSlideBtn = document.createElement("button");

  previousSlideBtn.classList.add("left");
  nextSlideBtn.classList.add("right");
  nextSlideBtn.textContent = ">";
  previousSlideBtn.textContent = "<";
  nextSlideBtnAuto.textContent = "auto->";
  stopAutoSlideBtn.textContent = "stop";
  previousSlideBtnAuto.textContent = "<-auto";

  slideShowContainer.appendChild(previousSlideBtn);
  slideShowContainer.appendChild(nextSlideBtn);
  slideShowContainer.appendChild(previousSlideBtnAuto);
  slideShowContainer.appendChild(stopAutoSlideBtn);
  slideShowContainer.appendChild(nextSlideBtnAuto);

  let slideGallery = document.createElement("div");

  let img = document.createElement("img");
  img.src = images[activeSlideIndex];

  slideGallery.appendChild(img);

  slideShowContainer.appendChild(slideGallery);

  //   EventListeners for buttons
  nextSlideBtn.addEventListener("click", slideForward);
  previousSlideBtn.addEventListener("click", slideBackward);
  nextSlideBtnAuto.addEventListener("click", slideForwardAuto);
  previousSlideBtnAuto.addEventListener("click", slideBackwardAuto);
  stopAutoSlideBtn.addEventListener("click", clearBackwardTimer);
  stopAutoSlideBtn.addEventListener("click", clearForwardTimer);
  stopAutoSlideBtn.addEventListener("click", clearForwardTimer);
  delayBtn.addEventListener("click", getUserTimer);
}
function renderInput() {
  let userControls = document.createElement("div");

  let userTimerInput = document.createElement("input");
  let userTimerLabel = document.createElement("Label");
  let delayBtn = document.createElement("button");
  userTimerInput.placeholder = "type in a number";
  userTimerInput.id = "userTimer";
  userTimerLabel.setAttribute = ("for", "userTimer");
  userTimerLabel.innerText = "Set delay in seconds:";
  delayBtn.textContent = "Enter";

  slideShowContainer.appendChild(userTimerLabel);
  slideShowContainer.appendChild(userTimerInput);
  slideShowContainer.appendChild(delayBtn);
}
renderElements();
