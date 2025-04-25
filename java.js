// Parallax effect for hero image
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroImage = document.getElementById('hero-image');
    const header = document.querySelector('header');
    
    // Parallax effect
    heroImage.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    
    // Change header background when scrolling
    header.classList.toggle('scrolled', scrollPosition > 0);
});











// third-section-js


 // Simple script to show loading animation when button is clicked
 document.addEventListener('DOMContentLoaded', function() {
    // Get button and loading overlay
    const checkBtn = document.getElementById('check-availability');
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // Show loading animation when button is clicked
    checkBtn.addEventListener('click', function() {
        // Display the loading overlay
        loadingOverlay.classList.add('active');
        
        // Hide loading overlay after 3 seconds (simulates search completion)
        setTimeout(function() {
            loadingOverlay.classList.remove('active');
            // Show a message when search is complete
            alert('Search complete! Here are your results.');
        }, 3000);
    });
});






$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
  });
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
      responsive:{
        0:{ items: 1 },
        600:{ items: 2 },
        1000:{ items: 3 }
      }
    });
  });