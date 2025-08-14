const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.word').forEach(word => {
  word.addEventListener('click', (e) => {
    tooltip.textContent = word.dataset.meaning;
    tooltip.style.display = 'block';
    tooltip.style.left = (e.pageX + 5) + 'px';
    tooltip.style.top = (e.pageY + 5) + 'px';
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('word')) {
    tooltip.style.display = 'none';
  }
});
