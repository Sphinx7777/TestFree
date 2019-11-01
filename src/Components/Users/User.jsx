import React,{useState} from 'react';
import s from './User.module.scss';
import {UserItem} from "./UserItem";
import plus from "./../images/plus.ico";
import avatar from "./../images/avatar.ico";
import arrow_left from "./../images/arrow_left.png";
import SettingsReduxFormForNewUser from "./UserForm/SettingsReduxFormForNewUser";

export const User = ({users,setToggleShowUserStatus,setUserEditMode,setDeleteUser}) => {
	const [showForm, setShowForm] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	let [dateOfBirth, setDateOfBirth] = useState(new Date());
	const onSubmit = (formData)=> {
	console.log(formData)
};
	const onSubmitNewUser = (formData)=> {
		console.log(formData)
	};
	return (
		<div className={s.usersWrapper}>
			<div className={s.addUser} onClick={()=>{
				setShowForm(!showForm);
				setShowCalendar(true);
			}}><img className={s.addUserImg} src={!showForm ? plus : arrow_left} alt=""/><span>{!showForm ?  'Добавить пользователя' : 'Отменить'}</span></div>
			{showForm &&  <SettingsReduxFormForNewUser {...{onSubmitNewUser,setDateOfBirth,setShowCalendar,showCalendar,dateOfBirth}}/>}
			{users.map(u =>
			!u.show
				? <div key={u.id} className={s.userTitle} onClick={()=>setToggleShowUserStatus(u.id)}>
					<img className={s.userTitlePhoto} src={u.photoUrl ? u.photoUrl : avatar} alt=""/>
					<div className={s.userTitleName}>{u.name}</div>
					</div>
				: <div className={s.user} key={u.id} >
					<UserItem  {...{u, setShowForm, setToggleShowUserStatus,setUserEditMode,onSubmit,setDeleteUser}}/>
				</div>
			)}
		</div>
	)
};
