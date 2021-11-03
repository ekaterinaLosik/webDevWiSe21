var students = new Array();
students.push(["Student ID*", "First Name*", "Last name", "Date of birth", "Gender", "Department*", "Email*"]);
students.push([1, "Test", "Test", 42, "female", "test", "bla@blamail.com"]);
var staff = new Array();
staff.push(["Staff ID*", "First Name*", "Last Name", "Date of birth", "Gender", "Email*"]);
staff.push([1, "Test", "Test", 42, "female", "bla@blamail.com"]);
var deleteMode = false;


function selectRow(row) {
    if (row.className.indexOf("selected") != -1) {
        row.className = row.className.replace("selected", "");

    } else {
        row.className += " selected";
    }
    row.setAttribute("id", "sel")
}

function deleteRow(array) {
    try {
        var table = document.getElementById("tableSt");
        var rowCount = table.rows.length;
        var count = 0;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            
            if (row.className.indexOf("selected") != -1) {
                array.splice(i, 1);
                table.deleteRow(i);
                rowCount--;
                i--;
                count++;

            }
        }
        if (count == 0)
            alert("choose someone");
    } catch (e) {
        alert(e);
    }
}


function showStudents() {
    document.getElementById("addStaffTableContainer").hidden = true;
    document.getElementById("addStudTableContainer").hidden = false;
    var table = document.createElement("TABLE");
    table.setAttribute("id", "tableSt");
    table.setAttribute("class", "tableStud");
    var columnCount = students[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = students[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < students.length; i++) {
        row = table.insertRow(-1);


        row.setAttribute("class", "stTr");
        row.addEventListener("click", function () {
            selectRow(this);

        });
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.setAttribute("class", "stTd");
            cell.innerHTML = students[i][j];
        }

    }


    var dvTable = document.getElementById("stTable");

    dvTable.innerHTML = "";

    dvTable.appendChild(table);
    var btnsCont = document.getElementById("stTableManagemt");


    let btnAdd = document.createElement("button");
    btnAdd.innerHTML = "Add Student";
    btnAdd.name = "addStudBtn";
    btnAdd.setAttribute("class", "manage__button");
    btnAdd.addEventListener("click", function () {
        document.getElementById("addStudTableContainer").classList.toggle("hidden");

    });
    let btnDel = document.createElement("button");
    btnDel.innerHTML = "Delete Student";
    btnDel.name = "delStudBtn";
    btnDel.setAttribute("class", "manage__button");
    btnDel.addEventListener("click", function () {
        deleteRow(students);

    });
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit Student";
    btnEdit.name = "editStudBtn";
    btnEdit.setAttribute("class", "manage__button");
    btnEdit.addEventListener("click", function () {
        editStudRow();

    });
    btnsCont.innerHTML = "";
    btnsCont.appendChild(btnAdd);
    btnsCont.appendChild(btnDel);
    btnsCont.appendChild(btnEdit);
}





function addRowStud() {
    if (document.getElementById("studID").value == "") {
        alert("Please add Student ID");
        return;
    }
    var id = document.getElementById("studID").value;
    if (document.getElementById("firstName").value == "") {
        alert("Please add First Name");
        return;
    }
    var fn = document.getElementById("firstName").value;
    var ln = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    if (document.getElementById("genderF").checked) {
        var gender = "female";
    }
    else if (document.getElementById("genderM").checked) {
        var gender = "male";
    }
    else if (document.getElementById("genderD").checked) {
        var gender = "diverse";
    }
    else var gender = "";


    var dep = document.getElementById("department").value;
    if (document.getElementById("email").value == "") {
        alert("Please add Email");
        return;
    }
    var email = document.getElementById("email").value;
    students.push([id, fn, ln, dob, gender, dep, email]);
    cleanForm();
    showStudents();

}
function addRowStaff() {
    if (document.getElementById("staffID").value == "") {
        alert("Please add Staff ID");
        return;
    }
    var id = document.getElementById("staffID").value;
    if (document.getElementById("stafffirstName").value == "") {
        alert("Please add First Name");
        return;
    }
    var fn = document.getElementById("stafffirstName").value;
    var ln = document.getElementById("stafflastName").value;
    var dob = document.getElementById("staffdob").value;
    if (document.getElementById("staffgenderF").checked) {
        var gender = "female";
    }
    else if (document.getElementById("staffgenderM").checked) {
        var gender = "male";
    }
    else if (document.getElementById("staffgenderD").checked) {
        var gender = "diverse";
    }
    else var gender = "";

    if (document.getElementById("staffemail").value == "") {
        alert("Please add Email");
        return;
    }
    var email = document.getElementById("staffemail").value;
    staff.push([id, fn, ln, dob, gender, email]);
    cleanStaffForm();
    showStaff();

}


