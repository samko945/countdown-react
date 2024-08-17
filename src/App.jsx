import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="Easy" targetTime={1} />
				<TimerChallenge title="Not Easy" targetTime={5} />
				<TimerChallenge title="Normal" targetTime={10} />
				<TimerChallenge title="Expert" targetTime={15} />
			</div>
		</>
	);
}

export default App;
