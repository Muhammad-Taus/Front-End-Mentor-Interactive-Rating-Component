// List items active inactive states, rating value retrival
// Select all list items
const listItems = document.querySelectorAll('.container ul li');
const rating = document.querySelectorAll('.rating');

// Declare a variable to store the selected rating value
let ratingValue = '';

// Add click event listener to each list item
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all items
        listItems.forEach(li => li.classList.remove('active'));

        // Add 'active' class to the clicked item
        item.classList.add('active');

        // Set the selected rating value
        // ratingValue = item.innerText; // Or use item.textContent if needed
        ratingValue = item.childNodes[0].value; // Or use item.textContent if needed
        // console.log(ratingValue);

    });
});



// Select the submit button and sections
const btnSubmit = document.querySelector(".btn-submit");
const ratingSection = document.querySelector(".rating-section");
const thanksSection = document.querySelector(".thanks-section");
const selectedRating = document.getElementById("selected-rating");

// Add click event listener to the submit button
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    // Set the selected rating value in the "Thanks" section
    selectedRating.innerText = `You selected ${ratingValue} out of 5`;

    // Show the "Thanks" section and hide the rating section
    thanksSection.classList.remove("hidden");
    ratingSection.classList.add("hidden");
});
