const menu = document.getElementById("search_menu");
const menu_button = document.getElementById("menu_button");

menu_button.addEventListener('click', function() {
   if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
   } else {
      menu.style.display = 'none';
   }
});
menu.addEventListener('click', function() {
   if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
   } else {
      menu.style.display = 'none';
   }
});
document.addEventListener('click', function(event) {
   if (menu.style.display === 'block' && !menu.contains(event.target) && event.target !== menu_button) {
      menu.style.display = 'none';
   }
});
document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape' && menu.style.display === 'block') {
      menu.style.display = 'none';
   }
});

document.getElementById('search_input').addEventListener('input', function() {
   const searchTerm = this.value.toLowerCase();
   const companyCards = document.querySelectorAll('.company__card');
   let hasResults = false;
   
   companyCards.forEach(card => {
      const companyName = card.querySelector('.company__card__name').textContent.toLowerCase();
      if (companyName.includes(searchTerm)) {
         card.style.display = '';
         hasResults = true;
      } else {
         card.style.display = 'none';
      }
   });

   const noResultsMessage = document.getElementById('no_results_message');
   if (hasResults) {
      noResultsMessage.style.display = 'none';
   } else {
      noResultsMessage.style.display = 'block';
   }
});
