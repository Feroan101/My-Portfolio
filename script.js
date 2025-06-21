window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const trigger = document.getElementById("resume");

  if (trigger) {
    trigger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});

const carousel = document.querySelector('.scrollable-carousel');
const cards = document.querySelectorAll('.project-card');

function highlightCenterCard() {
const carouselRect = carousel.getBoundingClientRect();
const centerX = carouselRect.left + carouselRect.width / 2;

cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;

    const distance = Math.abs(centerX - cardCenterX);

    if (distance < cardRect.width / 2) {
    card.classList.add('active');
    } else {
    card.classList.remove('active');
    }
});
}

function scrollToSecondCard() {
if (cards.length >= 2) {
    const secondCard = cards[1];
    secondCard.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
}
}

// Use "load" to ensure DOM is ready
window.addEventListener('load', () => {
scrollToSecondCard();
highlightCenterCard();
});

carousel.addEventListener('scroll', highlightCenterCard);