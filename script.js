const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
    input.value = '';
  }
});