const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


// Retrieve tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';
  savedTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <button class="completeBtn">Complete</button>
      <button class="deleteBtn">Delete</button>
    `;
    if (task.completed) {
      li.querySelector('span').classList.add('completed');
    }
    taskList.appendChild(li);

    // Attach event listeners
    const completeBtn = li.querySelector('.completeBtn');
    completeBtn.addEventListener('click', () => toggleComplete(index));

    const deleteBtn = li.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => deleteTask(index));
  });
}

// Function to add a task
function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return;

  savedTasks.push({ text, completed: false });
  localStorage.setItem('tasks', JSON.stringify(savedTasks));

  taskInput.value = '';
  renderTasks();
}

// Function to toggle task completion
function toggleComplete(index) {
  savedTasks[index].completed = !savedTasks[index].completed;
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
  renderTasks();

}




function deleteTask(index) {
  savedTasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
  renderTasks();
}


addTaskBtn.addEventListener('click', addTask);
renderTasks();
