import React, { useState } from 'react';

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}


const RegisterScreen = () =>{
    const [accountState, set_accountState] = useState('idle')
    const [ errorsState, setErrorsState ] = useState([]);

    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneNumberField;
    let usernameField;
    let addressField;

    const register = () =>{
        const errors = [];
        // 1. Validate the fields
        // 1. Validate the fields
        if( firstNameField.value.length === 0 ) {
            errors.push("Please enter your first name")
        }
        if( lastNameField.value.length === 0 ) {
            errors.push("Please enter your last name")
        }
        if( validateEmail(emailField.value) === false ) {
            errors.push("Please enter a valid email address")
        }
        if( validatePassword(passwordField.value) === false ) {
            errors.push("Please enter a password between 8 to 16 characters")
        }
        
        // 1.1 If fields are invalid, setState("validation failed")
        if(errors.length > 0) {
            set_accountState("validation failed");
            setErrorsState(errors);
        }
        // 1.2 If the fields are valid, setState("sending")
        else {
            // 2 Show "sending..." and invoke the fetch()
            set_accountState("sending");
            fetch(
                'http://localhost:3002/user/new-account', 
                {
                    method: 'POST', 
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(
                    {
                        firstName: firstNameField.value, 
                        lastName: lastNameField.value, 
                        username:usernameField.value,
                        email: emailField.value,
                        password:passwordField.value,
                        phoneNumber: phoneNumberField.value,
                        address: addressField.value
                    }
                    )
                }
            )
            .then(
                () =>{
                set_accountState('successful')
                setErrorsState([]) 
                }
            )
            .catch( (err) => {
                set_accountState('unsuccessful')
                console.log(err)
            }
            )
           
           
        }

    }
    return(
        <div className="container">
            <h2 style={{'margin-top':'200px', 'color':'black', 'text-align':'center'}}>Create A New Account</h2>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="card shadow-lg  col-8 m-5 p-5">
   
                            <div class="form-floating mb-3">
                                <label for="floatingInput">First Name</label>
                                <input ref={(element) => firstNameField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            <div class="form-floating mb-3">
                                <label for="floatingInput">Last Name</label>
                                <input ref={(element) => lastNameField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            <div class="form-floating mb-3">
                                <label for="floatingInput">Username</label>
                                <input ref={(element) => usernameField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            <div class="form-floating mb-3">
                                <label for="floatingInput">Email</label>
                                <input ref={(element) => emailField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            <div class="form-floating mb-3">
                                <label for="floatingInput">Password</label>
                                <input ref={(element) => passwordField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            <div class="form-floating mb-3">
                                <label for="floatingInput">Phone Number</label>
                                <input ref={(element) => phoneNumberField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            <div class="form-floating mb-3">
                                <label for="floatingInput"Address>Address</label>
                                <input ref={(element) => addressField= element} type="text" class="form-control" id="floatingInput" />
                            </div>
                            {
                                accountState === "idle" && <button onClick={register} className="btn btn-primary"><span style={{'font-weight':'bold'}}>CREATE ACCOUNT</span></button>
                            }
                            {
                                accountState === "sending" && <p>Please Wait untill the account is created successfully....... </p>
                            }
                            {
                                (accountState === "successful") && <div class="alert alert-success">Account Created Successfully</div>
                            }
                            {
                                (accountState === "unsuccessful") && <div class="alert alert-danger">Error, please try again</div>
                            }
                            {
                                accountState === "validation failed" &&
                                    <div className="alert alert-danger">
                                        <ul>
                                        {
                                            errorsState.map(
                                                (error) => <li>{error}</li>
                                            )
                                        }
                                        </ul>
                                    </div>
                                    
                            }
                    </div>
                </div>
            </div>
        </div>
        )
}
export default RegisterScreen