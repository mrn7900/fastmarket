import "./css/LoginForm.css"
import axios from 'axios';
function LoginForm(){
    const login = async (username, password) => {
        try {
          const response = await axios.post('https://localhost:7204/api/Authenticate/login', { username, password });
          // Handle the response, which may contain the access token.
          console.log(response.data);
        } catch (error) {
          // Handle any errors.
          console.error("error:"+error);
        }
      };


  
        return <div className="LoginContainer">
                    <form action="" className="LoginForm">
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className="LoginForm">
                            <label htmlFor="" className="LoginItem  ">نام کاربری</label>
                            <input type="text" className="LoginItem btn "/>
                            <label htmlFor="" className="LoginItem  ">رمزعبور</label>
                            <input type="password" className="LoginItem btn"/>
                            <button type="submit" className="loginbtn btn">ورود</button>  
                            <div className="forgetPassContainer">
                                 <button type="submit" className="loginbtn btn forgetPassbtn">فراموشی رمز</button>  
                                 <button type="submit" className="loginbtn btn forgetPassbtn">ثبت نام</button>  
                            </div>
                            

                        </div>
                    </form>
                </div>
}
export default LoginForm;