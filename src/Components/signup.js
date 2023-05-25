import React from 'react';
import { useState } from 'react';
import './App.css';
import Welcome from './welcome.js'
import { useNavigate } from 'react-router-dom';

const Signup = () => 
{
    const [ input, setInput] = useState('');
    
    console.log(localStorage);
   const navigate = useNavigate();

    const navigateTosignup = () => {
        navigate('/signup');
    }

    const initialValues = {
        name:"",
        email:"",
        password:"",
    };

    

    const navigateTowelcome = () => {
        navigate('/welcome');
    }

    const handle = (e) => {
        console.log(values);
        localStorage.setItem('Name',values.name);
        localStorage.setItem('Email',values.email);
        localStorage.setItem('Password',values.password);

        setValDisplay({name: localStorage.getItem('Name'), email: localStorage.getItem("Email"), password: localStorage.getItem("Password")});
        // setValDisplay({...valDisplay, name: 'Pranshu'});
    }

    
    const[valDisplay, setValDisplay] = useState(initialValues);
    const [values, setValues] = useState(initialValues);
    const [display,setDisplay] = useState(false);

    const handleChange = (e) => {
            const{name,value} = e.target;
            setValues({
      ...values,
      [name]: value,
      
    });
    setInput(e.target.value);
  };

    return(

      // <h1>Welcome to Signup Page</h1>
        <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' , justifyItems: 'center'}} >
                <h1>Welcome to Signup Page</h1>

              {/* <form>
                    <div className="input-group heading width">
                        <span className="input-group-addon center-block"><i className="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" style={{marginBottom:'10px'}} className="form-control center-block" name="email" placeholder="Email"></input>
                    </div>
                    <div class="input-group width">
                        <span className="input-group-addon center-block"><i className="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" className="form-control center-block" name="password" placeholder="Password"></input>
                    </div>
                    <div className="input-group width">
                        <span className="input-group-addon center-block">Text</span>
                        <input id="msg" type="text" className="form-control center-block" name="msg" placeholder="Additional Info"></input>
                    </div>
                  
  
                </form> */}

                
                
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center' ,paddingLeft:'400px'}}>
                <form style={{width:'50%' ,display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center'}}>
                <div className="ui input focus" style={{paddingBottom:'10px'}}>
                    {/* <label>Name:</label> */}
                    <input id='name' name='name' type="text"  placeholder="Enter Name" onChange={handleChange} value={values.name}/>
                </div>
                <div className="ui input focus " style={{paddingBottom:'10px'}}>
                    {/* <label>E-mail:  </label> */}
                    <input id='email' name='email' type="text" placeholder="Enter Email" onChange={handleChange} value={values.email}  />
                </div>
                <div className="ui input focus" style={{paddingBottom:'10px'}} >
                    {/* <label>Password:</label> */}
                    <input id='password' name='password' type="password" placeholder="Enter Password" onChange={handleChange} value={values.password} />
                </div>
                <div>
                {/* <button className="fluid ui secondary button" onClick={( (e) => {
                    e.preventDefault();
                    setDisplay(true);
                    navigateTowelcome();

                })}>Login
                </button> */}
                
                </div>
                {display&&(
                  <p>Your Name is: {values.name} <br></br>
                  Your Email is: {values.email} <br></br>
                  Your Password is: {values.password} <br></br>
                  </p>
                  
                )}

                
                
                </form>
                
                <div style={{paddingTop:'20px' , padddingLeft: '700px'}}>
                    <h5>Don't have an account?</h5>
                    <div style={{paddingTop:'10px'}}>
                        <button className='positive ui button' onClick= {(e) => {
                            handle();
                            if (input.trim().length !== 0) {
                        console.log('input value is NOT empty');
                        navigateTowelcome();
                      } else {
                        alert("Empty Input");
                        // console.log('input value is empty');
                      }
                        }} >Sign Up</button>
                    </div>
                </div>

                {/* {valDisplay&&(
            <div>
              
               Name: <p>{valDisplay.name}</p>

            </div>
         )}
         {valDisplay&& (
            <div>
               
               Email: <p>{valDisplay.email}</p>

            </div>
         )}
        {valDisplay && (
            <div>
               Password: <p>{valDisplay.password}</p>
            </div>
         )}     */}
                {/* < Welcome name = "values.name"/> */}

                </div>
            </div>
         
        //  {setValDisplay&&(
        //     <p>Your Name is: {values.name} <br></br>
        //     Your Email is: {values.email} <br></br>
        //     Your Password is: {values.password} <br></br>
        //     </p>
            
        //   )}
    );


}



export default Signup;