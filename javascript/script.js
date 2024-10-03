document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Forhindrer den normale formularafsendelse

    // Simulér en besked om at formularen er sendt
    document.getElementById('formMessage').textContent = "Tak for din besked! Vi vender tilbage snarest muligt.";
    
    // Nulstil formular
    this.reset();
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

document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector('.toggle');
    const slider = document.querySelector('.slider');
    const monthlyOption = document.getElementById('monthly-option');
    const weeklyOption = document.getElementById('weekly-option');
    const plans = document.querySelectorAll('.plan-card');
    const badgePrice = document.querySelector('.plan-card.special .normal-price');
    
    let isMonthly = false; // Starter med "Uge" som default

    function updatePrices() {
        plans.forEach(plan => {
            const weekPrice = plan.getAttribute('data-week-price');
            const monthPrice = plan.getAttribute('data-month-price');
            const priceElement = plan.querySelector('.price');
            
            // Update price based on whether it's monthly or weekly
            if (isMonthly) {
                priceElement.textContent = `${monthPrice},-`;
            } else {
                priceElement.textContent = `${weekPrice},-`;
            }
        });

        // Update only the badge price for the special plan
        if (isMonthly) {
            badgePrice.textContent = "4599,-"; // Monthly price for special plan
        } else {
            badgePrice.textContent = "1199,-"; // Weekly price for special plan
        }
    }

    function togglePeriod() {
        isMonthly = !isMonthly;
        if (isMonthly) {
            slider.style.left = "50%"; // Måned er nu til højre
            monthlyOption.classList.add('active');
            weeklyOption.classList.remove('active');
        } else {
            slider.style.left = "0"; // Uge er nu til venstre
            monthlyOption.classList.remove('active');
            weeklyOption.classList.add('active');
        }
        updatePrices();
    }

    toggle.addEventListener('click', togglePeriod);
    updatePrices();
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

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dots .dot');

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(-${index * 100}%)`;
            testimonial.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showTestimonial(currentIndex);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
});

