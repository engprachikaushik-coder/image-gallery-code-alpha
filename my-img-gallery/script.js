const filterBtns = document.querySelectorAll(".filter-btns button");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;
let itemsArray = Array.from(galleryItems);

// Filter functionality
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btns .active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      item.style.display = (filter === "all" || item.dataset.category === filter) ? "block" : "none";
    });

    itemsArray = Array.from(document.querySelectorAll(".gallery-item")).filter(item => item.style.display === "block");
  });
});

// Lightbox open
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.querySelector("img").src;
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next & Prev buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % itemsArray.length;
  lightboxImg.src = itemsArray[currentIndex].querySelector("img").src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + itemsArray.length) % itemsArray.length;
  lightboxImg.src = itemsArray[currentIndex].querySelector("img").src;
});

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
