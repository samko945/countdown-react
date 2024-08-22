import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// storing something outside of the component means all instances use this.
// let timer;
// storing a plain varable in the component means it will be reset on rerender to how it's defined initially
// therefore, useRef can be used inside of the component as the value is not lost on rerender, similar to state. However, unlike state, setting the value does not cause a rerender / reexecution.

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();

	const [bestTime, setBestTime] = useState();
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaining((prev) => prev - 10);
		}, 10);
	}

	if (timeRemaining <= 0) {
		handleStop();
		dialog.current.open();
	}

	function handleStop() {
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleReset() {
		setBestTime((prev) => {
			const currentScore = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
			if (!prev) return currentScore;
			if (currentScore > prev) {
				return currentScore;
			} else {
				return prev;
			}
		});
		setTimeRemaining(targetTime * 1000);
	}

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? "Stop" : "Start Challenge"}
					</button>
				</p>
				{/* <p className={timerIsActive ? "active" : undefined}>Time is running... / Timer inactive</p> */}
				<p>{bestTime ? `Best Score: ${bestTime}` : "Not started."}</p>
			</section>
		</>
	);
}
