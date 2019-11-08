import React from 'react';
import s from './User.module.scss';
import mail from './../images/mail.ico'
import phone_2 from './../images/phone_2.png'


export const UserContacts =({user, setUserEditMode}) => {

	return (
		<>
			<div className={s.userContacts}>
				<div className={s.userName} title='DoubleClick for edit'
						 onDoubleClick={() =>  setUserEditMode(user.id)}>
					{user.name}
				</div>
				<a className={s.contactItem}
					 href={`mailto:${user.email}`}>
					<img className={s.contactImg} src={mail} alt=""/>
					<span>{user.email}</span>
				</a>
				<a className={s.contactItem}
					 href={user.phone}>
					<img className={s.contactImg} src={phone_2} alt=""/>
					<span>{user.phone}</span>
				</a>
			</div>
		</>
	)
};
