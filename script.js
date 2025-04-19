// Function to save data
function savedata() {
    // Prevent form submission
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
  
    // Validate inputs
    if (!name || !age || !gender || !course || !email) {
      alert("Please fill all fields!");
      return;
    }
  
    // Add data to the table
    const table = document.getElementById("studenttable");
    const row = table.insertRow(-1);
  
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = gender;
    row.insertCell(3).innerText = course;
    row.insertCell(4).innerText = email;
  
    // Add delete button
  
    const actionCell = row.insertCell(5);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.backgroundColor = "red"
    deleteButton.style.color = "white"
    deleteButton.onclick = function () {
      table.deleteRow(row.rowIndex);
    };
    actionCell.appendChild(deleteButton);
  
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    document.getElementById("course").value = "Python";
    document.getElementById("email").value = "";
  }
  