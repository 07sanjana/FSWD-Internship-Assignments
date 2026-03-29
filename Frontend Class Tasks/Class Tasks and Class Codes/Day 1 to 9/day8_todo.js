const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load saved tasks
function loadTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        createTaskElement(task.text, task.completed, index);
    });
    updateCount();
}

// Create task element
function createTaskElement(text, completed, index) {
    const li = document.createElement("li");
    if (completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = text;

    span.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Add task
function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
}

// Update task counter
function updateCount() {
    taskCount.textContent = `${tasks.length} task${tasks.length !== 1 ? "s" : ""}`;
}

// Clear all tasks
clearBtn.addEventListener("click", () => {
    tasks = [];
    localStorage.removeItem("tasks");
    loadTasks();
});

// Event listeners
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// Initial load
loadTasks();
