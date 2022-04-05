import { useState } from "react";
import "./login-register.css";

const LoginRegister = () => {
  
    const [user , setUser] = useState({});

    const getInputValues = (e) => {
      user[e.target.name] = e.target.value
    };

    const signUser = () => {
      setUser({...user});
    };

  return (
    <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div> 
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">First Name</label>
					<input name="firstName" onChange={getInputValues} id="user" type="text" className="input"/>    
				</div>
				<div className="group">
					<label for="pass" className="label">Last Name</label>
					<input name="lastName" onChange={getInputValues} id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Profile Image</label>
					<input name="profileImg" onChange={getInputValues} id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email</label>
					<input name="Email" onChange={getInputValues} id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input name="password" onChange={getInputValues} id="pass" type="password" className="input"/>
				</div>
                <div className="group">
					<label for="pass" className="label">Title</label>
					<input name="title" onChange={getInputValues} id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<button onClick={signUser} type="submit" class="button">Sign Up</button>
				</div>
			</div>
		</div>
	</div>
</div>
  )
} 

export default LoginRegister ;