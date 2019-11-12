import React from 'react';
import s from './User.module.scss';


export const UserAge = (
	{
		user, setEditMode, openEditMode, setDeleteUser,
		showNewCalendar, setShowNewCalendar
	}) => {

	const newDate = new Date().getFullYear().toString();
	const yearOfBirth = user.dateOfBirth.slice(6, 10);
	const age = () => {
		return +newDate - +yearOfBirth
	};

	const toggleShowNewCalendar = () => {
		!openEditMode && 
		setEditMode(!openEditMode) && 
		setShowNewCalendar(!showNewCalendar)
	};
	
	const deleteUser = () => setDeleteUser(user.id);

	return (
		<>
			<div className={s.userAge} 
					 title='DoubleClick for edit'
					 onDoubleClick={toggleShowNewCalendar}>
						<span>
						Дата рождения
					</span>
				<span>
						{user.dateOfBirth.slice(0, 10)}
					</span>
				<span>
						Возраст : {age()}
					</span>
				<span className={s.delUser} 
							onClick={deleteUser}>
						Удалить
					</span>
			</div>
		</>
	)
};
