import axios from "axios";
const getExpenses = async () => {
	let retrivedExpenses = [];
	const response = await axios({
		method: "get",
		url: "https://expense-tracker-6c86a-default-rtdb.firebaseio.com/Expenses.json",
		responseType: "json",
	});

	for (const key in response.data) {
		// console.log("Date", response.data[key].date);
		retrivedExpenses.push({ ...response.data[key] });
	}
	console.log("Retrived Expenses", retrivedExpenses);
	return retrivedExpenses;
};

export default getExpenses;
