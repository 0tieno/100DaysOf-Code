


//...........................SLIDESHOW.........................//


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  if (slideIndex >= slides.length) {
    slideIndex = 0; // Reset to the first slide
}

}

 // Automatic slideshow
function autoShowSlides() {
  slideIndex++;
  showSlides();
}

setInterval(autoShowSlides, 5000); // Change slide every 10 seconds (10000 milliseconds)



//....................NAVIGATION LINKS........................//

// Get a reference to the element with the ID 'main' and store it in the 'nav' variable
const nav = document.querySelector('#main');

// Store the initial vertical position (offset) of the 'nav' element relative to the top of the viewport
let topOfNav = nav.offsetTop;

// Function to handle fixing the navigation bar when scrolling
function fixNav() {
  // Check if the current vertical scroll position (window.scrollY) is greater than or equal to the initial position of the 'nav' element
  if (window.scrollY >= topOfNav) {
    // Add the height of the 'nav' element as padding to the body to prevent content from jumping up
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    // Add the 'fixed-nav' class to the body to apply fixed positioning to the 'nav' element
    document.body.classList.add('fixed-nav');
  } else {
    // Remove the 'fixed-nav' class from the body to revert to the normal positioning of the 'nav' element
    document.body.classList.remove('fixed-nav');
    // Reset the body's padding to 0 to remove the added padding
    document.body.style.paddingTop = 0;
  }
}

// Add a scroll event listener to the window that calls the 'fixNav' function when scrolling occurs
window.addEventListener('scroll', fixNav);





