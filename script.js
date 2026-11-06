function addStudent() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var branch = document.getElementById("branch").value;

    if (name == "" || roll == "" || branch == "") {
        document.getElementById("message").innerText =
            "Please fill all fields";
    }
    else {
        document.getElementById("message").innerText =
            "Student Added Successfully! " +
            name + " " + roll + " " + branch;
    }
}

function resetForm() {

    document.getElementById("studentForm").reset();

    document.getElementById("message").innerText = "";
}