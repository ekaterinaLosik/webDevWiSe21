const Admin = {
    render: async () => {
        if (loggedAsAdmin)
            return `
            <div class="logoutContainer" id="logoutContainer">
            <button type="button" class="logoutButton" name="logoutbtn" id="logoutbtn" onclick="logout()">Logout</button>
    
        </div>
            <div class="headerContainer"> 
        <button type="button" class="table__button" name="students" id="students" onclick="showStudents('admin')">Students</button> 
        <button type="button" class="table__button" name="staff" id="staff" onclick="showStaff()">Staff</button>
        </div>
        <div id="stTableManagemt" class="managContainer"> </div>
        <div id="stTable" class="studTableContainer"> </div>
        
        <div class="addStudTableContainer hidden" id="addStudTableContainer">
        <table id="addStudTable">
            <tr>
                <td class="lRow">Student ID*:</td>
                <td><input type="number" id="studID" class="table__input" required></td>
            </tr>
            <tr>
                <td class="lRow">First Name*:</td>
                <td><input type="text" id="firstName" class="table__input" required></td>
            </tr>
            <tr>
                <td class="lRow">Last Name:</td>
                <td><input type="text" class="table__input" id="lastName"></td>
            </tr>
            <tr>
                <td class="lRow">Date of birth:</td>
                <td><input type="date" class="table__input" id="dob">
                </td>
            </tr>
            <tr>
                <td class="lRow">Gender:</td>
               <td><label class="table__input__label"><input type="radio" name="gender"  id="genderF">Female</label>
               <label class="table__input__label"><input type="radio" name="gender" id="genderM">Male</label>   
               <label class="table__input__label"><input type="radio" name="gender" id="genderD">Diverse</label></td>
            </tr>
            <tr>
                <td class="lRow">Department*:</td>
                <td><div class="table__select"><select name="department" id="department">
                    <option value="Applied Science">Applied Science</option>
                    <option value="Mathematics">Mathematics</option>
                
                  </select></div></td>
            </tr>
            <tr>
                <td class="lRow">Email*:</td>
                <td><input type="email" id="email" class="table__input" required></td>
                
            </tr>
            <tr>
        <td class="lRow">Joining date:</td>
        <td><input type="date" min="2015-01-01" class="table__input" id="jDateStud">
        </td>
    </tr>
        </table>       <div class ="managContainer"> <input type="submit" id="addRS" value="Add" class="manage__button" onclick="addRowStud()"></div>   

    </div>
    
    <div class="addStudTableContainer hidden" id="addStaffTableContainer">
    <table id="addStaffTable">
        <tr>
            <td class="lRow">Staff ID*:</td>
            <td><input type="number" id="staffID" class="table__input" required></td>
        </tr>
        <tr>
            <td class="lRow">First Name*:</td>
            <td><input type="text" id="stafffirstName" class="table__input" required></td>
        </tr>
        <tr>
            <td class="lRow">Last Name:</td>
            <td><input type="text" class="table__input" id="stafflastName"></td>
        </tr>
        <tr>
            <td class="lRow">Date of birth:</td>
            <td><input type="date" class="table__input" id="staffdob">
            </td>
        </tr>
        <tr>
            <td class="lRow">Gender:</td>
           <td><label class="table__input__label"><input type="radio" name="gender"  id="staffgenderF">Female</label>
           <label class="table__input__label"><input type="radio" name="gender" id="staffgenderM">Male</label>   
           <label class="table__input__label"><input type="radio" name="gender" id="staffgenderD">Diverse</label></td>
        </tr>
        
        <tr>
            <td class="lRow">Email*:</td>
            <td><input type="email" id="staffemail" class="table__input" required></td>
            
        </tr>
        
        
        
    </table>
    <input type="submit" id="addRS" value="Add" class="table__button" onclick="addRowStaff()">
</div>
    
        `;
        else return``;
    }
};
export default Admin;