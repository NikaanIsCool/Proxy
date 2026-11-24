// ==========================================
// PRODIGY PROXY - MAIN JAVASCRIPT
// ==========================================

// 1. LIVE CLOCK AND DATE
function updateClock() {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  const now = new Date();

  if (clock) {
    clock.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  if (date) {
    date.textContent = now.toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}

updateClock();
setInterval(updateClock, 1000);


// 2. SEARCH BAR
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
      return;
    }

    let destination;

    // Open a valid web address directly
    if (/^https?:\/\//i.test(query)) {
      destination = query;
    } 
    // Open a domain entered without https://
    else if (
      /^[a-z0-9-]+(\.[a-z0-9-]+)+([/?#].*)?$/i.test(query) &&
      !query.includes(" ")
    ) {
      destination = "https://" + query;
    } 
    // Otherwise, search Google
    else {
      destination =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);
    }

    window.open(destination, "_blank", "noopener,noreferrer");
  });
}


// 3. DARK AND LIGHT THEME
const themeButton = document.getElementById("themeButton");

function setTheme(theme) {
  document.body.classList.toggle("light-theme", theme === "light");

  if (themeButton) {
    themeButton.textContent =
      theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

const savedTheme = localStorage.getItem("prodigy-theme") || "dark";
setTheme(savedTheme);

if (themeButton) {
  themeButton.addEventListener("click", function() {
    const isLight = document.body.classList.contains("light-theme");
    const newTheme = isLight ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("prodigy-theme", newTheme);
  });
}


// 4. QUICK ACCESS LINKS
document.querySelectorAll(".quick-link").forEach(function(link) {
  link.addEventListener("click", function(event) {
    const url = link.getAttribute("href");

    if (!url || !/^https?:\/\//i.test(url)) {
      event.preventDefault();
    }
  });
});


// 5. WELCOME MESSAGE
console.log("✦ Prodigy Proxy loaded successfully!");
