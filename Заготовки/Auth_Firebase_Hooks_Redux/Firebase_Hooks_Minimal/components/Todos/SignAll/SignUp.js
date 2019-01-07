import React, { useState, Fragment } from 'react';
import { useFormInput } from '../function';
import { auth, db } from '../../../firebase';

const SignUp = () => {
	const [error, setError] = useState(null);
	const [isShow, setShow] = useState(false);

	const email = useFormInput('');
	const passwordOne = useFormInput('');
	const passwordTwo = useFormInput('');
	const username = useFormInput('');

	const onClick = () => setShow(!isShow);
	const onSubmit = e => {
		e.preventDefault();

		auth.doCreateUserWithEmailAndPassword(
			email.value,
			passwordOne.value,
		)
			.then(authUser => {
				db.doCreateUser(
					authUser.user.uid,
					username.value,
					email.value,
				)
					.then(res => console.log(res))
					.catch(error => setError(error));
			})
			.then(res => console.log(res))
			.catch(error => setError(error));
	};
	return (
		<Fragment>
			{!isShow ? (
				<button onClick={onClick}>Sign Up</button>
			) : (
				<form onSubmit={e => onSubmit(e)}>
					<h3>Sign Up</h3>
					<input {...username} placeholder="username" />
					<br />
					<input
						{...email}
						type="email"
						placeholder="email"
					/>
					<br />
					<input
						{...passwordOne}
						placeholder="password"
						type="password"
					/>
					<br />
					<input
						{...passwordTwo}
						placeholder="confirmation password"
						type="password"
					/>
					<br />
					<button type="submit">Sign Up</button>
				</form>
			)}
			{error && <p>{error.message}</p>}
		</Fragment>
	);
};

export default SignUp;
