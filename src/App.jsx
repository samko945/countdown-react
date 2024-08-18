import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="Easy" targetTime={1} />
				<TimerChallenge title="Normal" targetTime={5} />
				<TimerChallenge title="Hard" targetTime={10} />
				<TimerChallenge title="Master" targetTime={18.4} />
			</div>
		</>
	);
}

export default App;
