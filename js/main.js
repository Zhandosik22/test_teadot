(() => {
  "use strict";

  const packs = document.querySelectorAll(".pack");
  const sku = document.querySelector("#sku");
  const currentPrice = document.querySelector("#current-price");
  const oldPrice = document.querySelector("#old-price");
  const cartButton = document.querySelector("#cart-button");
  const toast = document.querySelector("#toast");
  const favoriteButton = document.querySelector(".favorite-button");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mainImage = document.querySelector("#main-product-image");
  const thumbs = document.querySelectorAll(".thumb");

  packs.forEach((pack) => {
    pack.addEventListener("click", () => {
      packs.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      pack.classList.add("active");
      pack.setAttribute("aria-pressed", "true");

      sku.textContent = pack.dataset.sku;
      currentPrice.textContent = pack.dataset.price;
      oldPrice.textContent = pack.dataset.old;
    });
  });

  cartButton.addEventListener("click", () => {
    showToast("Товар добавлен в корзину");
  });

  favoriteButton.addEventListener("click", () => {
    const active = favoriteButton.classList.toggle("is-active");
    favoriteButton.setAttribute("aria-pressed", String(active));
    showToast(active ? "Добавлено в избранное" : "Удалено из избранного");
  });

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");

      const image = thumb.dataset.image;
      if (image) {
        mainImage.src = image;
      }
    });
  });

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }
})();
