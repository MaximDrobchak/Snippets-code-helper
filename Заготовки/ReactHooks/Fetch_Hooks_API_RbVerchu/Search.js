import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [query, setQuery] = useState('redux');
	return (
		<ul>
			<input
				type="text"
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<button>Search</button>
		</ul>
	);
}

export default App;
