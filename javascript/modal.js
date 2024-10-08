// Få fat i modal og knapper
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.getElementById('confirmOrder');
const continueBtn = document.querySelector('.continue-btn');

// Få fat i toggle-knapperne til uge/måned
const weeklyOption = document.getElementById('weekly-option');
const monthlyOption = document.getElementById('monthly-option');

// Variabel til at holde styr på om vi viser pris pr. uge eller måned
let isWeekly = true;  // Standard til uge

// Event listeners til at skifte mellem uge/måned
weeklyOption.addEventListener('click', function() {
    isWeekly = true;
    weeklyOption.classList.add('active');
    monthlyOption.classList.remove('active');
    updatePrices();  // Opdater priserne med det samme
});

monthlyOption.addEventListener('click', function() {
    isWeekly = false;
    monthlyOption.classList.add('active');
    weeklyOption.classList.remove('active');
    updatePrices();  // Opdater priserne med det samme
});

// Funktion til at opdatere priserne i UI, når der skiftes mellem uge/måned
function updatePrices() {
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        const weeklyPrice = card.getAttribute('data-week-price');
        const monthlyPrice = card.getAttribute('data-month-price');
        const priceElement = card.querySelector('.price');

        if (isWeekly) {
            priceElement.textContent = `${weeklyPrice},-`;  // Pris pr. uge
        } else {
            priceElement.textContent = `${monthlyPrice},-`;  // Pris pr. måned
        }
    });
}

// Håndter valg af kasser
const chooseButtons = document.querySelectorAll('.choose-btn');

chooseButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Fjern "selected" og opdater tekst fra alle kasser
        document.querySelectorAll('.plan-card').forEach(card => {
            card.classList.remove('selected');
            card.querySelector('.choose-btn').textContent = 'VÆLG'; // Skift tekst til "VÆLG"
        });

        // Tilføj "selected" til det valgte kort og skift knap-tekst til "Valgt"
        const planCard = this.closest('.plan-card');
        planCard.classList.add('selected');
        this.textContent = 'VALGT'; // Skift tekst på den valgte kasse til "VALGT"

        console.log("Valgt kasse:", planCard.id);  // Debug: Tjek hvilken kasse der vælges
        // Ændr knappen "Videre til bestilling" baseret på valget
        if (planCard.id === 'jiyu') {
            continueBtn.textContent = 'Videre til valg af indhold'; // Ændrer knap-tekst for Jiyū
        } else {
            continueBtn.textContent = 'Videre til bestilling'; // Ændrer knap-tekst for de andre kasser
        }
    });
});

// Når "Videre til bestilling"-knappen trykkes
continueBtn.addEventListener('click', function() {
    // Find det valgte plan-card
    const selectedCard = document.querySelector('.plan-card.selected');
    console.log("Valgt plan-card:", selectedCard);  // Debug

    // Hvis der ikke er valgt nogen kasse, vis en advarsel
    if (!selectedCard) {
        alert('Vælg en kasse først!');
        return; // Stop funktionen her
    }

    // Hent det valgte korts detaljer og pris
    const productName = selectedCard.querySelector('h3').textContent;
    const weeklyPrice = selectedCard.getAttribute('data-week-price');
    const monthlyPrice = selectedCard.getAttribute('data-month-price');

    // Sæt prisen afhængigt af, om vi viser pris pr. uge eller måned
    const productPrice = isWeekly ? `${weeklyPrice},-` : `${monthlyPrice},-`;

    // Hent den skjulte beskrivelse fra det centrale område
    const hiddenDescription = document.querySelector(`#desc-${selectedCard.id}`);
    if (hiddenDescription) {
        const detailsContent = hiddenDescription.innerHTML; // Hent den centrale skjulte beskrivelse

        // Opdater modal med produktdetaljer
        cartTitle.textContent = productName;
        cartDetails.innerHTML = `<strong>Indhold:</strong><br>${detailsContent}`; // Brug den skjulte beskrivelse i modalboksen
        cartPrice.textContent = `${productPrice} (${isWeekly ? 'Pris pr. uge' : 'Pris pr. md'})`;

        // Vis modal
        cartModal.style.display = 'block';
    } else {
        console.error("Ingen beskrivelse fundet for denne kasse.");  // Debug
        alert('Ingen detaljer fundet for denne kasse.');
    }
});

// Luk modal når der klikkes på kryds-knappen
closeBtn.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

// Skjul modal hvis der klikkes udenfor modalindholdet
window.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});
