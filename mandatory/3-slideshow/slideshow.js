// Write your code here
let images = [
  "https://picsum.photos/600/601",
  "https://picsum.photos/600/602",
  "https://picsum.photos/600/603",
  "https://picsum.photos/600/604",
  "https://picsum.photos/600/605",

  "https://picsum.photos/600/606",
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
  let heading = document.createElement("h1");
  let nextSlideBtn = document.createElement("button");
  let previousSlideBtn = document.createElement("button");
  let nextSlideBtnAuto = document.createElement("button");
  let previousSlideBtnAuto = document.createElement("button");
  let stopAutoSlideBtn = document.createElement("button");
  let userTimerInput = document.createElement("input");
  let userTimerLabel = document.createElement("Label");
  let delayBtn = document.createElement("button");
  let slideControlContainer = document.createElement("div");

  heading.textContent = "Random Images";
  slideControlContainer.classList.add("slideControls");
  previousSlideBtn.classList.add("left");
  nextSlideBtn.classList.add("right");
  nextSlideBtn.textContent = ">";
  previousSlideBtn.textContent = "<";
  nextSlideBtnAuto.textContent = "Auto Right";
  stopAutoSlideBtn.textContent = "stop";
  previousSlideBtnAuto.textContent = "Auto Left";
  //   userTimerInput.placeholder = "";
  userTimerInput.id = "userTimer";
  userTimerLabel.setAttribute = ("for", "userTimer");
  userTimerLabel.innerHTML = "Delay Timer <span>(in seconds):</span>";
  delayBtn.textContent = "Set";

  slideControlContainer.appendChild(userTimerLabel);
  slideControlContainer.appendChild(userTimerInput);
  slideControlContainer.appendChild(delayBtn);
  slideControlContainer.appendChild(previousSlideBtnAuto);
  slideControlContainer.appendChild(stopAutoSlideBtn);
  slideControlContainer.appendChild(nextSlideBtnAuto);

  slideShowContainer.appendChild(slideControlContainer);

  let slideGallery = document.createElement("div");
  slideGallery.classList.add("imageContainer");
  let img = document.createElement("img");
  img.src = images[activeSlideIndex];

  slideGallery.appendChild(previousSlideBtn);
  slideGallery.appendChild(img);
  slideGallery.appendChild(nextSlideBtn);
  slideShowContainer.appendChild(slideGallery);
  slideShowContainer.appendChild(heading);

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

renderElements();
