const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});

function addTask() {
  const task = taskInput.value.trim();

  if (task !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="task-check"></span>
      <span class="task-name">${task}</span>
      <button class="delete-btn">Delete</button>
      <button class="done-btn">Done</button>
    `;

    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    const doneButton = listItem.querySelector('.done-btn');
    doneButton.addEventListener('click', function() {
      listItem.classList.toggle('done');
      if (listItem.classList.contains('done')) {
        doneButton.textContent = 'Undone';
      } else {
        doneButton.textContent = 'Done';
      }
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}
