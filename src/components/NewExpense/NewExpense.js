import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [newExpense, setNewExpense] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		//console.log(expenseData);
		props.onAddExpense(expenseData);
		props.onCancel(newExpense);
	};

	const startEditingHandler = () => {
		setNewExpense(true);
	};

	const stopEditingHandler = () => {
		setNewExpense(false);
	};

	return (
		<div className="new-expense">
			{!newExpense && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{newExpense && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
