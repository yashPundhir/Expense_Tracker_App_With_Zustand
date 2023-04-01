import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const expenseStore = (set) => ({
	expenses: [],
	expenseTotal: 0,
	// expensesCopy: [],
	// differentValue: [],
	//oldExpAmount: 0,
	addExpense: (expense) => {
		set((state) => ({
			expenses: [expense, ...state.expenses],
			expenseTotal: state.expenseTotal + expense.expAmount,
		}));
	},

	removeExpense: (expenseID, expenseAmount) => {
		set((state) => ({
			expenseTotal: state.expenseTotal - expenseAmount,
			expenses: state.expenses.filter((expense) => expense.id !== expenseID),
		}));
	},

	// updateExpense: (expenseID, expenseName, expenseAmount) => {
	// 	set((state) => {
	// 		const filteredExpensesCopy = state.expenses.filter(
	// 			(expense) => expense.id !== expenseID
	// 		);
	// 		const differentValue = filteredExpensesCopy.find((item1) => {
	// 			const item2 = state.expenses.find((item2) => item2.id === item1.id);
	// 			return JSON.stringify(item1) !== JSON.stringify(item2);
	// 		});
	// 		return {
	// 			expenses: state.expenses.map((expense) =>
	// 				expense.id === expenseID
	// 					? { ...expense, expName: expenseName, expAmount: expenseAmount }
	// 					: expense
	// 			),
	// 			expenseTotal: state.expenseTotal + expenseAmount - differentValue?.expAmount,
	// 			differentValue: differentValue || null,
	// 		};
	// 	});
	// },

	updateExpense: (expenseID, expenseName, expenseAmount, oldAmt) => {
		set((state) => ({
			// expensesCopy: [...state.expenses],
			// differentValue: state.expensesCopy.filter(
			// 	(expense) => expense.id === expenseID
			// ),
			expenses: state.expenses.map((expense) =>
				expense?.id === expenseID
					? {
							...expense,
							expName: expenseName,
							oldAmount: oldAmt,
							expAmount: expenseAmount,
					  }
					: expense
			),
			expenseTotal: state.expenseTotal + expenseAmount - oldAmt,
			// oldExpAmount: 0,
			// differentValue: state.expensesCopy.filter((item1) => {
			// 	const item2 = state.expenses.find((item2) => item2.id === item1.id);
			// 	return JSON.stringify(item1) !== JSON.stringify(item2);
			// }),
			// expenseTotal: state.obj
			// 	? state.expenseTotal + expenseAmount - state.obj.expAmount
			// 	: state.expenseTotal + expenseAmount,
		}));
		// console.log(
		// 	"Value of differentCopy:",
		// 	useExpenseStore.getState().differentValue
		// );
		// console.log("Value of obj:", expenseAmount);
	},
});

const useExpenseStore = create(
	devtools(
		persist(expenseStore, {
			name: "expenses",
		})
	)
);

export default useExpenseStore;
