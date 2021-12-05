const Staff = {
    render: async () => {
        if (loggedAsStaff)
            return `
            <div class="logoutContainer" id="logoutContainer">
            <button type="button" class="logoutButton" name="logoutbtn" id="logoutbtn" onclick="logout()">Logout</button>
    
        </div>
        <div class="staffContainer" id="staffManagerContainer">
        <button type="button" class="table__button" name="students" id="displaystudents"
            onclick="showStudents('staff')">Display Students</button>
    </div>
    <div class="staffContainer" id="staffManagerContainer">
        <div class="table__select">
            <select name="course" id="courses">
                <option value="course 1">Course 1</option>
                <option value="course 2">Course 2</option>
            </select>
        </div>
    </div>
    
    <div id="stTableManagemt" class="managContainer"> </div>

    <div id="stTable" class="studTableContainer"> </div>

    <div id="studentsTable">

    </div>
        `;
        else return``;
    }
};
export default Staff;