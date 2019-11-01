import React, {useState} from 'react';
import s from './User.module.scss';
import mail from './../images/mail.ico'
import phone_2 from './../images/phone_2.png'
import UploadPhoto from "./UserForm/UploadPhoto";
import SettingsReduxForm from "./UserForm/SettingsReduxForm";
import avatar from "../images/avatar.ico";
import {NewDateOfBirthCalendar} from "../Others/Calendar/NewDateOfBirthCalendar";


export const UserItem = ({
													 u, setEditMode, openEditMode, changePhoto, setChangePhoto, photo,
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
					<span className={s.closeUserShow} onClick={() =>!openEditMode &&  setToggleShowUserStatus(u.id)}>
						Свернуть
					</span>
				</div>
				<div className={s.userContacts}>
					<div className={s.userName}
							 onDoubleClick={() => !openEditMode && setUserEditMode(u.id)}>{u.name}
					</div>
					<a className={s.contactItem}
						 href={`mailto:${u.email}`}>
						<img className={s.contactImg} src={mail} alt=""/>
						<span>{u.email}</span>
					</a>
					<a className={s.contactItem}
						 href={u.phone}>
						<img className={s.contactImg} src={phone_2} alt=""/>
						<span>{u.phone}</span>
					</a>
				</div>
				<div className={s.userAge}
						 onDoubleClick={() => !openEditMode && setEditMode(!openEditMode) && setShowNewCalendar(!showNewCalendar)}>
						<span>
						Дата рождения
					</span>
					<span>
						{u.dateOfBirth.toLocaleDateString()}
					</span>
					<span>
						Возраст : {Number(new Date().getFullYear()) - Number(u.dateOfBirth.getFullYear())}
					</span>
					<span className={s.delUser} onClick={() => setDeleteUser(u.id)}>
						Удалить
					</span>
				</div>
			</>
			{changePhoto && <UploadPhoto {...{photo, setPhoto}}/>}
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
