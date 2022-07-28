import React from 'react';


function SignUp() {
  return (
    <div>
    <section id="signUp" className="page">
    
    
    <div className="form">
      <form action="#" id="signUpForm">
        <span className = "closeBtn">
          <i className = "fas fa-times"></i>
        </span>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to apply.</p>
          
      
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
      
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
          
      
          <p>By creating an account you agree to our <a href='./Services.js'>Terms & Privacy</a>.</p>
          <button type="submit" className="registerbtn" id="registerbtn">Register</button>
        </div>
              
        <div className="container signin">
          <p>Already have an account? <a href='./SignIn'id="signIn">Sign in</a>.</p>
        </div>
      </form>
    </div>
    

   
  </section>
    </div>
  )
}

export default SignUp
