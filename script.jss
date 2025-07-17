const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const tag = button.getAttribute('data-tag');

    projectCards.forEach(card => {
      const cardTags = card.getAttribute('data-tags').split(',').map(tag => tag.trim().toLowerCase());

      if (tag === 'all' || cardTags.includes(tag.toLowerCase())) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});
