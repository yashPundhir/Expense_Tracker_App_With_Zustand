import React from "react";
import ReactDom from "react-dom";

const ExpenseUpdateModal = ({ open, children, closeModal }) => {
	if (!open) {
		return null;
	}
	return ReactDom.createPortal(
		<>
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50" />
			<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
				<div className="p-10 border-[1.5px] border-sky-600 rounded-3xl ">
					<button
						onClick={closeModal}
						className="border-[1.5px] border-amber-400 rounded-md ml-[430px] px-2.5 py-1 absolute top-[85px] right-[355px] "
					>
						X
					</button>
					{children}
				</div>
			</div>
		</>,
		document.getElementById("portal")
	);
};

export default ExpenseUpdateModal;
