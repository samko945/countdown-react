import { forwardRef, useImperativeHandle, useRef } from "react";
// wrap the component - pass it to the forwardRef function
// the component function will now have a second parameter "ref" which forwards the value of the component's "ref" prop key.
// <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
// dialog ref gets forwarded

export default forwardRef(function ResultModal({ result, targetTime }, ref) {
	const dialog = useRef();
	// define properties and methods that should be accessible on this component from outside the component
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});
	return (
		<dialog ref={dialog} className="result-modal">
			<h2>You {result}</h2>
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer with <strong>X seconds left.</strong>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
});
