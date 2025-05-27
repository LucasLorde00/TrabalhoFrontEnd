const buttons = document.querySelectorAll('.list-title');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.nextElementSibling
    item.style.display = item.style.display === 'none' ? 'flex' : 'none'
  })
})