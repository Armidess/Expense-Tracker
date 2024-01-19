import "./ExpenseDate.css";

function ExpenseDate(props) {
	const monthValue = [
		{ value: "January", label: 0 },
		{ value: "February", label: 0 },
		{ value: "March", label: 0 },
		{ value: "April", label: 0 },
		{ value: "May", label: 0 },
		{ value: "June", label: 0 },
		{ value: "July", label: 0 },
		{ value: "August", label: 0 },
		{ value: "September", label: 0 },
		{ value: "October", label: 0 },
		{ value: "November", label: 0 },
		{ value: "December", label: 0 },
	];

	const month = monthValue[props.month].value;
	const day = props.day;
	const year = props.year;

	return (
		<div className="expense-date">
			<div className="exprense-date__day">{day}</div>
			<div className="exprense-date__month">{month}</div>
			<div className="exprense-date__year">{year}</div>
		</div>
	);
}

export default ExpenseDate;
