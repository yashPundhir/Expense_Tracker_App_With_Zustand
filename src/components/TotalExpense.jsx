import React from "react";

import useExpenseStore from "../app/expenseStore";

const TotalExpense = () => {
	const totalExpense = useExpenseStore((state) => state.expenseTotal);

	return (
		<div className="my-10 flex justify-center items-center gap-5 text-[40px] font-semibold py-6 px-12 border-[1.5px] border-orange-500 rounded-3xl">
			<span>Total Expense:</span>
			<span className="border-[1.5px] border-purple-500 rounded-2xl px-6 pb-0 pt-1">
				{totalExpense}
			</span>
		</div>
	);
};

export default TotalExpense;
