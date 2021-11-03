
const Login = {
    render: async () => {

        return `
        
        <div class="loginContainer">
  
            <h1 class="formtitle">Login</h1>
            <div class="forminput-group">
                <input type="text"  name="username" id="username" class="login__input"> 
            </div>
            <div class="forminput-group">
                <input type="password" name="password" id="password" class="login__input">
            </div>
            <button type="button" name="submit" id="submit" class="table__button" onclick="validate()">Continue</button>
            <p> admin 123 / staff 123</p>
            </div>
   
    
    `;
    },

    after_render: async () => {

    }


};
export default Login;




