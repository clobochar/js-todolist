let toDoList = ["Pay water bill", "Buy milk", "Take the trash"];

//* Create new task
document.querySelector(".add-btn").onclick = function () {
  if (document.querySelector("input").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector(".todo-list").innerHTML += `<li class="todo-item">${
      document.querySelector(".input").value
    }</li><button class="delete-btn">Delete</button>`;

    //* Delete the task
    var listTasks = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < listTasks.length; i++) {
      listTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
