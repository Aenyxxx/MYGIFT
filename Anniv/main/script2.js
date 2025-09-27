const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

// Get all extra cards
const extras = document.querySelectorAll(".extra-card");

// Utility: hide all extra cards
function hideExtras() {
  extras.forEach(extra => extra.classList.remove("active"));
}

// Show modal with specific card content
function openModal(extraId) {
  hideExtras();
  document.getElementById(extraId).classList.add("active");
  modal.style.display = "flex";
}

// Attach click events to main cards
document.getElementById("card1").onclick = () => {
  window.location.href = "Flower/flower.html"; // replace with your target HTML file
};
document.getElementById("card2").onclick = () => openModal("extra2");
document.getElementById("card3").onclick = () => openModal("extra3");
// document.getElementById("card4").onclick = () => openModal("extra4");

// Close modal
closeBtn.onclick = () => { modal.style.display = "none"; };

// Close modal when clicking outside
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
