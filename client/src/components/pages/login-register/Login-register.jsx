import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { VerifyLogin } from "../../../utils/verify-login";
import { VerifyRegister } from "../../../utils/verify-register";
import "./login-register.css";

const LoginRegister = () => {
	const [loginUser, setLoginUser] = useState({});
	const [registerUser, setRegisterUser] = useState({});
	const { user, setUser } = useContext(UserContext);


	const OnChangedLogin = (e) => {
		loginUser[e.target.name] = e.target.value
	};
	const OnSubmitLogin = () => {
		setLoginUser({ ...loginUser });
		VerifyLogin(loginUser, setUser);
	};

	const OnChangedRegister = (e) => {
		registerUser[e.target.name] = e.target.value
	};

	const OnSubmitRegister = () => {
		setRegisterUser({ ...registerUser });
		VerifyRegister(registerUser);
	};

	return (
		<div className="main">
			<div className="login-wrap">
				<div className="login-html">
					<input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
					<input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Sign Up</label>
					<div className="login-form">
						<div className="sign-in-htm">
							<div className="group">
								<label for="user" className="label">Username</label>
								<input id="user" name="email" onChange={OnChangedLogin} type="text" className="input" />
							</div>
							<div className="group">
								<label for="pass" className="label">Password</label>
								<input id="pass" name="password" onChange={OnChangedLogin} type="password" className="input" data-type="password" />
							</div>
							<div className="group">
								<input onClick={OnSubmitLogin} type="submit" className="button" value="Sign In" />
							</div>
							<div className="hr"></div>
						</div>










						<div className="sign-up-htm">
							<div className="group">
								<label for="user" className="label">First Name</label>
								<input name="firstName" onChange={OnChangedRegister} id="user" type="text" className="input" />
							</div>
							<div className="group">
								<label for="pass" className="label">Last Name</label>
								<input name="lastName" onChange={OnChangedRegister} id="pass" type="text" className="input" />
							</div>
							<div className="group">
								<label for="pass" className="label">Profile Image</label>
								<input name="profileImg" onChange={OnChangedRegister} id="pass" type="text" className="input" />
							</div>
							<div className="group">
								<label for="pass" className="label">Email</label>
								<input name="email" id="pass" onChange={OnChangedRegister} type="text" className="input" />
							</div>
							<div className="group">
								<label for="pass" className="label">Password</label>
								<input name="password" onChange={OnChangedRegister} id="pass" type="password" className="input" />
							</div>
							<div className="group">
								<label for="pass" className="label">Title</label>
								<input name="title" onChange={OnChangedRegister} id="pass" type="text" className="input" />
							</div>
							<div className="group">
								<button type="submit" onClick={OnSubmitRegister} class="button">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginRegister;