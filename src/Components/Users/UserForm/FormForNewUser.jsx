import React from 'react';
import s from './FormForNewUser.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./../../Validators/ValidatorsComponents";
import {
	Email, emptyField, maxSize, phoneNumber, TextAndNumber
} from "../../Validators/CheckComponent";
import {NewCalendar} from "../../Others/Calendar/NewCalendar";


const FormForNewUser = (props) => {

	const {
		handleSubmit, pristine, submitting, onSubmitNewUser,
		setDateOfBirth, setShowCalendar, showCalendar, dateOfBirth
	} = props;

	return (
		<div className={s.settingsFormWrapper}>
			<form onSubmit={handleSubmit(onSubmitNewUser)}>
				<div className={s.settingsForm}>
					<Field
						name='name'
						type='text'
						placeholder='Login'
						label='Login'
						component={InputComponent}
						validate={[emptyField, TextAndNumber]}
					/>
					<Field
						name='email'
						type='email'
						placeholder='Email'
						label='Email'
						component={InputComponent}
						validate={[emptyField, Email]}
					/>
					<Field
						name='phone'
						type='tel'
						placeholder='Phone'
						label='Phone'
						component={InputComponent}
						validate={[emptyField, phoneNumber]}
					/>
					<Field
						name='photoUrl'
						type='file'
						value=''
						accept='image/jpeg, image/png,image/jpg'
						label='Photo'
						component={InputComponent}
						validate={[maxSize]}
					/>
					<div onDoubleClick={() => setShowCalendar(true)}>
						<div>Дата рождения</div>
						<div>{dateOfBirth &&
						dateOfBirth.toString().slice(0, 10)}
						</div>
					</div>
					<div className={s.sendBtns}>
						<button className={s.sendBtn}
										type="submit"
										disabled={pristine || submitting}>
							Добавить
						</button>
					</div>
				</div>
			</form>
			{showCalendar && <NewCalendar {...
				{
					setDateOfBirth, dateOfBirth, setShowCalendar
				}}/>}
		</div>
	)
};

export default reduxForm({form: 'settingsFormForNewUser'})(FormForNewUser)