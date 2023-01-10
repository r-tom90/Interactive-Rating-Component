const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const ratingText = document.getElementById("rating");

const submitted = () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
};

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratingText.innerHTML = rating.innerHTML;
  });
});

// click events
submitButton.addEventListener("click", submitted);
