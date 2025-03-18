function validatorForm() {
    // Clear previous errors
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameError').innerHTML = 'Please enter your name';
        return false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerHTML = 'Please enter your email';
        return false;
    } else if (!email.includes("@")) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        return false;
    }

    return true;
}

function showData() {
    var peopleList = localStorage.getItem('peopleList') ? JSON.parse(localStorage.getItem('peopleList')) : [];


    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onClick="editData(' + index + ')" class="px-2 py-1 bg-yellow-500 text-white rounded mr-2">Edit</button><button onClick="updateData(' + index + ')" class="px-2 py-1 bg-blue-500 text-white rounded mr-2">Update</button><button onClick="deleteData(' + index + ')" class="px-2 py-1 bg-red-500 text-white rounded mr-2">Delete</button>';
        html += "</tr>";
    });

    document.querySelector('#crudTable tbody').innerHTML = html;
}

// Loads all data when document or page loaded
document.onload = showData;


// Function to add data
function addData() {
    // if form is validate
    if (validatorForm() == true) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        var peopleList;
        if (localStorage.getItem('peopleList') == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem('peopleList'));
        }

        peopleList.push({
            name: name,
            email: email,
        });

        localStorage.setItem('peopleList', JSON.stringify(peopleList));
        showData();
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
    }
}