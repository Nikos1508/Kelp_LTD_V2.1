const reviews = document.querySelectorAll('.review');

// Loop through the review sections and add a click event listener to each one
reviews.forEach(review => {
  review.addEventListener('click', () => {
    // Toggle the "active" class on the clicked review section
    review.classList.toggle('active');
  });
});