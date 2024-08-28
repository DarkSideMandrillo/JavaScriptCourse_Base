const todoList = [];  //Diventerà un array di oggetti. che merda

document.querySelector('.js-add-todo-button').addEventListener(
  'click',
  () => { addTodo(); }
)

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name) {
    todoList.push({ name: name, dueDate: dueDate });
    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
  }
}

function renderTodoList() {
  let html = '';
  todoList.forEach((element, index) => {
    html += `
      <div>${element.name}</div>
      <div>${element.dueDate}</div>
      <div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
    </div>`
  });
  document.querySelector('.js-todo-list').innerHTML = html;

  //Attenzione, posso farlo solo dopo che popolo l'HTML della stringa che ho creato. Altro problema è che ci sono molti bottoni di Delete
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => { deleteTodo(index) });
    }); //Faccio un querySelector di tutti, poi giro per ognuno e aggiungo il listner del click
}
function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}
