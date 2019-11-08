import React from 'react';
import s from './User.module.scss';


export const UserAge =({user, setEditMode, openEditMode, setDeleteUser,
													showNewCalendar, setShowNewCalendar}) => {

	const newDate = new Date().getFullYear().toString();
	const yearOfBirth = user.dateOfBirth.slice(6, 10);
	const age = () => {
		return +newDate - +yearOfBirth
	};


	return (
		<>
			<div className={s.userAge} title='DoubleClick for edit'
					 onDoubleClick={() => !openEditMode && setEditMode(!openEditMode) && setShowNewCalendar(!showNewCalendar)}>
						<span>
						Дата рождения
					</span>
				<span>
						{user.dateOfBirth.slice(0, 10)}
					</span>
				<span>
						Возраст : {age()}
					</span>
				<span className={s.delUser} onClick={() => setDeleteUser(user.id)}>
						Удалить
					</span>
			</div>
		</>
	)
};
