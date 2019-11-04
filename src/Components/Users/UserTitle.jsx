import React from 'react';
import s from './User.module.scss';
import avatar from "./../images/avatar.ico";

export const UserTitle =({u,openEditMode, setToggleShowUserStatus}) => {

	return (
		<div className={s.userTitle}
					 onClick={() => !openEditMode && setToggleShowUserStatus(u.id)}>
				<img className={s.userTitlePhoto} src={u.photoUrl && typeof u.photoUrl !== "object" ? u.photoUrl : avatar}
						 alt=""/>
				<div className={s.userTitleName}>
					{u.name}
				</div>
			</div>
	)
};
