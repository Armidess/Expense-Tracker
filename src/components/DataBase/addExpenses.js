import axios from "axios";
const addExpenses = async (expense, User) => {
	await axios.post(
		`https://expense-tracker-6c86a-default-rtdb.firebaseio.com/${User.uid}.json`,
		expense
	);
};

export default addExpenses;
