document.getElementById('add-todo').addEventListener('click', function () {
  const newTodoInput = document.getElementById('new-todo');
  const newTodo = newTodoInput.value.trim();

  if (newTodo !== "") {
    const li = document.createElement('li');
    li.textContent = newTodo;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "✖";
    deleteBtn.classList.add('delete-btn');

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    newTodoInput.value = '';

    deleteBtn.addEventListener('click', function () {
      li.remove();
    });
  }
});

