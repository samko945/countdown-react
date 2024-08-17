import { useState, useRef } from "react";

export default function Player() {
	const playerNameInput = useRef();
	const [playerName, setPlayerName] = useState();

	function handleClick() {
		if (playerNameInput.current.value === "") return;
		setPlayerName(playerNameInput.current.value);
		playerNameInput.current.value = "";
	}
	return (
		<section id="player">
			<h2>Welcome {playerName ?? "unknown entity"}</h2>
			<p>
				<input ref={playerNameInput} type="text" placeholder={playerName ?? "unknown entity"} />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
