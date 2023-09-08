//Elements

const getText = document.querySelector(".textBox");
const droppableElements = document.querySelectorAll(".section");
const draggableElements = document.querySelectorAll(".swap");
const todoSection = document.getElementById("todo");
const addButton = document.querySelector(".addBtn");

//EventListener to create new Draggables

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let values = getText.value;
  if (values === "") {
    alert("Please, Enter a some content to add../");
  } else {
    const newDraggable = document.createElement("button");
    newDraggable.classList.add("swap");
    newDraggable.setAttribute("draggable", "true");
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
}

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
