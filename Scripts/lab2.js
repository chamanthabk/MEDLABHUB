//Elements
/*
const getText = document.querySelector(".textBox");
const droppableElements = document.querySelectorAll(".column");
const draggableElements = document.querySelectorAll(".task");
const todoSection = document.getElementById("new");
const addButton = document.querySelector(".addBtn");

//EventListener to create new Draggables

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let values = getText.value;
  if (values === "") {
    alert("Please, Enter a some content to add../");
  } else {
    const newDraggable = document.createElement("div");
    newDraggable.classList.add("task");
    newDraggable.setAttribute("draggable", "true");
    newDraggable.setAttribute("data-status", "new");
    newDraggable.innerText = values;
    getText.value = "";
    newDraggable.addEventListener("dragstart", function () {
      newDraggable.classList.add("is-dragging");
    });
    newDraggable.addEventListener("dragend", function () {
      newDraggable.classList.remove("is-dragging");
    });

    todoSection.appendChild(newDraggable);
  }
 
});

//Events to each draggables
draggableElements.forEach((drag) => {
  drag.addEventListener("dragstart", function () {
    drag.classList.add("is-dragging");
  });
  drag.addEventListener("dragend", function () {
    drag.classList.remove("is-dragging");
  });
});

//Event to each droppables
droppableElements.forEach((drop) => {
  drop.addEventListener("dragover", (e) => {
    e.preventDefault();
    let currentDrag = document.querySelector(".is-dragging");
    drop.appendChild(currentDrag);
  });
});
function init() {
  // Get a reference to the Lab2’s name element
  const player = document.getElementById("lab2-name");

  // Extract the lab2's name from the query parameter and update the greeting
  const lab2Name = getUrlParam("name");
  player.innerText = lab2Name || "Laboratarian"; // Use "Level2 - Laboratarian" as default if name is not provided
}*/

function save() {
  
  alert('Data saved. Navigating back to lab2dashboard.');
  window.location.href = "/Pages/Lab2/lab2dashboard.html";
};

function cancel() {
  alert('Operation canceled. Navigating back to lab2dashboard.');
  window.location.href = "/Pages/Lab2/lab2dashboard.html";
};
function sampleNew() {
  window.location.href = "/Pages/Lab2/newTaskDetail.html";
};
function sampleInprogress() {
  window.location.href = "/Pages/Lab2/inprogressTaskDetail.html";
};
function sampleComplete() {
  window.location.href = "/Pages/Lab2/completedTaskDetail.html";
};


/*dashboard

const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

let draggedTask = null;

tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        draggedTask = task;
    });

    task.addEventListener('dragend', () => {
        draggedTask = null;
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
    });

    column.addEventListener('dragenter', e => {
        e.preventDefault();
        column.style.backgroundColor = 'lightgray';
    });

    column.addEventListener('dragleave', () => {
        column.style.backgroundColor = '';
    });

    column.addEventListener('drop', () => {
        column.style.backgroundColor = '';
        if (draggedTask) {
            const status = column.id;
            draggedTask.dataset.status = status;
            column.appendChild(draggedTask);
        }
    });
});

// Select the "New" column and the button for adding tasks
const newColumn = document.getElementById('new');
const addTaskButton = document.getElementById('add-task-button');

// Function to add a new task
function addNewTask() {
  
    // Get the task title from user input
    const taskTitle = prompt('Enter task title:');
    
    if (taskTitle) {
        // Create a new task element
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.draggable = 'true';
        newTask.dataset.status = 'new';
        newTask.textContent = taskTitle;

        // Add event listeners for drag-and-drop
        newTask.addEventListener('dragstart', () => {
            draggedTask = newTask;
        });

        newTask.addEventListener('dragend', () => {
            draggedTask = null;
        });

        // Append the new task to the "New" column
        newColumn.appendChild(newTask);
    }
}

// Add a click event listener to the "Add Task" button
addTaskButton.addEventListener('click', addNewTask);




//new dashboard*/

/*
// Select the "New" column and the button for adding tasks
const newColumn = document.getElementById('new');
const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');

// Function to add a new task
function addNewTask() {
    // Get the task title from the input field
    const taskTitle = newTaskInput.value.trim();
    
    if (taskTitle) {
        // Create a new task element
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.draggable = true;
        newTask.dataset.status = 'new';
        newTask.textContent = taskTitle;

        // Add event listeners for drag-and-drop
        newTask.addEventListener('dragstart', () => {
            draggedTask = newTask;
        });

        newTask.addEventListener('dragend', () => {
            draggedTask = null;
        });

        // Append the new task to the "New" column
        newColumn.appendChild(newTask);

        // Clear the input field after adding the task
        newTaskInput.value = '';
    }
}

// Add a click event listener to the "Add Task" button
addTaskButton.addEventListener('click', addNewTask);

// Listen for Enter key press in the input field
newTaskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addNewTask();
    }
});*/

const getText = document.querySelector(".textBox");
const droppableElements = document.querySelectorAll(".column");
const draggableElements = document.querySelectorAll(".task");
const addButton = document.querySelector(".addBtn");
const newTaskInput = document.getElementById('new-task-input');

// Function to add a new task
function addNewTask() {
    // Get the task title from the input field
    const taskTitle = newTaskInput.value.trim();
    
    if (taskTitle) {
        // Create a new task element
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.draggable = true;
        newTask.dataset.status = 'new';
        newTask.textContent = taskTitle;

        // Add event listeners for drag-and-drop
        newTask.addEventListener('dragstart', () => {
            draggedTask = newTask;
        });

        newTask.addEventListener('dragend', () => {
            draggedTask = null;
        });

        // Append the new task to the "New" column
        const newColumn = document.getElementById('new');
        newColumn.appendChild(newTask);

        // Clear the input field after adding the task
        newTaskInput.value = '';
    }
}

// Add a click event listener to the "Add Task" button
addButton.addEventListener("click", function (e) {
    e.preventDefault();
    addNewTask();
});

// Event listeners for each draggable task
draggableElements.forEach((drag) => {
  drag.addEventListener("dragstart", function () {
    drag.classList.add("is-dragging");
  });
  drag.addEventListener("dragend", function () {
    drag.classList.remove("is-dragging");
  });
});

// Event listeners for each droppable column
droppableElements.forEach((drop) => {
  drop.addEventListener("dragover", (e) => {
    e.preventDefault();
    let currentDrag = document.querySelector(".is-dragging");
    drop.appendChild(currentDrag);
    
    // Update the task's status to the current column's id
    if (currentDrag) {
        currentDrag.dataset.status = drop.id;
    }
  });
});