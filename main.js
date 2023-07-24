const btndarkMode = document.querySelector(".dark-mode-btn");

if (localStorage.getItem("darMode") === "dark") {
  btndarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

if (
  window.matchMedia &&
  window.matchMedia("prefers-color-scheme: dark)").matches
) {
  btndarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

btndarkMode.onclick = function () {
  btndarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  window.matchMedia("prefers-color-scheme: dark)").addEventListener('change', Event) {
    const newColorScheme = event.matches  "dark"  'light';

    if (newColorScheme==='dark');

    btndarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  }
  }

  

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }

