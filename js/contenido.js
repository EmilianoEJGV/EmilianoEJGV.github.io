document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.cards');
  const showCardsBtn = document.getElementById('show-cards-btn');

  cardsContainer.style.display = 'none';

  showCardsBtn.addEventListener('click', function() {
    
    cardsContainer.style.display = 'flex';
    showCardsBtn.parentNode.style.display = 'none';
  });
});