import "./User.css";

const User = (props) => {
	console.log();
	return (
		<div className="user">
			<div>Current User : {props.currentUser.email}</div>
			<button onClick={props.signout}>Logout</button>
		</div>
	);
};

export default User;
