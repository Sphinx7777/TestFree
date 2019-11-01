import React from 'react';
import {User} from "./User";





export const Users = ({users,setToggleShowUserStatus,setUserEditMode,setDeleteUser}) => {




	return (
		<>
			<User {...{users,setToggleShowUserStatus,setUserEditMode,setDeleteUser}}/>



		</>
	);
};
