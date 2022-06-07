let previous;
let userRating;

const ratingComponent = document.querySelector(".rating-component");
const thanksComponent = document.querySelector(".thanks-component");
const submitBtn = document.querySelector(".submit");
const ratings = document.querySelectorAll(".number");
const selectedRating = document.querySelector(".selected-rating");

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    if (previous) {
      previous.classList.remove("active");
    }
    event.target.classList.add("active");
    previous = event.target;
    userRating = event.target.innerText;
    console.log(userRating);
  });
});

submitBtn.addEventListener("click", (event) => {
  selectedRating.innerText = `You selected ${userRating} out of 5`;
  ratingComponent.style.display = "none";
  thanksComponent.style.display = "flex";
});
