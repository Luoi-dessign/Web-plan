const panels = document.querySelectorAll(".hero__img");
const nav = document.querySelectorAll(".navbar__link");
const btn = document.querySelector(".footer-form__submit");
const contact1 = document.querySelector(".appointment__btn");
const contact2 = document.querySelector(".btn-book");
const denist = document.querySelector(".team__cta");

panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}

nav.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveNav();
    item.classList.add("active");
  });
});

function removeActiveNav() {
  nav.forEach((item) => {
    item.classList.remove("active");
  });
}

btn.addEventListener("click", (b) => {
  b.preventDefault();
  alert("You have successfully registered!");
});

contact1.addEventListener("click", (c) => {
  c.preventDefault();
  alert("We will contact you as soon as possible!");
});
contact2.addEventListener("click", (c) => {
  c.preventDefault();
  alert("We will contact you as soon as possible!");
});
denist.addEventListener("click", (c) => {
  c.preventDefault();
  alert("We will contact you as soon as possible!");
});

// slider teams
const initSlider = () => {
  const teamList = document.querySelector(".team__list");
  const slideBtn = document.querySelectorAll(".control__btn--team");
  slideBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = teamList.clientWidth * direction;
      teamList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};
window.addEventListener("load", initSlider);
