import React from "react";

const ExpenseForm = () => {
	return (
		<div className="mt-20 w-[450px] h-[350px] flex flex-col justify-center items-center gap-8 border-[1.5px] border-rose-400 rounded-3xl">
			<div className="flex flex-col items-center justify-center gap-5 border-[1.5px] border-emerald-500 rounded-3xl p-10 w-auto h-auto ">
				<input
					className="w-60 p-3 border-[1.5px] border-lime-400 rounded-xl text-center focus:outline-none"
					type="text"
					placeholder="Expense Name"
					required
				/>
				<input
					className="w-60 p-3 border-[1.5px] border-lime-400 rounded-xl text-center focus:outline-none bg-neutral-700"
					type="number"
					placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expense Amount"
					required
				/>
			</div>
			<button className="border-[1.5px] border-cyan-500 w-auto rounded-lg px-6 py-2  ">
				Add to List
			</button>
		</div>
	);
};

export default ExpenseForm;
