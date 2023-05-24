import React from 'react';
import { useState } from 'react';
import './App.css';
import Welcome from './welcome.js'
import { useNavigate } from 'react-router-dom';

const Login = () =>
{

    const navigate = useNavigate();

    const navigateTowelcome = () => {
        navigate('/welcome');
    }

    const navigateTosignup = () => {
        navigate('/signup');
    }

    const initialValues = {
        name:"",
        email:"",
        password:"",
    };
    
    const [values, setValues] = useState(initialValues);
    const [display,setDisplay] = useState(false);
    const [ input, setInput] = useState('');


    const handleChange = (e) => {
            const{name,value} = e.target;
            setValues({
      ...values,
      [name]: value,
    });
    setInput(e.target.value);
  };

//   const handleClick = (e) => {
//     e.preventDefault();

//     if (input.trim().length !== 0) {
//       console.log('input value is NOT empty');
//     } else {
//       console.log('input value is empty');
//     }
//   };

//   localStorage.setItem("user", {var + newUser});
//   localStorage.getItem("user");

  // sign up details store kr in localstorage.setItem
  // login check kr from localstorage.getItem
  // notification display according to output



    return(
        <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' , justifyItems: 'center'}} >
              {/* <form>
                    <div className="input-group heading width">
                        <span className="input-group-addon center-block"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" style={{marginBottom:'10px'}} class="form-control center-block" name="email" placeholder="Email"></input>
                    </div>
                    <div class="input-group width">
                        <span className="input-group-addon center-block"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" class="form-control center-block" name="password" placeholder="Password"></input>
                    </div>
                    <div className="input-group width">
                        <span className="input-group-addon center-block">Text</span>
                        <input id="msg" type="text" className="form-control center-block" name="msg" placeholder="Additional Info"></input>
                    </div>
                  
  
                </form> */}

                
                
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center' ,paddingLeft:'400px'}}>
                <form style={{width:'50%' ,display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center'}}>
                
                <div class="ui input focus " style={{paddingBottom:'10px'}}>
                    {/* <label>E-mail:  </label> */}
                    <input id='email' name='email' type="text" placeholder="Enter Email" onChange={handleChange} value={values.email}  />
                </div>
                <div class="ui input focus" style={{paddingBottom:'10px'}} >
                    {/* <label>Password:</label> */}
                    <input id='password' name='password' type="password" placeholder="Enter Password" onChange={handleChange} value={values.password} required />
                </div>
                <div>
                <button className="fluid ui secondary button" onClick={( (e) => {
                    e.preventDefault();
                    setDisplay(true);
                    if (input.trim().length !== 0) {
                        console.log('input value is NOT empty');
                        
                        const Email = localStorage.getItem('Email');
                        const Password = localStorage.getItem('Password');
                        if(values.email == Email && values.password == Password){
                            console.log("Login Successful")
                            navigateTowelcome();
                        }
                        else{
                            console.log("Invalid Login Credentials")
                        }
                      } else {
                        alert("Empty Input");
                        // console.log('input value is empty');
                      }

                })}>Login
                </button>
                
                </div>
                {/* {display&&(
                  <p>Your Name is: {values.name} <br></br>
                  Your Email is: {values.email} <br></br>
                  Your Password is: {values.password} <br></br>
                  </p>
                  
                )} */}

                
                
                </form>
                
                <div style={{paddingTop:'20px' , padddingLeft: '700px'}}>
                    <h5>Don't have an account?</h5>
                    <div style={{paddingTop:'10px'}}>
                        <button className='positive ui button' onClick={( (e) => { 
                           e.preventDefault();
                           setDisplay(true); 
                           navigateTosignup();
                           })}>Sign Up</button>
                    </div>
                </div>
                    
                {/* < Welcome name = "values.name"/> */}

                </div>
            </div>

    );



}

export default Login; 