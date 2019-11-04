import React from 'react';
import s from './App.module.scss';
import {connect} from "react-redux";
import {
	setToggleShowUserStatus, setUserEditMode, setDeleteUser, addNewUser,
	setChangeUserContacts, setChangeNewDateOfBirth, setEditMode
}
	from "./Components/Redux/usersReducer";
import {User} from "./Components/Users/User";

class App extends React.PureComponent {

	render() {
		const {
			users, setEditMode, openEditMode, setChangeNewDateOfBirth,
			setToggleShowUserStatus, setChangeUserContacts, setUserEditMode,
			setDeleteUser, addNewUser
		} = this.props;

		return (
			<div className={s.app}>
				<User {...{
					users, setEditMode, openEditMode, setChangeNewDateOfBirth,
					setToggleShowUserStatus, setChangeUserContacts, setUserEditMode,
					setDeleteUser, addNewUser
				}}/>
			</div>
		);
	}
}

export default connect(state => ({
	users: state.usersPage.users,
	openEditMode: state.usersPage.openEditMode,
}), {
	setToggleShowUserStatus, setChangeUserContacts, setEditMode,
	addNewUser, setUserEditMode, setDeleteUser, setChangeNewDateOfBirth
})(App);
