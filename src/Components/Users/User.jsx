import React, {useState} from 'react';
import s from './User.module.scss';
import {UserItem} from "./UserItem";
import plus from "./../images/plus.ico";
import avatar from "./../images/avatar.ico";
import arrow_left from "./../images/arrow_left.png";
import SettingsReduxFormForNewUser from "./UserForm/SettingsReduxFormForNewUser";

export const User = ({
											 users, setChangeNewDateOfBirth, openEditMode, setEditMode,
											 setToggleShowUserStatus, setChangeUserContacts, setUserEditMode,
											 setDeleteUser, addNewUser
										 }
) => {

	const [showForm, setShowForm] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [changePhoto, setChangePhoto] = useState(false);
	const [photo, setPhoto] = useState(null);
	let [dateOfBirth, setDateOfBirth] = useState(new Date());
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
				setEditMode(true)
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
			{users.map(u =>
				!u.show
					? <div key={u.id} className={s.userTitle}
								 onClick={() =>!openEditMode &&  setToggleShowUserStatus(u.id)}>
						<img className={s.userTitlePhoto} src={u.photoUrl && typeof u.photoUrl !== "object" ? u.photoUrl : avatar}
								 alt=""/>
						<div className={s.userTitleName}>
							{u.name}
						</div>
					</div>
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
