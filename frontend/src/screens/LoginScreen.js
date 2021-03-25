import React, { useState } from 'react';


const LoginScreen = () =>{

    const [loginState, setLoginState]= useState('idle')
    const [errState, setErrState] = useState([])

    let emailField;
    let passwordField;

    const formData = new FormData();
    const login =()=>{
    
        setLoginState('sending')
        //check if email and password is correct
        formData.append('email', emailField.value);
        formData.append('password', passwordField.value);
        fetch(
            `${process.env.REACT_APP_BACKEND}/user/login`, {

            method:'POST', 
            body:formData, 
            }
            
        )

        .then ((response)=> {
            response.json().then(data =>{
                if(data.jsonwebtoken)
                {
                    setLoginState('successful')
                }
                else{
                    setLoginState('unsuccessful')
                }

            })
        }
        )
        
        .catch(err =>
            console.log(err)
        
        )

    
    }

    return(
        <div className="container">
        <h2 style={{'margin-top':'200px', 'color':'black', 'text-align':'center'}}>Login to your Account</h2>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="card shadow-lg col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 m-5 p-5">

                        <div class="form-floating mb-3">
                            <label for="floatingInput">Email</label>
                            <input ref={(element) => emailField= element} type="text" class="form-control" id="floatingInput" required/>
                        </div>
                        <div class="form-floating mb-3">
                            <label for="floatingPassword">Password</label>
                            <input ref={(element) => passwordField= element} type="text" class="form-control" id="floating" required/>
                        </div>
                        {
                            (loginState === 'idle') && <button className="btn btn-primary" onClick={login}>LOGIN</button>
                        }
                        {
                            (loginState === 'sending') && <p>Please Wait untill we check your password and email....... </p>
                        }
                        {
                            (loginState === 'successful') &&  
                            <div>
                                ><button className="btn btn-primary col-12" onClick={login}>LOGIN</button>
                                <div class="alert alert-success mt-2">Logged in Successfully</div>
                            </div>
                        }
                        {
                            (loginState === 'unsuccessful') &&  
                            <div>
                                <button className="btn btn-primary col-12" onClick={login}>LOGIN</button>
                                <div class="alert alert-danger mt-2">failed, please try again with different email or/and password</div>
                            </div>
                        }
                </div>
            </div>
        </div>
    </div>
    )

}
export default LoginScreen