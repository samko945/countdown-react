import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// storing something outside of the component means all instances use this.
// let timer;
// storing a plain varable in the component means it will be reset on rerender to how it's defined initially
// therefore, useRef can be used inside of the component as the value is not lost on rerender, similar to state. However, unlike state, setting the value does not cause a rerender / reexecution.

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();

	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStart() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			dialog.current.showModal();
		}, targetTime * 1000);

		setTimerStarted(true);
	}

	function handleStop() {
		clearTimeout(timer.current);
		setTimerStarted(false);
	}

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} result="lost" />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerStarted ? handleStop : handleStart}>
						{timerStarted ? "Stop" : "Start Challenge"}
					</button>
				</p>
				<p className={timerStarted ? "active" : undefined}>Time is running... / Timer inactive</p>
			</section>
		</>
	);
}
