var students = new Array();
let headers = ["Student ID", "First Name", "Last name", "Date of Birth", "Gender", "Department", "Email", "Joining Date"];
let sampleStud = {
    id: "0",
    fn: "Sample",
    ln: "Student",
    dob: "1994-01-24",
    gender: "female",
    dep: "Applied Science",
    email: "my@mail.com",
    jd: "2021-10-06"
}
let sampleStud2 = {
    id: "1",
    fn: "Another",
    ln: "Student",
    dob: "1994-02-24",
    gender: "female",
    dep: "Mathematics",
    email: "my@mail.com",
    jd: "2021-04-06"
}
students.push(sampleStud);
students.push(sampleStud2);
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

function createTable(array) {
    let table = document.createElement('table');
    table.setAttribute("id", "tableSt");
    // table.setAttribute("class", "tableStud");
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    array.forEach(arr => {
        let row = document.createElement('tr');
        row.addEventListener("click", function () {
            selectRow(this);

        });
        Object.values(arr).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    var dvTable = document.getElementById("stTable");

    dvTable.innerHTML = "";
    dvTable.appendChild(table);
    console.log("after create " + array);
}
function createTableStud(array) {
    var table = document.createElement("TABLE");
    table.setAttribute("id", "tableSt");
    table.setAttribute("class", "tableStud");
    array.unshift(header);
    var columnCount = array[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = array[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < array.length; i++) {
        row = table.insertRow(-1);


        row.setAttribute("class", "stTr");
        row.addEventListener("click", function () {
            selectRow(this);

        });
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.setAttribute("class", "stTd");
            cell.innerHTML = array[i][j];
        }

    }


    var dvTable = document.getElementById("stTable");

    dvTable.innerHTML = "";

    dvTable.appendChild(table);
}
function showStudents(value) {
    createTable(students);
    var btnsCont = document.getElementById("stTableManagemt");
    btnsCont.innerHTML = "";
    if (value === 'admin') {
        addAdminButtonsStud();
        document.getElementById("addStaffTableContainer").hidden = true;
        document.getElementById("addStudTableContainer").hidden = false;
    }
    addSortButtonsStud();

}
function addAdminButtonsStud() {
    var btnsCont = document.getElementById("stTableManagemt");
    let btnAdd = document.createElement("button");
    btnAdd.innerHTML = "Add Student";
    btnAdd.name = "addStudBtn";
    btnAdd.setAttribute("class", "manage__button");
    btnAdd.addEventListener("click", function () {
        document.getElementById("addStudTableContainer").classList.toggle("hidden");
        setMaxDob();
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

    btnsCont.appendChild(btnAdd);
    btnsCont.appendChild(btnDel);
    btnsCont.appendChild(btnEdit);
}
function addSortButtonsStud() {
    var btnsCont = document.getElementById("stTableManagemt");
    let selectDep = document.createElement("select");
    selectDep.innerHTML = "Department";
    selectDep.name = "selectDep";
    selectDep.setAttribute("class", "manage__button");
    selectDep.setAttribute("id", "selectDep");

    btnsCont.appendChild(selectDep);
    var dep0 = document.createElement("option");
    dep0.setAttribute("value", "Select");
    var dep0Name = document.createTextNode("Select");
    dep0.appendChild(dep0Name);

    var dep1 = document.createElement("option");
    dep1.setAttribute("value", "Applied Science");
    var dep1Name = document.createTextNode("Applied Science");
    dep1.appendChild(dep1Name);
    var dep2 = document.createElement("option");
    dep2.setAttribute("value", "Mathematics");
    var dep2Name = document.createTextNode("Mathematics");
    dep2.appendChild(dep2Name);
    document.getElementById("selectDep").appendChild(dep0);

    document.getElementById("selectDep").appendChild(dep1);
    document.getElementById("selectDep").appendChild(dep2);
    selectDep.setAttribute("onchange", "filterStudDep(this.value)");


    let selectSem = document.createElement("select");
    selectSem.innerHTML = "Department";
    selectSem.name = "selectSem";
    selectSem.setAttribute("class", "manage__button");
    selectSem.setAttribute("id", "selectSem");

    btnsCont.appendChild(selectSem);
    var sem0 = document.createElement("option");
    sem0.setAttribute("value", "Select");
    var sem0Name = document.createTextNode("Select");
    sem0.appendChild(sem0Name);

    var sem1 = document.createElement("option");
    sem1.setAttribute("value", "Winter");
    var sem1Name = document.createTextNode("Winter");
    sem1.appendChild(sem1Name);
    var sem2 = document.createElement("option");
    sem2.setAttribute("value", "Summer");
    var sem2Name = document.createTextNode("Summer");
    sem2.appendChild(sem2Name);
    document.getElementById("selectSem").appendChild(sem0);

    document.getElementById("selectSem").appendChild(sem1);
    document.getElementById("selectSem").appendChild(sem2);
    selectSem.setAttribute("onchange", "filterStudSem(this.value)");
}

function filterStudDep(value) {
    if (value == "Select")
        return;
    var studFiltered = students.filter(s => s.dep === value);
    createTable(studFiltered);
    document.getElementById("selectSem").value = "Select";
}
function filterStudSem(value) {
    if (value == "Select")
        return;
    if (value == "Summer") {
        var studFiltered = students.filter(isSumSem);
    }
    else {
        var studFiltered = reject(students, isSumSem);
    }
    createTable(studFiltered);
    document.getElementById("selectDep").value = "Select";

}
function isSumSem(value) {
    var parts = value.jd.split("-");
    var month = parseInt(parts[1], 10);
    if (month >= 4 && month <= 9)
        return value;
}
function reject(array, iteratorFunction) {
    return array.filter(function (item) {
        return !iteratorFunction(item);
    });
}


function setMaxDob() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    document.getElementById("dob").setAttribute("max", date);
    document.getElementById("staffdob").setAttribute("max", date);

}


function validateStudDob(value) {
    var regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if (regex.test(value)) {
        var parts = value.split("-");
        var day = parseInt(parts[2], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[0], 10);
        var today = new Date();
        console.log("today " + today.getFullYear() + " " + today.getMonth() + " " + today.getDate());
        if (today.getFullYear() - year < 17) {
            alert("Minimum age is 17");
            return false;
        }
        if (today.getFullYear() - year > 60) {
            alert("Maximum age is 60");
            return false;
        }
        if (today.getFullYear() - year == 17) {
            if (today.getMonth() + 1 < month) {
                alert("Minimum age is 17");
                return false;
            }
            if (today.getMonth() == month) {
                if (today.getDate() < day) {
                    alert("Minimum age is 17");
                    return false;
                }
            }
        }

        return true;
    } else {
        alert("not a date");
        return false;
    }
}

function addRowStud() {
    if (document.getElementById("studID").value == "") {
        alert("Please add Student ID");
        return;
    }

    var id = document.getElementById("studID").value;
    var stud = students.find(s => s.id === id);
    if (stud != null) {
        alert("This Student Id already exists");
        return;
    }
    if (document.getElementById("firstName").value == "") {
        alert("Please add First Name");
        return;
    }
    var fn = document.getElementById("firstName").value;
    var ln = document.getElementById("lastName").value;
    if (!validateStudDob(document.getElementById("dob").value)) {
        return;
    }

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
    var jdate = document.getElementById("jDateStud").value;
    let student = {
        "id": id,
        "fn": fn,
        "ln": ln,
        "dob": dob,
        "g": gender,
        "dep": dep,
        "email": email,
        "jd": jdate
    }
    students.push(student);
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

function deleteRow(array) {
    try {
        var table = document.getElementById("tableSt");
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            if (row.className.indexOf("selected") != -1) {
                var id = table.rows[i].cells[0].innerText;
                console.log(id);
                table.deleteRow(i);
                array.splice(array.findIndex(s => s.id === id), 1);
                console.log("after delete " + array);
                return;
            }
        } alert("choose someone");


    } catch (e) {
        alert(e);
    }
}
function editStudRow() {
    try {
        var table = document.getElementById("tableSt");
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];

            if (row.className.indexOf("selected") != -1) {
                openAddStud();
                var id = table.rows[i].cells[0].innerText;
                console.log(id);
                var student = students.find(s => s.id === id);
                console.log(student);
                document.getElementById("studID").value = student.id;
                document.getElementById("firstName").value = student.fn;
                document.getElementById("lastName").value = student.ln;
                document.getElementById("dob").value = student.dob;
                if (student.gender == "female")
                    document.getElementById("genderF").checked = true;
                else if (student.gender == "male")
                    document.getElementById("genderM").checked = true;
                else if (student.gender == "diverse")
                    document.getElementById("genderD").checked = true;
                document.getElementById("department").value = student.dep;
                document.getElementById("email").value = student.email;
                document.getElementById("jDateStud").value = student.jd;

                table.deleteRow(i);
                students.splice(students.findIndex(s => s.id === id), 1);
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
function openAddStaff() {
    if (document.getElementById("addStaffTableContainer").classList.contains("hidden")) {
        document.getElementById("addStaffTableContainer").classList.toggle("hidden");
    }
}
