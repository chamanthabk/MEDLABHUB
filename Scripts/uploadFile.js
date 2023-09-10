const fileUpload = document.getElementById('fileUpload');
const uploadPopup = document.getElementById('uploadPopup');
const closeButton = document.getElementById('closeButton');
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const saveButton = document.getElementById('saveButton');

// Show the upload pop-up when the upload button is clicked
fileUpload.addEventListener('click', () => {
    fileUpload.style.display = 'block';
});

// Close the upload pop-up when the close button is clicked
closeButton.addEventListener('click', () => {
    uploadPopup.style.display = 'none';
});

// Prevent the default behavior for drop events
dropArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    
    const files = e.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    handleFiles(files);
});

function handleFiles(files) {
    fileList.innerHTML = ''; // Clear the previous file list
    
    for (const file of files) {
        const listItem = document.createElement('li');
        listItem.textContent = `${file.name}`;
        fileList.appendChild(listItem);
    }
}

// Close the upload pop-up and display the uploaded file names when the save button is clicked
saveButton.addEventListener('click', () => {
    uploadPopup.style.display = 'none';
    // You can further process the uploaded files here, e.g., send them to a server.
});
