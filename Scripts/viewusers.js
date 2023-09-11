// JavaScript code to handle searching, filtering, and sorting users

// Sample user data for demonstration (replace with your own data)

const userData = JSON.parse(localStorage.getItem('userData')) || [];
const userName = document.getElementById('username');
const eluserId = document.getElementById('userid');

const eleImage = document.querySelector('.logo');
eleImage.addEventListener('click', () => {
    window.location.href = `systemadmindashboard.html`;
})


// const userData = [
//     { type: 'Doctor', id: '123', access-level: 'Level 1', permissions: 'View, Edit' },
//     { type: 'Laboratory', id: '456', access-level: 'Level 2', permissions: 'View' },
//     // Add more user data here
// ];

// Function to display user data in the table
function displayUserData(data) {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = '';

    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${user.type}</td>
                    <td>${user.id}</td>
                    <td>${user["access-level"]}</td>
                    <td>${[user.name].toString().split(" ")[0]}</td>
                `;
        tableBody.appendChild(row);
    });
}

// Function to filter user data based on filter criteria
function filterUserData() {
    const searchTerm = document.getElementById('user-search').value.trim().toLowerCase();
    const typeFilter = document.getElementById('type-filter').value;
    const levelFilter = document.getElementById('level-filter').value;
    const userName = document.getElementById('username');
    const eluserId = document.getElementById('userid');

    const eleImage = document.querySelector('.logo');
    eleImage.addEventListener('click', () => {
        window.location.href = `systemadmindashboard.html`;
    })


    const filteredData = userData.filter(user => {
        const matchesSearchTerm = user.id.toLowerCase().includes(searchTerm);
        const matchesTypeFilter = typeFilter === '' || user.type === typeFilter;
        const matchesLevelFilter = levelFilter === '' || user["access-level"] === levelFilter;

        return matchesSearchTerm && matchesTypeFilter && matchesLevelFilter;
    });

    return filteredData;
}

// Function to sort user data based on the selected sorting criteria
function sortUserData(data, sortBy) {
    if (sortBy === 'type') {
        return data.sort((a, b) => a.type.localeCompare(b.type));
    } else if (sortBy === 'id') {
        return data.sort((a, b) => a.id.localeCompare(b.id));
    } else if (sortBy === 'access-level') {
        return data.sort((a, b) => a["access-level"].localeCompare(b["access-level"]));
    }
    return data;
}

// Function to update the table with filtered and sorted data
function updateTable() {
    const filteredData = filterUserData();
    const sortBy = document.getElementById('sort-by').value;
    const sortedData = sortUserData(filteredData, sortBy);
    displayUserData(sortedData);
}

// Add event listener to the "Apply Filters" button
const applyFiltersButton = document.getElementById('apply-filters-btn');
applyFiltersButton.addEventListener('click', updateTable);

// Initial table display
updateTable();

// Function to handle row click event
function handleRowClick(event) {
    const selectedUserId = event.currentTarget.children[1].textContent;
    // console.log(event.currentTarget.children[1].textContent);
    // Navigate to the user-details.html page with the selected user's ID as a query parameter
    window.location.href = `user-details.html?userId=${selectedUserId}`;
}

// Add click event listeners to each table row
const tableRows = document.querySelectorAll('.user-table tbody tr');
tableRows.forEach(row => {
    row.addEventListener('click', handleRowClick);
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