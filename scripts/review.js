const reviewDisplay = document.querySelector(".visits");

let reviewCount =
    Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

reviewDisplay.textContent = reviewCount;