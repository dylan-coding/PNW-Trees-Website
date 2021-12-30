var index = 0;
showSlide();

function changeSlide(n) {
  index += n
  var i;
  var pics = document.getElementsByClassName("slides");
  var slideTracker = document.getElementsByClassName("tracker");
  if (n > pics.length) {index = 1}    
  if (n < 1) {index = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";  
  }
  for (i = 0; i < slideTracker.length; i++) {
      slideTracker[i].className = slideTracker[i].className.replace(" active", "");
  }
  pics[index-1].style.display = "block";  
  slideTracker[index-1].className += " active";
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var slideTracker = document.getElementsByClassName("tracker");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  for (i = 0; i < slideTracker.length; i++) {
    slideTracker[i].className = slideTracker[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  slideTracker[index-1].className += " active";
  setTimeout(showSlide, 5000);
}