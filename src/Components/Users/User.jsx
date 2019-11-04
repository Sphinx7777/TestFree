import React, {useState} from 'react';
import s from './User.module.scss';
import {UserItem} from "./UserItem";
import plus from "./../images/plus.ico";
import arrow_left from "./../images/arrow_left.png";
import SettingsReduxFormForNewUser from "./UserForm/FormForNewUser";
import {UserTitle} from "./UserTitle";

export const User =({
											 users, setChangeNewDateOfBirth, openEditMode, setEditMode,
											 setToggleShowUserStatus, setChangeUserContacts, setUserEditMode,
											 setDeleteUser, addNewUser
										 }
) => {

	const [showForm, setShowForm] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [changePhoto, setChangePhoto] = useState(false);
	const [photo, setPhoto] = useState(null);
	const [dateOfBirth, setDateOfBirth] = useState(new Date().toLocaleString());

	const onSubmit = (formData) => {
		setChangeUserContacts(formData)
	};

	const onSubmitNewUser = ({name, email, phone, photoUrl = null}) => {
		const newUser = {
			id: Math.random(),
			name,
			email,
			dateOfBirth,
			photoUrl,
			phone,
			show: false,
			editMode: false
		};
		addNewUser(newUser);
		setShowForm(false);
	};

	return (
		<div className={s.usersWrapper}>
			<div className={s.addUser} onClick={() => {
				setShowForm(!showForm);
				setShowCalendar(true);
				showForm ?
				setEditMode(true)
					:
					setEditMode(false)
			}}><img className={s.addUserImg} src={!showForm ? plus : arrow_left} alt=""/>
				<span>
				{!showForm ? 'Добавить пользователя' : 'Отменить'}
			</span>
			</div>
			{showForm && <SettingsReduxFormForNewUser {...{
				photo, setPhoto, onSubmitNewUser, setDateOfBirth,
				setShowCalendar, showCalendar, dateOfBirth
			}}/>
			}
			{users && users.length && users.map(u =>
				!u.show
					?
					<React.Fragment key={u.id}>
					<UserTitle {...{u,openEditMode, setToggleShowUserStatus}}/>
					</React.Fragment>
					: <div className={s.user} key={u.id}>
						<UserItem  {...{
							u, setEditMode, openEditMode, setChangeNewDateOfBirth,
							setShowForm, changePhoto, setChangePhoto, photo, setPhoto,
							setToggleShowUserStatus, setUserEditMode, onSubmit, setDeleteUser
						}}/>
					</div>
			)}
		</div>
	)
};
