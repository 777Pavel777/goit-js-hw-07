`use strict`

 const input = document.querySelector('.controls-input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createButton.addEventListener('click', () => {
      const amount = parseInt(input.value);

      if (isNaN(amount) || amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
      }

      createBoxes(amount);
      input.value = '';
    });

    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
      const baseSize = 30;
      boxesContainer.innerHTML = '';

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = baseSize + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
