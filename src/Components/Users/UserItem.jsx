import React, {useState} from 'react';
import s from './User.module.scss';
import UploadPhoto from "./UserForm/UploadPhoto";
import SettingsReduxForm from "./UserForm/UserForm";
import avatar from "../images/avatar.ico";
import {NewDateOfBirthCalendar} from "../Others/Calendar/NewDateOfBirthCalendar";
import {UserContacts} from "./UserContacts";
import {UserAge} from "./UserAge";


export const UserItem =({
													 u, setEditMode, openEditMode,  setChangePhoto,changePhoto, photo,
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
							 src={u.photoUrl && typeof u.photoUrl !== "object" ? u.photoUrl : avatar} alt=""/>
					<span className={s.closeUserShow} onClick={() => !openEditMode && setToggleShowUserStatus(u.id)}>
						Свернуть
					</span>
				</div>
				<UserContacts {...{u, openEditMode, setUserEditMode}}/>
				<UserAge {...{u, setEditMode, openEditMode, setDeleteUser,showNewCalendar, setShowNewCalendar}} />
				</>
			{changePhoto && <UploadPhoto {...{photo, setPhoto, openEditMode, setChangePhoto}}/>}
			{showNewCalendar &&
			<NewDateOfBirthCalendar
				setEditMode={setEditMode}
				id={u.id}
				setNewDateOfBirth={setNewDateOfBirth}
				setShowCalendar={setShowNewCalendar}
				setDateOfBirth={setNewDate}/>}
			{u.editMode && <SettingsReduxForm u={u} setUserEditMode={setUserEditMode} onSubmit={onSubmit}/>}
		</>
	)
};
