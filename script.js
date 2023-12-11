const zoomContainer = document.querySelector(".container");
const newAcc = document.querySelector(".newAccount");
const lower = document.querySelector(".lower");
const upper1 = document.querySelector(".upper1");
const signIn = document.querySelector(".signIn");
const upper2 = document.querySelector(".upper2");
const closebtn1 = document.querySelector(".closebtn-1");
const header1 = document.querySelector(".header1");
let scale = 1;

window.addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta > 0) {
    // Scrolling down (zoom out)
    scale -= 0.005;
  } else {
    // Scrolling up (zoom in)
    scale += 0.001;
  }

  // Set a minimum and maximum scale if desired
  scale = Math.max(0.5, Math.min(scale, 3));

  // Apply the scale transformation
  zoomContainer.style.transform = `scale(${scale})`;
});

newAcc.addEventListener("click", function () {
  upper1.classList.remove("hidden");
  lower.classList.add("lower1");
});

signIn.addEventListener("click", function () {
  upper2.classList.remove("hidden");
  lower.classList.add("lower1");
});

closebtn1.addEventListener("click", function () {
  header1.classList.add("hidden");
});
