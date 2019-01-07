import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	position: absolute;
	display: block;
	width: 400px;
	background: red;
	text-align: center;
	color: blue;
`;
const Notifications = ({ notifications }) => (
	<div>
		{notifications.map(note => (
			<Div key={note}>{note}</Div>
		))}
	</div>
);

export default Notifications;
