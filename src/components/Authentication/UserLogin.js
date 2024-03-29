import { useState } from "react";
import LoginUi from "./LoginUi";
import SignUp from "./Signup";

const UserLogin = () => {
	const [isLogin, setLogin] = useState(true);
	const onSignupClickHandler = () => {
		setLogin(false);
	};
	const onLoginClickHandler = () => {
		setLogin(true);
	};
	return (
		<>
			{isLogin && <LoginUi setSignup={onSignupClickHandler} />}
			{!isLogin && <SignUp setLogin={onLoginClickHandler} />}
		</>
	);
};

export default UserLogin;
