document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.cards');
  const showCardsBtn = document.getElementById('show-cards-btn');
  const ball = document.querySelector('.ball');
  const title = document.getElementById('titulo1');

  
  cardsContainer.style.display = 'none';

  showCardsBtn.addEventListener('click', function() {
      
      ball.style.display = 'none';
      
     
      title.style.display = 'none';

      
      const cardsContainerHeight = cardsContainer.offsetHeight;

      
      document.body.style.height = `calc(100vh + ${cardsContainerHeight}px)`;
      
      
      showCardsBtn.style.display = 'none';

      
      let colorValue = 35; // Empezar desde el color #132730
      const interval = setInterval(function() {
          colorValue -= 1;
          if (colorValue <= 0) {
              clearInterval(interval);
              document.body.style.background = '#000'; // Cambiar a color negro
              
              cardsContainer.style.display = 'flex';
          } else {
              document.body.style.background = `rgb(${colorValue},${colorValue},${colorValue})`; // Cambiar gradualmente a un tono más oscuro
          }
      }, 10);
  });
});
