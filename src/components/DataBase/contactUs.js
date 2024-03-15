import axios from "axios";
const contactUs = async (User, data) => {
	console.log(User);
	await axios.post(
		`https://expense-tracker-6c86a-default-rtdb.firebaseio.com/ContactUsData/${User.uid}.json`,
		data
	);
};

export default contactUs;
