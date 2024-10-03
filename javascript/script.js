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

document.addEventListener("DOMContentLoaded", function () {
    const toggleWrapper = document.querySelector('.toggle-wrapper');
    const slider = document.querySelector('.slider');
    const monthlyOption = document.getElementById('monthly-option');
    const weeklyOption = document.getElementById('weekly-option');
    
    // Initial state - set "Måned" as active
    let isMonthly = true;
    monthlyOption.classList.add('active');
    weeklyOption.classList.remove('active');
    slider.style.left = '0%';

    // Handle click on toggle
    toggleWrapper.addEventListener('click', function () {
        isMonthly = !isMonthly; // Toggle between states

        if (isMonthly) {
            slider.style.left = '0%';
            monthlyOption.classList.add('active');
            weeklyOption.classList.remove('active');
        } else {
            slider.style.left = '50%';
            monthlyOption.classList.remove('active');
            weeklyOption.classList.add('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const planCards = document.querySelectorAll('.plan-card');

    // Highlight the selected plan
    planCards.forEach(card => {
        card.addEventListener('click', function () {
            planCards.forEach(c => c.classList.remove('selected')); // Fjern 'selected' fra alle kort
            card.classList.add('selected'); // Tilføj 'selected' til det valgte kort
        });
    });
});

