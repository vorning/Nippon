document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Forhindrer den normale formularafsendelse

    // Simulér en besked om at formularen er sendt
    document.getElementById('formMessage').textContent = "Tak for din besked! Vi vender tilbage snarest muligt.";
    
    // Nulstil formular
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const topdivider = document.querySelector('.top-divider');
    const tilToppenKnappen = document.getElementById('tilToppenKnappen');

    // Opret progress-ring som SVG
    const progressRing = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    progressRing.setAttribute("class", "progress-ring");
    progressRing.setAttribute("width", "60");
    progressRing.setAttribute("height", "60");

    const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    progressCircle.setAttribute("class", "progress-ring__circle");
    progressCircle.setAttribute("cx", "30");
    progressCircle.setAttribute("cy", "30");
    progressCircle.setAttribute("r", "28");
    progressRing.appendChild(progressCircle);
    tilToppenKnappen.appendChild(progressRing);

    // Beregn cirklens omkreds for korrekt fyld
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Sæt strokeDasharray og strokeDashoffset
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        // Beregn det nye offset baseret på scroll-procent
        const offset = circumference - scrollPercent * circumference;
        progressCircle.style.strokeDashoffset = offset;

        // Skift synlighed afhængig af scroll-position for navbar og tilToppenKnappen
        if (scrollTop > 20) {
            navbar?.classList.add('scrolled');
            topdivider?.classList.add('scrolled');
            tilToppenKnappen.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
            topdivider?.classList.remove('scrolled');
            tilToppenKnappen.classList.remove('scrolled');
        }
    });

    // Scroll til toppen når knappen klikkes
    tilToppenKnappen.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
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

