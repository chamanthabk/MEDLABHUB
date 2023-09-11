// JavaScript code to handle form submission and store data in localStorage
// Get the modal and its components
const adminModal = document.getElementById('admin-modal');
const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');
const adminSubmitButton = document.getElementById('admin-submit');
const openModalButton = document.getElementById('open-modal-btn');

// Get the form element
const userForm = document.getElementById('user-form');
const userName = document.getElementById('username');
const eluserId = document.getElementById('userid');

const eleImage = document.querySelector('.logo');
eleImage.addEventListener('click', () => {
    window.location.href = `systemadmindashboard.html`;
})


// Add an event listener to the form's submit event
userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    openModal();
});


// Add an event listener to the form's submit event
adminSubmitButton.addEventListener('click', function (event) {


    // Check admin credentials
    const adminUsername = adminUsernameInput.value;
    const adminPassword = adminPasswordInput.value;

    if (adminUsername === 'Admin' && adminPassword === '123') {
        // Get the form data
        const formData = new FormData(userForm);

        // Create an object to store the user data
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        // Get existing user data from localStorage
        const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];

        // Add the new user data to the array
        existingUserData.push(userData);

        // Store the updated user data in localStorage (convert to JSON string)
        localStorage.setItem('userData', JSON.stringify(existingUserData));

        // Optionally, you can clear the form fields after saving
        userForm.reset();
        closeModal();
    } else {
        // Admin credentials are incorrect, show an error message or handle it as needed
        alert('Invalid admin credentials. Please try again.');
        closeModal();

    }

});

// Add event listener to the "Cancel" button if needed
const cancelButton = document.getElementById('cancel-btn');
cancelButton.addEventListener('click', function () {
    // Clear the form fields if the "Cancel" button is clicked
    userForm.reset();
});

const loadLoggedUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem('currentUser')) || "Login🚫";
    userName.textContent = loggedUser.name;
    eluserId.textContent = "     ID: " + loggedUser.id;
    console.log(loggedUser);
}

loadLoggedUser();

// Load the header and footer using JavaScript
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });




// Function to open the modal
function openModal() {
    adminModal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    adminModal.style.display = 'none';
}

