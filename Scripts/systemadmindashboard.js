
function adduser() {
    // Normally, you'd validate user credentials here.
    // But for this example, we'll skip that part.
    
    window.location.href = "/Pages/Admin/adduser.html";
}
function viewuser() {
    // Normally, you'd validate user credentials here.
    // But for this example, we'll skip that part.
    
    window.location.href = "/Pages/Admin/viewusers.html";
}
const loadLoggedUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem('currentUser')) || "Login🚫";
    userName.textContent = loggedUser.name;
    eluserId.textContent = "     ID: " + loggedUser.id;
    console.log(loggedUser);
}

loadLoggedUser();