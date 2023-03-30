import React from "react";

const TotalExpense = () => {
	return (
		<div className="my-10 flex justify-center items-center gap-5 text-[40px] font-semibold py-6 px-12 border-[1.5px] border-orange-500 rounded-3xl">
			<span>Total Expense:</span>
			<span className="border-[1.5px] border-purple-500 rounded-2xl px-6 py-2">
				Number
			</span>
		</div>
	);
};

export default TotalExpense;
