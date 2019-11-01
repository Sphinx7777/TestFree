import React from 'react';
import s from './SettingsReduxform.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./../../Validators/ValidatorsComponents";
import {Email, emptyField, phoneNumber, TextAndNumber,} from "../../Validators/CheckComponent";


const SettingsReduxForm = (props) => {
	const {handleSubmit, pristine, submitting, setUserEditMode, u} = props;

	return (
		<div className={s.settingsFormWrapper}>
			<form onSubmit={handleSubmit}>
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
					<div className={s.sendBtns}>
						<button className={s.sendBtn} type="submit" disabled={pristine || submitting}>To send</button>
					</div>
				</div>
			</form>
			<span className={s.closeForm} onClick={() => setUserEditMode(u.id)}>X</span>
		</div>
	)
};

export default reduxForm({form: 'settingsForm'})(SettingsReduxForm)