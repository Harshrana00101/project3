const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

const message = document.getElementById("message");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


function addTask() {


    const taskText = taskInput.value.trim();


    if (taskText === "") {

        message.textContent = "Please enter a task!";

        return;
    }


    const li = document.createElement("li");

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    const span = document.createElement("span");

    span.textContent = taskText;

    span.classList.add("task-text");

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {

            span.classList.add("completed");

        } else {

            span.classList.remove("completed");

        }

    });

    deleteBtn.addEventListener("click", function() {

        li.remove();

    });


    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(deleteBtn);


    taskList.appendChild(li);

    taskInput.value = "";

    message.textContent = "Task added successfully!";


    taskInput.focus();
}
