import React,{useState} from 'react';
import s from './User.module.scss';
import mail from './../images/mail.ico'
import phone_2 from './../images/phone_2.png'
import UploadPhoto from "./UserForm/UploadPhoto";
import SettingsReduxForm from "./UserForm/SettingsReduxForm";
import avatar from "../images/avatar.ico";


export const UserItem = ({u, setShowForm, setToggleShowUserStatus,setUserEditMode,onSubmit,setDeleteUser}) => {
	const [changePhoto,setChangePhoto] = useState(false);

	return (
		<>
			<>
					<div className={s.userPhoto}>
						<img onDoubleClick={()=>setChangePhoto(!changePhoto)} className={s.photo} src={u.photoUrl ? u.photoUrl : avatar} alt=""/>
						<span className={s.closeUserShow} onClick={() => setToggleShowUserStatus(u.id)}>Свернуть</span>
					</div>
					<div className={s.userContacts}>
						<div className={s.userName} onDoubleClick={()=>setUserEditMode(u.id)}>{u.name}</div>
						<a className={s.contactItem}
							 href="mailto:Spamoglot13@gmail.com">
							<img className={s.contactImg} src={mail} alt=""/>
							<span>Spamoglot13@gmail.com</span>
						</a>
						<a className={s.contactItem}
							 href={u.phone}>
							<img className={s.contactImg} src={phone_2} alt=""/>
							<span>{u.phone}</span>
						</a>
					</div>
					<div className={s.userAge}>
						<span>
						Дата рождения
					</span>
						<span>
						{u.dateOfBirth}
					</span>
						<span>
						Возраст : 44
					</span>
						<span className={s.delUser} onClick={() => setDeleteUser(u.id)}>Удалить</span>
					</div>
			</>
			{changePhoto && <UploadPhoto />}
			{u.editMode && <SettingsReduxForm {...{onSubmit}}/>}


		</>
	)


};
