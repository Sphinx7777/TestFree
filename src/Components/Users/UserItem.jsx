import React, {useState} from 'react';
import s from './User.module.scss';
import UploadPhoto from "./UserForm/UploadPhoto";
import SettingsReduxForm from "./UserForm/UserForm";
import avatar from "../images/avatar.ico";
import {NewDateOfBirthCalendar} from "../Others/Calendar/NewDateOfBirthCalendar";
import {UserContacts} from "./UserContacts";
import {UserAge} from "./UserAge";


export const UserItem = ({
													 user, setEditMode, openEditMode, setChangePhoto, changePhoto, photo,
													 setChangeNewDateOfBirth, setPhoto, setToggleShowUserStatus,
													 setUserEditMode, onSubmit, setDeleteUser
												 }) => {

	const [newDate, setNewDate] = useState(new Date());
	const [showNewCalendar, setShowNewCalendar] = useState(false);

	const setNewDateOfBirth = (id) => {
		setChangeNewDateOfBirth({id, newDate})
	};

	return (
		<>
			<>
				<div className={s.userPhoto}>
					<img onDoubleClick={() => !openEditMode && setChangePhoto(!changePhoto)} className={s.photo}
							 title='DoubleClick for edit'
							 src={user.photoUrl && typeof user.photoUrl !== "object" ? user.photoUrl : avatar} alt=""/>
					<span className={s.closeUserShow} onClick={() => !openEditMode && setToggleShowUserStatus(user.id)}>
						Свернуть
					</span>
				</div>
				<UserContacts {...{user, openEditMode, setUserEditMode}}/>
				<UserAge {...{user, setEditMode, openEditMode, setDeleteUser, showNewCalendar, setShowNewCalendar}} />
			</>
			{changePhoto && <UploadPhoto {...{photo, setPhoto, openEditMode, setChangePhoto}}/>}
			{showNewCalendar &&
			<NewDateOfBirthCalendar {...{
				id: user.id,
				setEditMode,
				setNewDateOfBirth,
				setShowCalendar: setShowNewCalendar,
				setDateOfBirth: setNewDate
			}}/>
			}
			{user.editMode && <SettingsReduxForm user={user} setUserEditMode={setUserEditMode} onSubmit={onSubmit}/>}
		</>
	)
};
