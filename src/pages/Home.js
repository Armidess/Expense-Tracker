import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import axios from "axios";
import Expenses from "../components/Expenses/Expenses.js";
import NewExpense from "../components/NewExpense/NewExpense.js";
import addExpenses from "../components/DataBase/addExpenses.js";
import UserLogin from "../components/Authentication/UserLogin.js";
import auth from "../components/Authentication/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {
	addExpense,
	loginSuccess,
	updateExpenseList,
} from "../redux/userSlice.js";

export default function Home() {
	const dispatch = useDispatch();
	const { currentUser: User } = useSelector((state) => state.user);
	const getdata = useCallback(
		async (user) => {
			let retrivedExpenses = [];
			const response = await axios({
				method: "get",
				url: `https://expense-tracker-6c86a-default-rtdb.firebaseio.com/UserData/${user.uid}.json`,
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
			console.log("Retrived Expenses", retrivedExpenses);
			dispatch(updateExpenseList(retrivedExpenses));
		},
		[dispatch]
	);

	const addExpenseHanlder = (expense) => {
		addExpenses(expense, User); // For DataBase
		dispatch(addExpense(expense)); // For Redux Store
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const serilizedUser = {
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
				};
				dispatch(loginSuccess(serilizedUser));
				getdata(serilizedUser);
				console.log("Logged In");
			} else {
				console.log("No User Found");
			}
		});
	}, [dispatch, getdata]);
	return (
		<>
			{User && <NewExpense onAddExpense={addExpenseHanlder} />}
			{User && <Expenses />}
			{!User && <UserLogin />}
		</>
	);
}
