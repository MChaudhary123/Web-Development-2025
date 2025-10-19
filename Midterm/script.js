// Muhammad Chaudhry

// --- Dynamic Greeting ---
const greeting = document.createElement("h2");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon!";
} else {
  greeting.textContent = "Good evening!";
}

document.body.prepend(greeting); // Adds greeting to top of page

// --- Dark Mode Toggle ---
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// --- Scroll to Top Button ---
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.id = "scrollToTopBtn";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

// Show button after scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll back to top smoothly
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Update Footer Year ---
document.getElementById("year").textContent = new Date().getFullYear();
