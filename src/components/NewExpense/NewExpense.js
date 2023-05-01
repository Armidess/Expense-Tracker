import NewExpenseFrom from "./NewExpenseFrom";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const expenseSubmitHandler = (submitedExpense) => {
		const expense = {
			...submitedExpense,
			id: Math.random(),
		};
		props.onAddExpense(expense);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<NewExpenseFrom
					onExpenseSubmit={expenseSubmitHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
