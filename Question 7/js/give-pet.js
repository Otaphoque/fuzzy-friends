const checkForm = () => {
    const test = /^\S+@\S+\.\S+$/;
    const animal = document.getElementById("cat").checked || document.getElementById("dog").checked;
    const gender = document.getElementById("male").checked || document.getElementById("female").checked || document.getElementById("indifferent").checked;
    const breed = document.getElementById("breed").value.trim() !== "";
    const firstName = document.getElementById("first-name").value.trim() !== "";
    const lastName = document.getElementById("last-name").value.trim() !== "";
    const email = document.getElementById("email").value.trim() !== "" && test.test(document.getElementById("email").value);
    if (!animal || !gender || !breed || !firstName || !lastName || !email) {
        alert("There was an error, please make sure the information filled is correct");
    }
}