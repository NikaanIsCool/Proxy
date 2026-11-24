const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  themeButton.textContent = isLight ? "☾" : "☀";

  localStorage.setItem(
    "prodigy-theme",
    isLight ? "light" : "dark"
  );
});

if (localStorage.getItem("prodigy-theme") === "light") {
  document.body.classList.add("light");
  themeButton.textContent = "☾";
}
