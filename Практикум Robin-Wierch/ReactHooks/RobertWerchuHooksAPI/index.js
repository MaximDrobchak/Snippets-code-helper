import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState({ hits: [] });
	const [query, setQuery] = useState('react');
	const [url, setUrl] = useState(
		'http://hn.algolia.com/api/v1/search?query=react',
	);

	// по этому реализована функция fetchData
	const fetchData = async () => {
		const result = await axios(url);

		setData(result.data);
	};
	// useEffect не подерживает async await
	// так как она возвращает не явное обещание
	useEffect(
		() => {
			fetchData();
		},
		[url],
	);

	return (
		<Fragment>
			<input
				type="text"
				value={query}
				onChange={event => setQuery(event.target.value)}
			/>
			<button
				type="button"
				onClick={() =>
					setUrl(
						`http://hn.algolia.com/api/v1/search?query=${query}`,
					)
				}
			>
				Search
			</button>

			<ul>
				{data.hits.map(item => (
					<li key={item.objectID}>
						<a href={item.url}>{item.title}</a>
					</li>
				))}
			</ul>
		</Fragment>
	);
}
export default App;
