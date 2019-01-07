import React, { useState, useEffect } from 'react';
import { auth, firebase } from '../../firebase';
import PasswordForget from './SignAll/PasswordForget';
import SignIn from './SignAll/SignIn';
import SignUp from './SignAll/SignUp';

const App = () => {
	const [authUser, setAuthUser] = useState(null);
	useEffect(
		() => {
			firebase.auth.onAuthStateChanged(authUser => {
				setAuthUser(authUser);
				localStorage.setItem(
					'authUser',
					JSON.stringify(authUser),
				);
			});
		},
		[authUser],
	);
	return (
		<div>
			{authUser ? (
				<div>
					<h1>{authUser.email}</h1>
					<button onClick={auth.doSignOut}>SignOut</button>

					<hr />
					<PasswordForget />
				</div>
			) : (
				<div>
					<SignUp />
					<hr />
					<SignIn />
					<hr />
				</div>
			)}
		</div>
	);
};

export default App;
