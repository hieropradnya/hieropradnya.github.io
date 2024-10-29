// Typing animation
document.addEventListener("DOMContentLoaded", function () {
  const words = ["computer science student", "software engineer", "fullstack developer"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 150;
  const delay = 1500;

  const typewriter = document.getElementById("typewriter");

  function type() {
    if (i >= words.length) {
      i = 0;
    }

    const fullWord = words[i];

    if (isDeleting) {
      currentWord = fullWord.substring(0, j--);
    } else {
      currentWord = fullWord.substring(0, j++);
    }

    typewriter.textContent = currentWord;

    let currentSpeed = speed;

    if (isDeleting) {
      currentSpeed /= 2;
    }

    if (!isDeleting && currentWord === fullWord) {
      currentSpeed = delay;
      isDeleting = true;
    } else if (isDeleting && currentWord === "") {
      isDeleting = false;
      i++;
      currentSpeed = 500;
    }

    setTimeout(type, currentSpeed);
  }

  type();
});

// untuk senter
const light = document.querySelector(".light");

document.addEventListener("mousemove", (e) => {
  light.style.left = `${e.clientX - light.clientWidth / 2}px`;
  light.style.top = `${e.clientY - light.clientHeight / 2}px`;
});

// untuk navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > window.innerHeight / 2) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// activity
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const viewLessBtn = document.getElementById("viewLessBtn");
  const additionalActivities = document.getElementById("additionalActivities");
  const viewLessContainer = document.getElementById("viewLessContainer");

  viewMoreBtn.addEventListener("click", function () {
    additionalActivities.classList.remove("d-none");
    viewMoreBtn.classList.add("d-none");
    viewLessContainer.classList.remove("d-none");
  });

  viewLessBtn.addEventListener("click", function () {
    additionalActivities.classList.add("d-none");
    viewMoreBtn.classList.remove("d-none");
    viewLessContainer.classList.add("d-none");
  });
});

// foto project overlay
const photos = document.querySelectorAll(".photo img");
const overlay = document.getElementById("photo-overlay");
const overlayImage = overlay.querySelector("img");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    overlayImage.src = photo.src;
    overlay.classList.add("show");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
});
