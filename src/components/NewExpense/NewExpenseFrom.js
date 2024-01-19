import "./NewExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = (props) => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleHandler = (event) => {
		setTitle(event.target.value);
	};

	const amountHandler = (event) => {
		setAmount(event.target.value);
	};

	const dateHandler = (event) => {
		setDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		var ddate = new Date(date);
		const expenseData = {
			id: Math.random(),
			title: title,
			amount: parseInt(amount),
			day: parseInt(ddate.toLocaleString("en-US", { day: "2-digit" })),
			month: ddate.getMonth(),
			year: parseInt(ddate.getFullYear()),
		};
		console.log("expenseData", expenseData);
		props.onExpenseSubmit(expenseData);
		setAmount("");
		setDate("");
		setTitle("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={titleHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min=".01"
						step=".01"
						onChange={amountHandler}
						value={amount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2030-12-31"
						onChange={dateHandler}
						value={date}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default NewExpenseForm;
