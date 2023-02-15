$(document).ready(function () {
  $("#header-section").load("real-state-header.html");
  $("#service-slider-section").load("service-slider.html");
  $("#photo-gallery-section").load("photo-gallery.html");
  $("#contact-form-section").load("contact-form.html");
  $("#footer-section").load("footer.html");
});

// aos animation scroll initializing for on load scrolling
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 50, // offset (in px) from the original trigger point
  // values from 0 to 3000, with step 50ms
  delay:1000,
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
});


// area section

// var open(option-n){

 // var options = document.querySelectorAll(".option");
 // console.log(options)

 // if(option-n==1){
 //   options[option-n];
 // }
 // };
