// til-toppen.js

// Få fat i knappen
const tilToppenKnappen = document.getElementById("tilToppenKnappen");

// Vis knappen når brugeren scroller ned 20px fra toppen af dokumentet
window.onscroll = function() {
  visKnappen();
};

function visKnappen() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    tilToppenKnappen.style.display = "block"; // Sørg for knappen er i DOM'en
    tilToppenKnappen.style.opacity = "1"; // Fader knappen ind
  } else {
    tilToppenKnappen.style.opacity = "0"; // Fader knappen ud
    // Brug timeout til at skjule knappen helt efter fade-out er færdig
    setTimeout(function() {
      if (tilToppenKnappen.style.opacity === "0") {
        tilToppenKnappen.style.display = "none";
      }
    }, 500); // Match tiden til din CSS-transition (0.5s)
  }
}

// Når brugeren klikker på knappen, scroll til toppen af siden
tilToppenKnappen.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
