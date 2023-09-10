//Newest JavaScript file for lab 2
// Elements
const getText = document.querySelector(".textBox");
const todoSection = document.getElementById("new");
const addButton = document.getElementById("addtaskbutton");

// EventListener to create new Draggables
addButton.addEventListener("click", function (e) {
    e.preventDefault();
    let values = getText.value;
    if (values === "") {
        alert("Please, Enter some content to add.");
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

        // Add drag-and-drop functionality for newly created task
        enableDragAndDrop(newDraggable);
    }
});

// Enable drag-and-drop functionality for tasks
function enableDragAndDrop(taskElement) {
    taskElement.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", ""); // This is required for Firefox to allow dragging
        taskElement.classList.add("is-dragging");
    });

    taskElement.addEventListener("dragend", function () {
        taskElement.classList.remove("is-dragging");
    });
}

// EventListeners for each droppable column
const columns = document.querySelectorAll('.column');
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

    column.addEventListener('drop', (e) => {
        column.style.backgroundColor = '';
        let currentDrag = document.querySelector(".is-dragging");
        if (currentDrag) {
            const status = column.id;
            currentDrag.dataset.status = status;
            column.appendChild(currentDrag);
        }
    });
});

// Enable drag-and-drop functionality for existing tasks
const existingTasks = document.querySelectorAll('.task');
existingTasks.forEach(task => {
    enableDragAndDrop(task);
});



function save() {
  
    //alert('Data saved. Navigating back to labo2.');
    window.location.href = "/Pages/Lab2/labo2.html";
  };
  
  function cancel() {
    //alert('Operation canceled. Navigating back to labo2 page.');
    window.location.href = "/Pages/Lab2/labo2.html";
  };
  /*function sampleNew() {
    window.location.href = "/Pages/Lab2/newTaskDetail.html";
  };
  function sampleInprogress() {
    window.location.href = "/Pages/Lab2/inprogressTaskDetail.html";
  };
  function sampleComplete() {
    window.location.href = "/Pages/Lab2/completedTaskDetail.html";
  };*/

//EventListener to open task detail page and update status
/*existingTasks.forEach(task => {
    enableDragAndDrop(task);

    task.addEventListener("click", () => {
        const taskId = task.getAttribute("data-id");
        const taskStatus = task.getAttribute("data-status");
        // Navigate to the task detail page with taskId and taskStatus as parameters
        window.location.href = "/Pages/Lab2/newTaskDetail.html?id=${taskId}&status=${taskStatus}";
    });
});*/


// EventListener to open task detail page and update status
existingTasks.forEach(task => {
    enableDragAndDrop(task);

    task.addEventListener("click", () => {
        const taskId = task.getAttribute("data-id");
        const taskStatus = task.getAttribute("data-status");
        
        // Determine which task detail page to open based on status
        let taskDetailPage = "";
        if (taskStatus === "new") {
            taskDetailPage = "/Pages/Lab2/newTaskDetail.html";
        } else if (taskStatus === "in-progress") {
            taskDetailPage = "/Pages/Lab2/inprogressTaskDetail.html";
        } else if (taskStatus === "completed") {
            taskDetailPage = "/Pages/Lab2/completedTaskDetail.html";
        }

        // Navigate to the appropriate task detail page with taskId as a parameter
        window.location.href = `${taskDetailPage}?id=${taskId}`;
    });
});


