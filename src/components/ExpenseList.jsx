import React from "react";

import useExpenseStore from "../app/expenseStore";

const ExpenseList = () => {
	const expenses = useExpenseStore((state) => state.expenses);

	const individualExpense = expenses.map((expense, i) => (
		<React.Fragment key={i}>
			<li className="border-[1.5px] border-green-400 px-8 py-4 text-center rounded-2xl flex flex-row justify-between items-center gap-5">
				<span className="capitalize py-1.5 border-[1.5px] border-purple-700 px-3 rounded-xl">
					{expense.expName}
				</span>
				<span>{`=>`}</span>
				<span className="py-1.5 border-[1.5px] border-pink-400 px-3 rounded-xl">
					{expense.expAmount}
				</span>
			</li>
		</React.Fragment>
	));

	return (
		<div className="my-5">
			<ul className="flex flex-col items-center justify-center gap-5 text-[20px] font-medium border-[1.5px] border-indigo-500 py-7 w-[450px] h-auto rounded-3xl">
				{individualExpense}
			</ul>
		</div>
	);
};

export default ExpenseList;
