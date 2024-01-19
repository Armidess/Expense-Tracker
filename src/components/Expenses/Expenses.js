import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import { useSelector } from "react-redux";

function Expenses() {
	const date = new Date();
	const [filteredYear, setFilteredYear] = useState(date.getFullYear());
	const { expenseList } = useSelector((state) => state.user);
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = expenseList.filter((expense) => {
		return expense.year.toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseChart expenses={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
