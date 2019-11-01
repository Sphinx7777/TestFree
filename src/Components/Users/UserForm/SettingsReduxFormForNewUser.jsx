import React from 'react';
import s from './SettingsReduxFormForNewUser.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./../../Validators/ValidatorsComponents";
import {Email, emptyField, maxSize, phoneNumber, TextAndNumber} from "../../Validators/CheckComponent";
import {NewCalendar} from "../../Others/Calendar/NewCalendar";


const SettingsReduxFormForNewUser = (props) => {

	const {handleSubmit, pristine, submitting, onSubmitNewUser, setDateOfBirth, setShowCalendar, showCalendar, dateOfBirth} = props;
	const dateBirth = dateOfBirth.toLocaleDateString();
	return (
		<div className={s.settingsFormWrapper}>

			<form onSubmit={handleSubmit(onSubmitNewUser)}>
				<div className={s.settingsForm}>
					<Field
						name='name'
						type='text'
						placeholder='Login'
						component={InputComponent}
						label='Login'
						validate={[emptyField, TextAndNumber]}
					/>
					<Field
						name='email'
						type='email'
						placeholder='Email'
						component={InputComponent}
						label='Email'
						validate={[emptyField, Email]}
					/>
					<Field
						name='phone'
						type='tel'
						placeholder='Phone'
						component={InputComponent}
						label='Phone'
						validate={[emptyField, phoneNumber]}
					/>
					<Field
						name='photoUrl'
						type='file'
						value=''
						accept='image/jpeg, image/png,image/jpg'
						component={InputComponent}
						label='Photo'
						validate={[maxSize]}
					/>
					<div onDoubleClick={() => setShowCalendar(true)}>
						<div>Дата рождения</div>
						<div>{dateBirth}</div>
					</div>
					<div className={s.sendBtns}>
						<button className={s.sendBtn} type="submit" disabled={pristine || submitting}>Добавить</button>
					</div>
				</div>
			</form>
			{showCalendar && <NewCalendar {...{setDateOfBirth, dateOfBirth, setShowCalendar}}/>}
		</div>
	)
};

export default reduxForm({form: 'settingsFormForNewUser'})(SettingsReduxFormForNewUser)