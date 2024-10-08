// theme-toggle.js

// Få fat i sol-knappen, body-elementet og teksten
const sunButton = document.getElementById('themeSun');
const body = document.body;
const themeText = document.querySelector('.theme-text p'); // Få fat i tekst-elementet

// Funktion til at skifte tema
sunButton.onclick = function() {
  body.classList.toggle('light-theme'); // Skift mellem mørkt og lyst tema

  // Skift teksten afhængigt af temaet
  if (body.classList.contains('light-theme')) {
    themeText.textContent = 'For lyst?'; // Skift tekst til "For lyst?" i det lyse tema
  } else {
    themeText.textContent = 'For mørkt?'; // Skift tekst tilbage til "For mørkt?" i det mørke tema
  }
};
