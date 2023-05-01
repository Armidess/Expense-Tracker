import "./LoginUi.css";
import profile from "./../image/a.png";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase";

function LoginUi(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				// prompt("Error in Logging In");
				console.log(error);
			});
		setEmail("");
		setPassword("");
	};

	return (
		<div className="main">
			<div className="sub-main">
				<div>
					<div className="imgs">
						<div className="container-image">
							<img src={profile} alt="profile" className="profile" />
						</div>
					</div>
					<form onSubmit={login}>
						<h1>Login Page</h1>
						<input
							type="email"
							placeholder="Email"
							className="name"
							value={email}
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
						<div className="second-input">
							<input
								type="password"
								placeholder="Password"
								className="name"
								value={password}
								onChange={(event) => {
									setPassword(event.target.value);
								}}
							/>
						</div>
						<div className="login-button">
							<button type="submit">Login</button>
						</div>
						<div className="login-button">
							<button onClick={props.setSignup}>Create Account</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginUi;
