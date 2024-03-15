import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate day={props.day} month={props.month} year={props.year} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">₹{props.amount}</div>
				</div>
			</Card>
		</li>
	);
}
export default ExpenseItem;
