// script.js for portfolio interactivity

function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toUTCString();
    document.getElementById('datetime').innerText = formattedDate;
}

setInterval(updateDateTime, 1000);
