import React, { useState } from "react";

import Swal from "sweetalert2/dist/sweetalert2";
import "./popupStyle.css";

import useExpenseStore from "../app/expenseStore";

const ExpenseForm = () => {
	const [expenseName, setExpenseName] = useState("");

	const [expenseAmount, setExpenseAmount] = useState("");

	const addExpense = useExpenseStore((state) => state.addExpense);

	const handleExpenseSubmit = () => {
		if (!expenseName || !expenseAmount) {
			setExpenseName("");
			setExpenseAmount("");
			//return alert("please add all the required fields");
			return Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Please fill all the Required Fields!",
				showCloseButton: true,
				backdrop: `
				rgba(0,0,0,0.85)
				left top
				no-repeat
				`,
				allowOutsideClick: false,
				backdropOpacity: "0.9",
			});
		}
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			iconColor: "rgb(34 197 94)",
			showCloseButton: true,
			timer: 6000,
			//allowOutsideClick: false,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});

		Toast.fire({
			icon: "success",
			title: "Details Added Successfully",
		});
		addExpense({
			id: Math.ceil(Math.random() * 1000000),
			expName: expenseName,
			expAmount: expenseAmount,
			oldAmount: 0,
		});
		setExpenseName("");
		setExpenseAmount("");
	};

	return (
		<div className="mt-20 w-[450px] h-[350px] flex flex-col justify-center items-center gap-8 border-[1.5px] border-red-600 rounded-3xl drop-shadow-lg">
			<div className="flex flex-col items-center justify-center gap-5 border-[1.5px] border-emerald-500 rounded-3xl p-10 w-auto h-auto ">
				<input
					className="w-60 p-3 border-[1.5px] border-amber-400 rounded-xl text-center focus:outline-none bg-transparent"
					type="text"
					value={expenseName}
					onChange={(event) => {
						setExpenseName(event.target.value);
					}}
					placeholder="Expense Name"
					required
				/>
				<input
					className="w-60 p-3 border-[1.5px] border-pink-400 rounded-xl text-center focus:outline-none bg-transparent"
					type="number"
					value={expenseAmount}
					min="0"
					onChange={(event) => {
						setExpenseAmount(Math.abs(Number(event.target.value)));
					}}
					placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expense Amount"
					required
				/>
			</div>
			<button
				onClick={() => {
					handleExpenseSubmit();
				}}
				className="border-[1.5px] border-blue-500 w-auto rounded-lg px-6 py-2  "
			>
				Add to List
			</button>
		</div>
	);
};

export default ExpenseForm;
