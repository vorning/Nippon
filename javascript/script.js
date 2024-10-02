// Adding functionality to the submit button
document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();  // Prevent page reload
    alert('Besked sendt!');  // Display alert on submit
});

// JavaScript for at ændre baggrundsfarve på navbar ved scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const topdivider = this.document.querySelector('.top-divider');
    if (window.scrollY > 1) { // Tjek om vi har scrollet mere end 50px
        navbar.classList.add('scrolled');
        topdivider.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        topdivider.classList.remove('scrolled');
    }
});