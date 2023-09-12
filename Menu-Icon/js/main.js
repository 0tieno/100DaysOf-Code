
// const menuIcon = document.querySelector('.container');

// menuIcon.addEventListener('click', () => {
//     menuIcon.classList.toggle('change');
// });




// Alternate code of the same fuction commented//

// Select the HTML element with the class 'container' and store it in the 'menuIcon' variable.
const menuIcon = document.querySelector('.container');

// Add an event listener to the 'menuIcon' element for the 'click' event.
menuIcon.addEventListener('click', function() {
    // When the 'click' event occurs, toggle the 'change' class on the 'menuIcon' element.
    menuIcon.classList.toggle('change');
});
