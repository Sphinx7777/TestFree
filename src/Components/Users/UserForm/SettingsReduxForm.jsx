import React from 'react';
import s from './SettingsReduxform.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./../../Validators/ValidatorsComponents";
import {Email, emptyField, phoneNumber,} from "../../Validators/CheckComponent";


const SettingsReduxForm = (props) => {

	const {handleSubmit, pristine, reset, submitting} = props;
	return (
		<div className={s.settingsFormWrapper}>
			<form  onSubmit={handleSubmit}>
				<div className={s.settingsForm}>
					<Field
						name='name'
						type='text'
						placeholder='Name'
							component={InputComponent}
							label='Name'
							validate={[emptyField]}
						/>
						<Field
							name='email'
							type='email'
							placeholder='Email'
							component={InputComponent}
							label='Email'
							validate={[emptyField,Email]}
						/>
						<Field
							name='phone'
							type='tel'
							placeholder='Phone'
							component={InputComponent}
							label='Phone'
							validate={[emptyField,phoneNumber]}
						/>
						<Field
							name='dateOfBirth'
							type='date'
							component={InputComponent}
							label='Date Of Birth'
							validate={[emptyField]}
						/>
						<div className={s.sendBtns}>
							<button className={s.sendBtn} type="submit" disabled={pristine || submitting}>To send</button>
							<button className={s.sendBtn} disabled={pristine} onClick={reset}>Clear fields</button>
						</div>
					</div>
			</form>
		</div>
	)
};

export default reduxForm({form: 'settingsForm'})(SettingsReduxForm)