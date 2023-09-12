//JavaScript file for lab 2

const getText = document.querySelector(".textBox");
const todoSection = document.getElementById("new");
const addButton = document.getElementById("addtaskbutton");

// EventListener for creating new Draggables
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

        // Add drag and drop functionality for newly created task
        enableDragAndDrop(newDraggable);
    }
});

// Enable drag and drop functionality for tasks
function enableDragAndDrop(taskElement) {
    taskElement.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", "");
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

// Enable drag andd rop functionality for existing tasks
const existingTasks = document.querySelectorAll('.task');
existingTasks.forEach(task => {
    enableDragAndDrop(task);
});



function save() {
  
    //alert('Data Saved successfully');
    window.location.href = "/Pages/Lab2/labo2.html";
  };
  
  function cancel() {
    //alert('Operation cancelled');
    window.location.href = "/Pages/Lab2/labo2.html";
  };
  
// EventListener to open task detail page and update status
existingTasks.forEach(task => {
    enableDragAndDrop(task);

    task.addEventListener("click", () => {
        const taskId = task.getAttribute("data-id");
        const taskStatus = task.getAttribute("data-status");
        
        // Condition to choose the type of task detail page to open based on status
        let taskDetailPage = "";
        if (taskStatus === "new") {
            taskDetailPage = "/Pages/Lab2/newTaskDetail.html";
        } else if (taskStatus === "inprogress") {
            taskDetailPage = "/Pages/Lab2/inprogressTaskDetail.html";
        } else if (taskStatus === "completed") {
            taskDetailPage = "/Pages/Lab2/completedTaskDetail.html";
        }

        // Taking taskId as a parameter navigating to the relevant task detail page
        window.location.href = `${taskDetailPage}?id=${taskId}`;
    });
});





