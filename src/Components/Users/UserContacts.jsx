import React from 'react';
import s from './User.module.scss';
import mail from './../images/mail.ico'
import phone_2 from './../images/phone_2.png'


export const UserContacts =({u, setUserEditMode}) => {

	return (
		<>
			<div className={s.userContacts}>
				<div className={s.userName}
						 onDoubleClick={() =>  setUserEditMode(u.id)}>
					{u.name}
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
		</>
	)
};
