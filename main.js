let elementsToDoList = ["Pay water bill", "Buy milk", "Take the trash"];

const toDoList = document.querySelector(".todo-list");

//* Create initial list
function createLi(liText) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerText = liText;
  toDoList.appendChild(li);

  //* Delete button

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    this.parentNode.remove();
  };
  li.appendChild(deleteButton);
}

elementsToDoList.forEach((item) => {
  createLi(item);
});

//* Create new task and validate

document.querySelector(".add-btn").onclick = function () {
  if (document.querySelector("input").value.length == 0) {
    alert("Please enter a task");
  } else {
    const value = document.querySelector(".input").value;
    createLi(value);
  }
};
