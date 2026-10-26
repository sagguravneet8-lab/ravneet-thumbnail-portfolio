
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the footer year.
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation.
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Portfolio category filters.
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".work-card");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;

      filters.forEach((filter) => {
        filter.classList.remove("active");
      });
      button.classList.add("active");

      cards.forEach((card) => {
        const matches =
          selectedCategory === "all" ||
          card.dataset.category === selectedCategory;

        card.hidden = !matches;
      });
    });
  });

  // Report missing images in the browser console.
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      console.error("Image could not be loaded:", img.getAttribute("src"));
    });
  });
});
