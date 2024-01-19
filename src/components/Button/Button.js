import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { signOut } from "firebase/auth";
import auth from "../Authentication/firebase.js";
import { Link } from "react-router-dom";

const Button = () => {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		signOut(auth)
			.then(() => {
				dispatch(logout());
			})
			.catch((error) => {
				console.log("Error Signing Out !!!!", error);
			});
	};

	return (
		<Link to="/">
			<button className="btn" onClick={logoutHandler}>
				Logout
			</button>
		</Link>
	);
};

export default Button;
