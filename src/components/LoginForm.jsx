import "./css/LoginForm.css"
function LoginForm(){
  
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