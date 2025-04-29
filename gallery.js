      
      
      
 window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    // Change header background when scrolling
    header.classList.toggle('scrolled', scrollPosition > 0);
});

 // Mobile menu toggle functionality
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navContainer = document.querySelector('.nav-container');
 
 mobileMenuBtn.addEventListener('click', function() {
     navContainer.classList.toggle('active');
     
     // Change icon based on menu state
     const icon = this.querySelector('i');
     if (navContainer.classList.contains('active')) {
         icon.classList.remove('fa-bars');
         icon.classList.add('fa-times');
     } else {
         icon.classList.remove('fa-times');
         icon.classList.add('fa-bars');
     }
 });
      
      
      