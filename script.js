/* Dynamic Greeting (Navbar) */
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good Morning!";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon!";
} else {
  greeting.textContent = "Good Evening!";
}

/* Dark Mode Toggle */

const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change button text
  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️ Light Mode";
  } else {
    darkToggle.textContent = "🌙 Dark Mode";
  }
});

/* Scroll-To-Top Button */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
