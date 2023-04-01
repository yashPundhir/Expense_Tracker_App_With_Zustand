import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

function App() {
	return (
		<div className="flex flex-col justify-center items-center">
			<ExpenseForm />
			<h1 className="mt-16 text-[45px] font-semibold">My Expenses</h1>
			<ExpenseList />
			<TotalExpense />
		</div>
	);
}

export default App;
