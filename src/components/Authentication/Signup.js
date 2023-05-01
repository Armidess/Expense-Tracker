import "./LoginUi.css";
import profile from "./../image/a.png";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase";

function SignUp(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signup = (event) => {
		event.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
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
					<form onSubmit={signup}>
						<h1>Create New Account</h1>
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
							<button type="submit">Signup</button>
						</div>

						<div className="login-button">
							<button onClick={props.setLogin}>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
