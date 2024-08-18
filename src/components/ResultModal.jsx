import { forwardRef, useImperativeHandle, useRef } from "react";
// wrap the component - pass it to the forwardRef function
// the component function will now have a second parameter "ref" which forwards the value of the component's "ref" prop key.
// <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
// dialog ref gets forwarded

export default forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
	const dialog = useRef();

	const userLost = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

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
			{userLost && <h2>You lost</h2>}
			{!userLost && <h2>Your Score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
			</p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	);
});
