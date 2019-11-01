import React, {Component} from 'react';
import s from './App.module.scss';
import {Users} from "./Components/Users/Users";
import {connect} from "react-redux";
import {setToggleShowUserStatus,setUserEditMode,setDeleteUser} from "./Components/Redux/usersReducer";

class App extends Component {
	render() {
		return (
			<div className={s.app}>
				<Users
					users={this.props.users}
					setToggleShowUserStatus={this.props.setToggleShowUserStatus}
					setUserEditMode={this.props.setUserEditMode}
					setDeleteUser={this.props.setDeleteUser}
				/>
			</div>
		);
	}
}

export default connect(state=>({users:state.usersPage.users}),{setToggleShowUserStatus,setUserEditMode,setDeleteUser})(App);
