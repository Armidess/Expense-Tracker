import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { React, useState, useEffect, useCallback } from "react";
import addExpenses from "./components/DataBase/addExpenses.js";
import axios from "axios";
import UserLogin from "./components/Authentication/UserLogin.js";
import auth from "./components/Authentication/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import User from "./components/UserDetails/User.js";

function App() {
	const DUMMY_EXPENSES = [];
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [isUser, setUser] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				// setExpenses([]);
				setUser(false);
				setCurrentUser(null);
			})
			.catch((error) => {
				console.log("Error Signing Out !!!!");
			});
	};

	const checkUser = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in.
				console.log("Logged In");
				setUser(true);
				setCurrentUser(user);
				getdata(user);
			} else {
				// No user is signed in.
				console.log("Logged Out");
				setUser(false);
				setCurrentUser(null);
			}
		});
	};

	const getdata = useCallback(async (user) => {
		let retrivedExpenses = [];
		const response = await axios({
			method: "get",
			url: `https://expense-tracker-6c86a-default-rtdb.firebaseio.com/${user.uid}.json`,
			responseType: "json",
		});
		for (const key in response.data) {
			const temp = response.data[key];
			retrivedExpenses.push({
				...temp,
				amount: parseInt(temp.amount),
				day: parseInt(temp.day),
			});
		}

		console.log("Retrived Expenses", retrivedExpenses, currentUser);
		setExpenses(retrivedExpenses);
	}, []);

	const addExpenseHanlder = (expense) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, expense];
		});
		addExpenses(expense, currentUser);
	};
	useEffect(() => {
		checkUser();
		// getdata();
	}, []);

	return (
		<div>
			{isUser && <NewExpense onAddExpense={addExpenseHanlder} />}
			{isUser && <User currentUser={currentUser} signout={signOutUser} />}
			{isUser && <Expenses items={expenses} />}
			{!isUser && <UserLogin setUser={setUser} />}
		</div>
	);
}

export default App;
