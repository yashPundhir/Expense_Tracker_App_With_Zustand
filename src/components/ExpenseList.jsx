import React, { useState } from "react";

import ExpenseUpdateModal from "./ExpenseUpdateModal";

import useExpenseStore from "../app/expenseStore";

const ExpenseList = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [expenseID, setExpenseID] = useState("");

	const [updateExpenseName, setUpdateExpenseName] = useState("");

	const [updateExpenseAmount, setUpdateExpenseAmount] = useState("");

	const [oldExpAmount, setOldExpAmount] = useState("");

	const expenses = useExpenseStore((state) => state.expenses);

	const removeExpense = useExpenseStore((state) => state.removeExpense);

	const updateExpense = useExpenseStore((state) => state.updateExpense);

	const handleUpdateExpenseSubmit = (id, name, amount, oldAmount) => {
		if (!updateExpenseName || !updateExpenseAmount) {
			setUpdateExpenseName("");
			setUpdateExpenseAmount("");
			return alert("please add all the required fields");
		}
		updateExpense(id, name, amount, oldAmount);
		setUpdateExpenseName("");
		setUpdateExpenseAmount("");
		setIsOpen(false);
	};

	const individualExpense = expenses.map((expense, i) => (
		<React.Fragment key={i}>
			<li className="border-[1.5px] border-green-400 px-8 py-4 text-center rounded-2xl flex flex-row justify-between items-center gap-5">
				<span className="capitalize py-1.5 border-[1.5px] border-purple-700 px-3 rounded-xl">
					{expense?.expName}
				</span>
				<span>{`=>`}</span>
				<span className="py-1.5 border-[1.5px] border-pink-400 px-3 rounded-xl">
					{expense?.expAmount}
				</span>
				<button
					onClick={() => {
						setIsOpen(true);
						setExpenseID(Number(expense?.id));
						setUpdateExpenseName(expense?.expName);
						setUpdateExpenseAmount(expense?.expAmount);
						setOldExpAmount(expense?.expAmount);
					}}
					className="border-[1.5px] border-blue-500 text-[14px] py-1.5 px-3.5 rounded-lg"
				>
					Update
				</button>
				<ExpenseUpdateModal
					open={isOpen}
					closeModal={() => {
						setIsOpen(false);
					}}
				>
					<div className="mt-5 w-[450px] h-[350px] flex flex-col justify-center items-center gap-8 border-[1.5px] border-red-600 rounded-3xl drop-shadow-lg">
						<div className="flex flex-col items-center justify-center gap-5 border-[1.5px] border-emerald-500 rounded-3xl p-10 w-auto h-auto ">
							<input
								className="w-60 p-3 border-[1.5px] border-amber-400 rounded-xl text-center focus:outline-none bg-transparent"
								type="text"
								value={updateExpenseName}
								onChange={(event) => {
									setUpdateExpenseName(event.target.value);
								}}
								placeholder="Expense Name"
								required
							/>
							<input
								className="w-60 p-3 border-[1.5px] border-pink-400 rounded-xl text-center focus:outline-none bg-transparent"
								type="number"
								value={updateExpenseAmount}
								onChange={(event) => {
									setUpdateExpenseAmount(Number(event.target.value));
								}}
								placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expense Amount"
								required
							/>
						</div>
						<button
							onClick={() => {
								handleUpdateExpenseSubmit(
									expenseID,
									updateExpenseName,
									updateExpenseAmount,
									oldExpAmount
								);
								// alert(
								// 	`expenseid is ${expenseID},
								// 	 expensename is ${updateExpenseName},
								// 	 expenseamount is ${updateExpenseAmount}
								// 	 oldexpAmount is ${oldExpAmount}`
								// );
							}}
							className="border-[1.5px] border-blue-500 w-auto rounded-lg px-6 py-2  "
						>
							Update List
						</button>
					</div>
				</ExpenseUpdateModal>

				<button
					onClick={() => {
						removeExpense(expense.id, expense.expAmount);
					}}
					className="border-[1.5px] border-red-500 text-[14px] py-1.5 px-3.5 rounded-lg"
				>
					Delete
				</button>
			</li>
		</React.Fragment>
	));

	return (
		<div className="my-5">
			<ul className="flex flex-col items-center justify-center gap-5 text-[20px] font-medium border-[1.5px] border-indigo-500 py-7 w-auto min-w-[450px] px-10 h-auto rounded-3xl">
				{individualExpense}
			</ul>
		</div>
	);
};

export default ExpenseList;
