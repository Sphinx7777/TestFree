import React from 'react';
import s from './User.module.scss';


export const UserAge =({u, setEditMode, openEditMode, setDeleteUser,
													showNewCalendar, setShowNewCalendar}) => {

	const newDate = new Date().getFullYear().toString();
	const yearOfBirth = u.dateOfBirth.slice(6, 10);
	const age = () => {
		return +newDate - +yearOfBirth
	};


	return (
		<>
			<div className={s.userAge}
					 onDoubleClick={() => !openEditMode && setEditMode(!openEditMode) && setShowNewCalendar(!showNewCalendar)}>
						<span>
						Дата рождения
					</span>
				<span>
						{u.dateOfBirth.slice(0, 10)}
					</span>
				<span>
						Возраст : {age()}
					</span>
				<span className={s.delUser} onClick={() => setDeleteUser(u.id)}>
						Удалить
					</span>
			</div>
		</>
	)
};
