var attempt = 3; 
var loggedAsStaff = false;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "123") {
        alert("Login successfully as admin");
        loggedAsAdmin = true;
        window.location = "/#/admin"; 
        return false;
    }
    else if (username == "staff" && password == "123") {
        alert("Login successfully as stuff");
        loggedAsStaff = true;
        window.location = "/#/staff"; 
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
function logout(){
    loggedAsAdmin = false;
     loggedAsStaff = false;
     window.location ="/#";
}