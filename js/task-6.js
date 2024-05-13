function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    return;
  }

  boxes.innerHTML = '';
  let size = 30;

  const array = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);
    size += 10;
  }
  boxes.appendChild(...array);
  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
