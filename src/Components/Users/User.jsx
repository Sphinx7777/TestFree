import React, {useState} from 'react';
import s from './User.module.scss';
import {UserItem} from "./UserItem";
import plus from "./../images/plus.ico";
import arrow_left from "./../images/arrow_left.png";
import FormForNewUser from "./UserForm/FormForNewUser";
import {UserTitle} from "./UserTitle";
import {Header} from "../Header/Header";

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

	const setFormEditMode = () => {
		setShowForm(!showForm);
		setShowCalendar(true);
		showForm ?
			setEditMode(true)
			:
			setEditMode(false);
	};


	return (
		<>
			<Header/>
			<div className={s.usersWrapper}>
				<div className={s.addUser} onClick={setFormEditMode}>
					<img className={s.addUserImg}
							 src={!showForm ? plus : arrow_left} alt=""
					/>
					<span>
				{!showForm ? 'Добавить пользователя' : 'Отменить'}
			</span>
				</div>
				{showForm && <FormForNewUser {...{
					onSubmitNewUser, setDateOfBirth,
					setShowCalendar, showCalendar, dateOfBirth
				}}/>
				}
				{users && users.length && users.map(user =>
					!user.show
						?
						<React.Fragment key={user.id}>
							<UserTitle {...{user, openEditMode, setToggleShowUserStatus}}/>
						</React.Fragment>
						: <div className={s.user} key={user.id}>
							<UserItem  {...{
								user, setEditMode, openEditMode, setChangeNewDateOfBirth,
								setShowForm, changePhoto, setChangePhoto, photo, setPhoto,
								setToggleShowUserStatus, setUserEditMode, onSubmit, setDeleteUser
							}}/>
						</div>
				)}
			</div>

		</>
	)
};
