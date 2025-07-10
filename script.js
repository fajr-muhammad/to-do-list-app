const addBtn = document.getElementById("add-todo");
const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const taskText = newTodoInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  newTodoInput.value = "";
});


