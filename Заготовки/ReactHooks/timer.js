import React, { useState, useEffect } from 'react';

export default function App() {
	const [isOn, setIsOn] = useState(false);
	const [timer, setTimer] = useState(0);

	useEffect(
		() => {
			let interval;

			if (isOn) {
				interval = setInterval(
					() => setTimer(timer => timer + 1),
					1000,
				);
			}

			return () => clearInterval(interval);
		},
		[isOn],
	);

	return (
		<div>
			<h1>{timer}</h1>
			{!isOn && (
				<button type="button" onClick={() => setIsOn(true)}>
					Start
				</button>
			)}

			{isOn && (
				<button type="button" onClick={() => setIsOn(false)}>
					Stop
				</button>
			)}
		</div>
	);
}
