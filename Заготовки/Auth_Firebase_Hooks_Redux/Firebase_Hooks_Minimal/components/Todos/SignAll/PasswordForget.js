import React, { useState, Fragment } from 'react';
import { auth } from '../../../firebase';
import { useFormInput } from '../function';

import PasswordChange from './PasswordChange';

const PasswordForget = () => {
	const [isShow, setShow] = useState(false);
	const [error, setError] = useState(null);
	const [newPass, setnewPass] = useState(null);
	const email = useFormInput('');

	const onClick = () => setShow(!isShow);

	const onSubmit = e => {
		e.preventDefault();
		auth.doPasswordReset(email.value)
			.then(res => console.log(res))
			.catch(error => setError(error));
		setnewPass(true);
	};
	return (
		<Fragment>
			{newPass ? (
				<PasswordChange />
			) : !isShow ? (
				<button onClick={onClick}>Password Forget</button>
			) : (
				<form onSubmit={e => onSubmit(e)}>
					<h3>Password Forget</h3>
					<input
						{...email}
						type="email"
						placeholder="email"
					/>
					<button type="submit">Password Forget</button>
				</form>
			)}
			{error && error.message}
		</Fragment>
	);
};

export default PasswordForget;