function editStudRow() {
    try {
        var table = document.getElementById("tableSt");
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];

            if (row.className.indexOf("selected") != -1) {
                openAddStud();
                document.getElementById("studID").value = students[i][0];
                document.getElementById("firstName").value = students[i][1];
                document.getElementById("lastName").value = students[i][2];
                document.getElementById("dob").value = students[i][3];
                if (students[i][4] == "female")
                    document.getElementById("genderF").checked = true;
                else if (students[i][4] == "male")
                    document.getElementById("genderM").checked = true;
                else if (students[i][4] == "diverse")
                    document.getElementById("genderD").checked = true;
                document.getElementById("department").value = students[i][5];
                document.getElementById("email").value = students[i][6];
                table.deleteRow(i);
                students.splice(i, 1);
                return;

            }

        } alert("choose a student");
    } catch (e) {
        alert(e);
    }
}

function editStaffRow() {
    try {
        var table = document.getElementById("tableSt");
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];

            if (row.className.indexOf("selected") != -1) {
                openAddStaff();
                document.getElementById("staffID").value = staff[i][0]; 
                document.getElementById("stafffirstName").value = staff[i][1];
                document.getElementById("stafflastName").value = staff[i][2];
                document.getElementById("staffdob").value = staff[i][3];
                if (staff[i][4] == "female")
                    document.getElementById("staffgenderF").checked = true;
                else if (staff[i][4] == "male")
                    document.getElementById("staffgenderM").checked = true;
                else if (staff[i][4] == "diverse")
                    document.getElementById("staffgenderD").checked = true;
                document.getElementById("staffemail").value = staff[i][5];
                table.deleteRow(i);
                staff.splice(i, 1);
                return;
            }

        } alert("choose a staff");
    } catch (e) {
        alert(e);
    }
}

function cleanForm() {
    document.getElementById("studID").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("genderF").checked = false;
    document.getElementById("genderM").checked = false;
    document.getElementById("genderD").checked = false;
    document.getElementById("email").value = "";

}

function cleanStaffForm() {
    document.getElementById("staffID").value = "";
    document.getElementById("stafffirstName").value = "";
    document.getElementById("stafflastName").value = "";
    document.getElementById("staffgenderF").checked = false;
    document.getElementById("staffgenderM").checked = false;
    document.getElementById("staffgenderD").checked = false;
    document.getElementById("staffemail").value = "";
}

function showStaff() {
    document.getElementById("addStudTableContainer").hidden = true;
    document.getElementById("addStaffTableContainer").hidden = false;

    var table = document.createElement("TABLE");
    table.setAttribute("id", "tableSt");
    table.setAttribute("class", "tableStud");
    var columnCount = staff[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = staff[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < staff.length; i++) {
        row = table.insertRow(-1);
        row.setAttribute("class", "stTr");
        row.addEventListener("click", function () {
            selectRow(this);

        });
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.setAttribute("class", "stTd");
            cell.innerHTML = staff[i][j];
        }
    }


    var dvTable = document.getElementById("stTable");

    dvTable.innerHTML = "";

    dvTable.appendChild(table);
    var btnsCont = document.getElementById("stTableManagemt");


    let btnAdd = document.createElement("button");
    btnAdd.innerHTML = "Add Staff";
    btnAdd.name = "addStaffBtn";
    btnAdd.setAttribute("class", "manage__button");
    btnAdd.addEventListener("click", function () {
        document.getElementById("addStaffTableContainer").classList.toggle("hidden");

    });
    let btnDel = document.createElement("button");
    btnDel.innerHTML = "Delete Staff";
    btnDel.name = "delStaffBtn";
    btnDel.setAttribute("class", "manage__button");
    btnDel.addEventListener("click", function () {
        deleteRow(staff);

    });
    let btnEdit = document.createElement("button");
    btnEdit.innerHTML = "Edit Staff";
    btnEdit.name = "editStaffBtn";
    btnEdit.setAttribute("class", "manage__button");
    btnEdit.addEventListener("click", function () {
        editStaffRow();

    });
    btnsCont.innerHTML = "";
    btnsCont.appendChild(btnAdd);
    btnsCont.appendChild(btnDel);
    btnsCont.appendChild(btnEdit);
}
function openAddStud() {
    if (document.getElementById("addStudTableContainer").classList.contains("hidden")) {
        document.getElementById("addStudTableContainer").classList.toggle("hidden");
    }
}
function openAddStaff(){
    if (document.getElementById("addStaffTableContainer").classList.contains("hidden")) {
        document.getElementById("addStaffTableContainer").classList.toggle("hidden");
    }
}