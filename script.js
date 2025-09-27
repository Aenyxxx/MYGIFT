document.getElementById("giftBox").addEventListener("click", function() {
  const box = this;

  // Add animation class
  box.classList.add("open-animation");

  // Wait for animation to finish (1s), then redirect
  setTimeout(() => {
    window.location.href = "main/index2.html";
  }, 1000);
});
