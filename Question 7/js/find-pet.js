const checkForm = () => {
    const animal = document.getElementById("cat").checked || document.getElementById("dog").checked;
    const gender = document.getElementById("male").checked || document.getElementById("female").checked || document.getElementById("indifferent").checked;
    const breed = document.getElementById("breed").value.trim() !== "";
    if (!animal || !gender || !breed) {
        alert("There was an error, please make sure the information filled is correct");
    }
}