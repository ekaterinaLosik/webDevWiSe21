var studentsViewFromStaff = new Array();

studentsViewFromStaff.push(["Id", "Name", "Course name"]);
studentsViewFromStaff.push([1, "Student 1", "course1"]);

studentsViewFromStaff.push([2, "Student 2", "course2"]);
studentsViewFromStaff.push([3, "Student 3", "course1"]);

studentsViewFromStaff.push([3, "Student 4", "course2"]);

var courses = new Array();

courses.push("course1");
courses.push("course2");

function displayStudents() {

    var table = document.createElement("TABLE");
    table.setAttribute("id", "tableSt");
    table.setAttribute("class", "tableStud");
    var columnCount = studentsViewFromStaff[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = studentsViewFromStaff[0][i];
        row.appendChild(headerCell);
    }
    if (document.getElementById("courses").value == "course 1") {
        for (var i = 1; i < studentsViewFromStaff.length; i++) {
            if (studentsViewFromStaff[i][2] == "course1") {
                row = table.insertRow(-1);


                row.setAttribute("class", "stTr");
                
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.setAttribute("class", "stTd");
                    cell.innerHTML = studentsViewFromStaff[i][j];
                }
            }
        }


    }

    if (document.getElementById("courses").value == "course 2") {
        for (var i = 1; i < studentsViewFromStaff.length; i++) {
            if (studentsViewFromStaff[i][2] == "course2") {
                row = table.insertRow(-1);


                row.setAttribute("class", "stTr");
                
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.setAttribute("class", "stTd");
                    cell.innerHTML = studentsViewFromStaff[i][j];
                }
            }
        }


    }
   
    var dvTable = document.getElementById("studentsTable");

    dvTable.innerHTML = "";

    dvTable.appendChild(table);
    
}