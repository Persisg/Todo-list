const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add a new task
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = todoInput.value.trim();
  if (task !== "") {
    const listItem = createTaskElement(task);
    todoList.appendChild(listItem);
    todoInput.value = "";
  }
});

// Create a new task element
function createTaskElement(task) {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.innerText = task;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
}
