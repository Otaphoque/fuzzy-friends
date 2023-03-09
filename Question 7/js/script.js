const time = () => {
    const date = new Date();
    // const dateString = new Date().toLocaleString();
    // const formattedString = dateString.replace(", ", " - ");
    // timeDisplay.textContent = formattedString;
    document.getElementById("time").innerHTML = date.getTime();
}

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);