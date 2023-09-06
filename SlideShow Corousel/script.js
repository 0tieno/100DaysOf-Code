


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

setInterval(autoShowSlides, 10000); // Change slide every 10 seconds (10000 milliseconds)




// ....Function to show or hide the "Welcome to KYUSDA" text....//

// function showWelcomeText(show) {
//     const welcomeText = document.querySelector('.slideshow-text');
//     if (show) {
//       welcomeText.style.opacity = '1';
//     } else {
//       welcomeText.style.opacity = '0';
//     }
//   }



//....................nav........................//

const nav = document.querySelector('#main');
    let topOfNav = nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }

    window.addEventListener('scroll', fixNav);





