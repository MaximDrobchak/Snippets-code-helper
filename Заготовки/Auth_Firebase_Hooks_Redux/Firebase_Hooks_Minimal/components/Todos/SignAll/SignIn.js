import React, { useState, Fragment } from 'react';
import { useFormInput } from '../function';
import { auth } from '../../../firebase';

const SignIn = () => {
	const email = useFormInput('');
	const password = useFormInput('');

	const [error, setError] = useState(null);

	const onSubmit = e => {
		e.preventDefault();

		auth.doSignInWithEmailAndPassword(email.value, password.value)
			.then(res => console.log(res))
			.catch(error => setError(error));
	};
	return (
		<Fragment>
			<form onSubmit={e => onSubmit(e)}>
				<h3>Sign In</h3>
				<input type="email" {...email} placeholder="email" />
				<br />
				<input
					type="password"
					{...password}
					placeholder="password"
				/>
				<br />
				<button type="submit">Sign In</button>
			</form>
			{error && <p>{error.message}</p>}
		</Fragment>
	);
};

export default SignIn;
