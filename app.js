const btnSubmit = document.querySelector(".btn-submit");
const ratingSection = document.querySelector(".rating-section");
const thanksSection = document.querySelector(".thanks-section");

btnSubmit.addEventListener("click", () => {
    thanksSection.classList.remove("hidden");
    ratingSection.classList.add("hidden");
});
