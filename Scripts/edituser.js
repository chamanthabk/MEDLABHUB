
// JavaScript code to handle editing user data and searching by ID
// Get the modal and its components
const adminModal = document.getElementById('admin-modal');
const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');
const adminSubmitButton = document.getElementById('admin-submit');
const openModalButton = document.getElementById('open-modal-btn');

// Get the form element
const editUserForm = document.getElementById('edit-user-form');
const searchBtn = document.getElementById('search-btn');
const searchIdInput = document.getElementById('search-id');
const userId = getUserIdFromQuery();
const userName = document.getElementById('username');
const eluserId = document.getElementById('userid');

const eleImage = document.querySelector('.logo');
eleImage.addEventListener('click', () => {
    window.location.href = `systemadmindashboard.html`;
})


// Function to update the permissions checkboxes based on user data
function updatePermissionsCheckboxes(user) {
    const viewPermissionCheckbox = document.getElementById('view-permission');
    const editPermissionCheckbox = document.getElementById('edit-permission');

    if (user.permissions) {
        viewPermissionCheckbox.checked = user.permissions.view === true;
        editPermissionCheckbox.checked = user.permissions.edit === true;
    } else {
        // If permissions data is not available, uncheck both checkboxes
        viewPermissionCheckbox.checked = false;
        editPermissionCheckbox.checked = false;
    }
}

// Add an event listener to the "Search" button
searchBtn.addEventListener('click', function () {
    const searchId = searchIdInput.value;
    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Function to toggle the user's status (enable/disable)
    function toggleUserStatus(user) {
        if (user.isDisabled === true) {
            user.isDisabled = false;
        } else {
            user.isDisabled = true;
        }
    }

    // Function to update the button text based on the user's status
    function updateButtonLabel(user) {
        toggleUserButton.textContent = user.isDisabled ? 'Enable User' : 'Disable User';
    }

    // Add an event listener to the "Toggle User Status" button
    const toggleUserButton = document.getElementById('toggle-user-btn');
    toggleUserButton.addEventListener('click', function () {
        const searchId = searchIdInput.value;
        const userData = JSON.parse(localStorage.getItem('userData')) || [];

        // Find the user by ID
        const userToToggle = userData.find(user => user.id === searchId);

        if (userToToggle) {
            // Toggle the user's status (enable/disable)
            toggleUserStatus(userToToggle);

            // Update the button text based on the user's status
            updateButtonLabel(userToToggle);

            // Update the user data in localStorage
            localStorage.setItem('userData', JSON.stringify(userData));

            alert(`User ${userToToggle.isDisabled ? 'disabled' : 'enabled'} successfully.`);
            editUserForm.reset();
        } else {
            // alert('User not found.');
            editUserForm.reset();
        }
    });



    // Find the user by ID
    const userToEdit = userData.find(user => user.id === searchId);

    if (userToEdit) {
        // Populate the form with the user's data
        const formFields = editUserForm.elements;
        for (let field of formFields) {
            if (userToEdit[field.name] !== undefined) {
                field.value = userToEdit[field.name];
            }
        }

        // Update the permissions checkboxes
        updatePermissionsCheckboxes(userToEdit);
    } else {
        alert('User not found.');
        editUserForm.reset();
    }
});

// Add an event listener to the form's submit event for updating user data
editUserForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    openModal();
});


adminSubmitButton.addEventListener('click', function (event) {

    // Check admin credentials
    const adminUsername = adminUsernameInput.value;
    const adminPassword = adminPasswordInput.value;

    if (adminUsername === 'Admin' && adminPassword === '123') {
        // Get the updated form data
        const updatedUserData = {};
        const formFields = editUserForm.elements;
        for (let field of formFields) {
            if (field.name && field.name !== 'search-id') {
                updatedUserData[field.name] = field.value;
            }
        }

        // Get existing user data from localStorage
        const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];

        // Find the user by ID in the existing data and update it
        for (let i = 0; i < existingUserData.length; i++) {
            if (existingUserData[i].id === updatedUserData.id) {
                existingUserData[i] = updatedUserData;

                // Add or update the permissions object based on checkbox values
                existingUserData[i].permissions = {
                    view: document.getElementById('view-permission').checked,
                    edit: document.getElementById('edit-permission').checked
                };

                break;
            }
        }

        // Store the updated user data in localStorage (convert to JSON string)
        localStorage.setItem('userData', JSON.stringify(existingUserData));

        // Optionally, you can clear the form fields after updating
        editUserForm.reset();
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
    editUserForm.reset();
});

// Load permissions checkboxes on page load (if a user is searched for)
updatePermissionsCheckboxes({});

// Function to get the user ID from the query parameter
function getUserIdFromQuery() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('userId');
}


const toggleUserButton = document.getElementById('toggle-user-btn');
toggleUserButton.addEventListener('click', function (event) {
    openModal();
})


// Add an event listener to the "Search" button
const init = function () {
    const userId = getUserIdFromQuery();
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    searchIdInput.value = userId;

    // Function to toggle the user's status (enable/disable)
    function toggleUserStatus(user) {
        if (user.isDisabled === true) {
            user.isDisabled = false;
        } else {
            user.isDisabled = true;
        }
    }

    // Function to update the button text based on the user's status
    function updateButtonLabel(user) {
        toggleUserButton.textContent = user.isDisabled ? 'Enable User' : 'Disable User';
    }

    // Add an event listener to the "Toggle User Status" button
    const toggleUserButton = document.getElementById('toggle-user-btn');
    toggleUserButton.addEventListener('click', function () {
        const userId = getUserIdFromQuery();
        const userData = JSON.parse(localStorage.getItem('userData')) || [];

        // Find the user by ID
        const userToToggle = userData.find(user => user.id === userId);

        if (userToToggle) {
            // Toggle the user's status (enable/disable)
            toggleUserStatus(userToToggle);

            // Update the button text based on the user's status
            updateButtonLabel(userToToggle);

            // Update the user data in localStorage
            localStorage.setItem('userData', JSON.stringify(userData));

            alert(`User ${userToToggle.isDisabled ? 'disabled' : 'enabled'} successfully.`);
            editUserForm.reset();
        } else {
            // alert('User not found.');
            editUserForm.reset();
        }
    });



    // Find the user by ID
    const userToEdit = userData.find(user => user.id === userId);

    if (userToEdit) {
        // Populate the form with the user's data
        const formFields = editUserForm.elements;
        for (let field of formFields) {
            if (userToEdit[field.name] !== undefined) {
                field.value = userToEdit[field.name];
            }
        }

        // Update the permissions checkboxes
        updatePermissionsCheckboxes(userToEdit);
    } else {
        alert('User not found.');
        editUserForm.reset();
    }
}

init();


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

