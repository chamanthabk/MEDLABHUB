document.addEventListener("DOMContentLoaded", function () {
  const getText = document.querySelector(".textBox");
  const addButton = document.querySelector(".addBtn");
  const droppableElements = document.querySelectorAll(".section");
  const draggableElements = document.querySelectorAll(".swap");

  // Event Listener to create new Draggables
  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    let values = getText.value;
    if (values === "") {
      alert("Please, Enter some content to add.");
    } else {
      const newDraggable = document.createElement("p");
      newDraggable.classList.add("swap");
      newDraggable.setAttribute("draggable", "true");
      newDraggable.innerText = values;

      // Create and append the <span> element with "new" status
      const statusSpan = document.createElement("span");
      statusSpan.classList.add("status");
      statusSpan.innerText = "-new";
      newDraggable.appendChild(statusSpan);

      // Set the data-status attribute to "new"
      newDraggable.setAttribute("data-status", "new");

      getText.value = "";

      newDraggable.addEventListener("dragstart", function () {
        newDraggable.classList.add("is-dragging");
      });
      newDraggable.addEventListener("dragend", function () {
        newDraggable.classList.remove("is-dragging");
      });

      droppableElements[0].appendChild(newDraggable); // Add new draggable to TODO section
    }
  });

  // Event to each draggables
  draggableElements.forEach((drag) => {
    drag.addEventListener("dragstart", function () {
      drag.classList.add("is-dragging");
    });
    drag.addEventListener("dragend", function () {
      drag.classList.remove("is-dragging");
    });
  });

  // Event to each droppables
  droppableElements.forEach((drop) => {
    drop.addEventListener("dragover", (e) => {
      e.preventDefault();
      let currentDrag = document.querySelector(".is-dragging");
      if (currentDrag) {
        drop.appendChild(currentDrag);

        // Get the new status based on the target section
        let newStatus;
        if (drop.id === "doing") {
          newStatus = "-inprogress";
        } else if (drop.id === "done") {
          newStatus = "-finished";
        } else {
          newStatus = "-new";
        }

        // Update the status of the dragged element
        currentDrag.setAttribute("data-status", newStatus);

        // Update the span's text to the new status
        const statusSpan = currentDrag.querySelector(".status");
        if (statusSpan) {
          statusSpan.innerText = newStatus;
        }
      }
    });
  });
});


// Get all the clickable swap items
const clickableSwapItems = document.querySelectorAll(".swap");

// Add a click event listener to each item
clickableSwapItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Get the text from the <p> element
    const itemText = item.textContent.trim();

    // Get the status value from the data-status attribute
    const statusValue = item.getAttribute("data-status");

    // Encode the values to pass them as query parameters
    const encodedItemText = encodeURIComponent(itemText);
    const encodedStatusValue = encodeURIComponent(statusValue);

    // Construct the URL for the new page with query parameters
    const newPageURL = `open.html?text=${encodedItemText}&status=${encodedStatusValue}`;

    // Navigate to the new page
    window.location.href = newPageURL;
  });
});


// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const itemText = urlParams.get("text");
const statusValue = urlParams.get("status");

// Find the <p> element on the new page to display the values
const displayParagraph = document.getElementById("displayValues");

// Update the content of the <p> element
if (displayParagraph) {
  displayParagraph.textContent = `Item Text: ${itemText}, Status: ${statusValue}`;
}