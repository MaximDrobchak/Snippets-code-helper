import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as routes from '../../constants/routes';
import { firebase } from '../../firebase';

const withAuthorization = condition => Component => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			firebase.auth.onAuthStateChanged(authUser => {
				if (!condition(authUser)) {
					this.props.history.push(routes.SIGN_IN);
				}
			});
		}

		render() {
			return this.props.authUser ? <Component /> : null;
		}
	}

	const mapStateToProps = state => ({
		authUser: state.sessionState.authUser,
	});

	return compose(
		withRouter,
		connect(mapStateToProps),
	)(WithAuthorization);
};

export default withAuthorization;
