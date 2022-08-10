import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const handleTitleChange = (e) => {
		setEnteredTitle(e.target.value);
	};

	const handleAmountChange = (e) => {
		setEnteredAmount(e.target.value);
	};

	const handleDateChange = (e) => {
		setEnteredDate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		//console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={handleTitleChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={handleAmountChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2022-12-31"
						onChange={handleDateChange}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={props.onCancel}>
						Cancel
					</button>
					<button type="submit" onClick={props.onCancel}>
						Add Expense
					</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
