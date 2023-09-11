// JavaScript code to populate user details and handle the "View" button
const userFNameElement = document.getElementById('first-name');
const userLNameElement = document.getElementById('last-name');
const userIdElement = document.getElementById('user-id');
const userNameElement = document.getElementById('user-name');
const viewButton = document.getElementById('view-btn');
const userName = document.getElementById('username');
const eluserId = document.getElementById('userid');

const eleImage = document.querySelector('.logo');
eleImage.addEventListener('click', () => {
    window.location.href = `systemadmindashboard.html`;
})


// Function to get the user ID from the query parameter
function getUserIdFromQuery() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('userId');
}

// Function to retrieve user details by ID from local storage
function getUserDetailsById(userId) {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    return userData.find(user => user.id === userId);
}

// Function to display user details on the page
function displayUserDetails(user) {
    if (user) {
        userFNameElement.textContent = user.name.toString().split(" ")[0];
        userLNameElement.textContent = user.name.toString().split(" ")[1];
        userIdElement.textContent = user.id;
        userNameElement.textContent = user.username;
    } else {
        userNameElement.textContent = 'User not found.';
        userIdElement.textContent = '';
        viewButton.style.display = 'none';
    }
}

// Function to handle the "View" button click
function handleViewButtonClick() {
    window.location.href = `edituser.html?userId=${getUserIdFromQuery()}`;
}

// Main function to load and display user details
function loadUserDetails() {
    const userId = getUserIdFromQuery();
    const user = getUserDetailsById(userId);
    displayUserDetails(user);

    // Add a click event listener to the "View" button
    viewButton.addEventListener('click', handleViewButtonClick);
}

// Load user details when the page loads
window.addEventListener('load', loadUserDetails);

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