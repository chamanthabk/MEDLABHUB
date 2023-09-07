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
    const newDraggable = document.createElement("p");
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
