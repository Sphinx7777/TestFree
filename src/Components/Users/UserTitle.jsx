import React from 'react';
import s from './User.module.scss';
import avatar from "./../images/avatar.ico";

export const UserTitle = ({user, openEditMode, setToggleShowUserStatus}) => {

	const toggleShowTitle = () => {
		!openEditMode && setToggleShowUserStatus(user.id)
	};

	return (
		<div className={s.userTitle}
				 onClick={toggleShowTitle}>
			<img className={s.userTitlePhoto}
					 src={user.photoUrl && typeof user.photoUrl !== "object"
						 ?
						 user.photoUrl
						 : avatar}
					 alt=""/>
			<div className={s.userTitleName}>
				{user.name}
			</div>
		</div>
	)
};
