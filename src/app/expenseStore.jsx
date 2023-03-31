import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const expenseStore = (set) => ({
	expenses: [],
	expenseTotal: 0,
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
});

const useExpenseStore = create(
	devtools(
		persist(expenseStore, {
			name: "expenses",
		})
	)
);

export default useExpenseStore;
