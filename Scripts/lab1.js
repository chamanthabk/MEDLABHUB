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
  const player = document.getElementById("lab1-name");

  // Extract the lab2's name from the query parameter and update the greeting
  const lab1Name = getUrlParam("name");
  player.innerText = lab1Name || "Laboratarian"; // Use "Level2 - Laboratarian" as default if name is not provided
}
function generateNewTestID() {
    let testID = localStorage.getItem('testID');
    if (testID) {
        testID = parseInt(testID) + 1; // incrementing the testID
    } else {
        testID = 1; // starting with 1 if not previously set
    }
    localStorage.setItem('testID', testID);
    return testID;
}

function save() {
    const newTestID = generateNewTestID(); // Generating new TestID
    const taskID = document.getElementById('taskID').textContent;
    const requestID = document.getElementById('requestID').textContent;
    const patientID = document.getElementById('patientID').textContent;
    const statusDropdown = document.getElementById('status'); 
    const type = document.getElementById('type').value;
    const area = document.getElementById('area').value;
    const group = document.getElementById('group').value;
    const priority = document.getElementById('priority').value;

    // Updating text based on checkbox selection
    const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
    let checkboxValues = {};
    let selectedCheckboxText = "";
    checkboxes.forEach(checkbox => {
        checkboxValues[checkbox.id] = checkbox.checked;
        if(checkbox.checked) {
            selectedCheckboxText += "Sample " + checkbox.nextElementSibling.textContent + " "; 
            // assuming the label/text for the checkbox comes after the checkbox itself.
        }
    });

    if (selectedCheckboxText !== "") {
        // This will show an alert with the selected checkboxes prefixed by "Sample".
        // You might want to handle this differently based on your requirements.
        alert(selectedCheckboxText);
    }

    // ... rest of the save function ...

    // Save data to local storage
    localStorage.setItem('taskID', taskID);
    localStorage.setItem('requestID', requestID);
    localStorage.setItem('patientID', patientID);
    localStorage.setItem('status', 'inprogress');
    localStorage.setItem('type', type);
    localStorage.setItem('area', area);
    localStorage.setItem('group', group);
    localStorage.setItem('priority', priority);
    localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));

    // Update the status dropdown to "In-progress"
    statusDropdown.value = 'inprogress'; 

    alert('Details saved successfully!');
    window.location.href = "/Pages/Lab1/viewrequest.html";
}



function cancel() {
  alert('Operation canceled. Navigating back to lab1dashboard.');
  window.location.href = "/Pages/Lab1/viewrequest.html";
};
function sampleNew() {
  window.location.href = "/Pages/Lab1/newrequest.html";
};
function sampleInprogress() {
  window.location.href = "/Pages/Lab1/inprogressTaskDetail.html";
};
function sampleComplete() {
  window.location.href = "/Pages/Lab1/completedTaskDetail.html";
};

function viewRequests() {
    window.location.href = "/Pages/Lab1/viewrequest.html";

    
  }
  
  function addNew() {
    window.location.href ="/Pages/Lab1/createteams.html"
  }
  
 
  function viewTeams() {
    document.querySelector('.containerButtons').style.display = 'none';
    document.querySelector('.teamContainer').style.display = 'block';
}


function addTeamMember() {
    let memberName = document.getElementById('member-name').value;
    if (memberName.trim() !== "") {
        let li = document.createElement('li');
        li.innerText = memberName;
        document.getElementById('members-list').appendChild(li);
        document.getElementById('member-name').value = '';
    } else {
        alert('Please enter a valid member name.');
    }
}

function createTeam() {
    let teamName = document.getElementById('team-name').value;
    let groupId = document.getElementById('group-id').value;
    let members = document.getElementById('members-list').childNodes;

    if (teamName.trim() !== "" && groupId.trim() !== "" && members.length > 0) {
        let newRow = document.createElement('tr');

        let groupIdCell = document.createElement('td');
        groupIdCell.innerText = groupId;
        newRow.appendChild(groupIdCell);

        let teamNameCell = document.createElement('td');
        teamNameCell.innerText = teamName;
        newRow.appendChild(teamNameCell);

        let membersCell = document.createElement('td');
        membersCell.innerText = Array.from(members).map(m => m.innerText).join(', ');
        newRow.appendChild(membersCell);

        document.getElementById('teams-tbody').appendChild(newRow);

        // Optional: Reset fields after creating the team
        document.getElementById('team-name').value = '';
        document.getElementById('group-id').value = '';
        document.getElementById('members-list').innerHTML = '';

    } else {
        alert('Please fill in all details and add at least one member.');
    }
}






