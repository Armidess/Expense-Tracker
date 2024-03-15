import axios from "axios";
const addExpenses = async (expense, User) => {
	await axios.post(
		`https://expense-tracker-6c86a-default-rtdb.firebaseio.com/UserData/${User.uid}.json`,
		expense
	);
};

export default addExpenses;
