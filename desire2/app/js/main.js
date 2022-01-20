currentSlide2(1);
 
console.log('lololollolol')
 

var slideIndex = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex +=n);
}
 

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
  
  
}
 

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("slider__block");
   
  var dots = document.getElementsByClassName("portfolio__item1");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
      
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("dot2", "");
  }
  slides2[slideIndex-1].style.display = "flex";
 
  dots[slideIndex-1].className += "dot2";
  
    
}

