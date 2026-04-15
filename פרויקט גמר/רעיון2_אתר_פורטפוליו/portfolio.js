// ===== portfolio.js — קוד משותף לכל הדפים =====

// Dark Mode
const darkBtn = document.getElementById("darkBtn")
if (darkBtn) {
  // טעינת ההגדרה השמורה
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light")
    darkBtn.textContent = "☀️"
  }

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("light")
    let isLight = document.body.classList.contains("light")
    darkBtn.textContent = isLight ? "☀️" : "🌙"
    localStorage.setItem("theme", isLight ? "light" : "dark")
  })
}

// סמן קישור פעיל בתפריט
let page = window.location.pathname.split("/").pop() || "index.html"
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === page) {
    link.classList.add("active")
  } else {
    link.classList.remove("active")
  }
})

// Scroll Animations (IntersectionObserver)
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible")

      // הפעל skill bars אם יש
      e.target.querySelectorAll(".skill-fill[data-width]").forEach(bar => {
        bar.style.width = bar.dataset.width + "%"
      })
    }
  })
}, { threshold: 0.1 })

// הפעל אנימציה על כל .animate
document.querySelectorAll(".animate").forEach(el => observer.observe(el))
