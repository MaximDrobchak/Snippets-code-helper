import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import './style.scss';
const Landing = () => {
	return (
		<div className="LandingBar">
			<span>Daily Coding Problem</span>
			<ul>
				<li>
					<Link to={routes.MICROSOFT}>Microsoft</Link>
				</li>
				<li>
					<Link to={routes.FACEBOOK}>Facebook</Link>
				</li>
				<li>
					<Link to={routes.GOOGLE}>Google</Link>
				</li>
			</ul>
			<hr />
			<GetUsername />
		</div>
	);
};
class GetUsername extends Component {
	state = { username: null };

	componentDidMount() {
		fetch('http://localhost:8080/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({ username: user.username }));
	}

	render() {
		const { username } = this.state;
		return (
			<div>
				{username ? (
					<h1>{`Hello ${username}`}</h1>
				) : (
					<h1>Loading.. please wait!</h1>
				)}
			</div>
		);
	}
}
export default Landing;
