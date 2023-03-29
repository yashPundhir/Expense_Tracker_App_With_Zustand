import React from "react";

const ExpenseList = () => {
	return (
		<div className="my-5">
			<ul className="flex flex-col items-center justify-center gap-5 text-[20px] font-medium border-[1.5px] border-indigo-500 py-7 w-[450px] h-auto rounded-3xl">
				<li className="border-[1.5px] border-green-400 px-5 py-2 text-center rounded-xl">
					Books
				</li>
				<li className="border-[1.5px] border-green-400 px-5 py-2 text-center rounded-xl">
					Medicines
				</li>
				<li className="border-[1.5px] border-green-400 px-5 py-2 text-center rounded-xl">
					Fruits
				</li>
				<li className="border-[1.5px] border-green-400 px-5 py-2 text-center rounded-xl">
					Dinner
				</li>
				<li className="border-[1.5px] border-green-400 px-5 py-2 text-center rounded-xl">
					Chocolate
				</li>
			</ul>
		</div>
	);
};

export default ExpenseList;
