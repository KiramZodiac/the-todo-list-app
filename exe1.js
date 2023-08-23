
//1. Interactive To-Do List
//
//Create a simple to-do list application that allows users to add, remove,
// and mark tasks as complete. Firstly, start with a basic HTML structure. Then,
//  use JavaScript to handle user interactions and update the list dynamically. Next,
//   focus on implementing features like adding new tasks, checking off completed tasks, 
//   and deleting tasks. Additionally, enhance the project by incorporating features such as 
//   storing tasks in the browser's 
//local storage, enabling task prioritization, or adding due dates
//




//const input = document.querySelector('#input');
//
//const btn = document.querySelector('#input-btn');
//const todo = document.querySelector('#todo')
//
//const appends = document.getElementById('appends')
//
//const savedTodo = JSON.parse(localStorage.getItem('todo')) || []
//
//btn.addEventListener('click',function(){
//
//
//    const todos = input.value.trim();
//
//const li = document.createElement('li')
//
//
//li.innerHTML = `<span>${todos}</span>
//<button class='completeBtn'>complete</button>
//<button class = 'deleteBtn'>delete task</button>`
//
//appends.appendChild(li)
//
//const completeBtn = li.querySelector('.completeBtn');
//const deleteBtn = li.querySelector('.deleteBtn');
//
//completeBtn.addEventListener('click',markComplete);
//
//deleteBtn.addEventListener('click',deleteTask);
//
//input.value =''
//
//
//
//})
//function markComplete(event){
//const todo = event.target.parentElement.querySelector('span');
//todo.classList.toggle('completed')
//todo.style.backgroundColor = 'green'
//
//}
//
//
//// Function to delete a task
//function deleteTask(event) {
//    const li = event.target.parentElement;
//    li.remove();
//
//    localStorage.setItem('tasks', JSON.stringify(savedTasks));
//
//
//
//
//  }
//
//
//
//
//  const deletePara = document.querySelector('#deletePara');
//
//  const delBtn = document.querySelector('#delBtn')
//
//
//delBtn.addEventListener('click',()=> {
//
//    deletePara.remove()
//
//
//
//    localStorage.setItem('tasks', JSON.stringify(savedTasks));
//
//})
//
//