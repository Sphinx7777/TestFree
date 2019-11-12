import React from 'react';
import s from './UserForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./../../Validators/ValidatorsComponents";
import {Email, emptyField, phoneNumber, TextAndNumber,} from "../../Validators/CheckComponent";


const UserForm = (props) => {
	const {handleSubmit, pristine, submitting, setUserEditMode, user} = props;

	const userEditMode = () => setUserEditMode(user.id);

	return (
		<div className={s.settingsFormWrapper}>
			<form onSubmit={handleSubmit}>
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
					<div className={s.sendBtnGroup}>
						<button className={s.sendBtn}
										type="submit"
										disabled={pristine || submitting}>
							To send
						</button>
					</div>
				</div>
			</form>
			<span className={s.closeForm}
						onClick={userEditMode}>
				X
			</span>
		</div>
	)
};

export default reduxForm({form: 'settingsForm'})(UserForm)