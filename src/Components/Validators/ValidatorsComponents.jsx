import React from "react";
import s from './ValidatorsComponents.module.scss';


export const InputComponent = (
	{
		input, type, placeholder, value, accept, child,
		label, maxLength, autoFocus,
		meta: {error, warning, touched}
	}) => {

	return (
		<>
			<div
				className={s.inputLabel + ' ' + (touched && error ? s.errorInputLabel : '')}>
				{touched && error ? error : label}
			</div>
			<input className={s.inputField + ' ' + (touched && error ? s.errorInputField : '') + ' ' + s.reg}
						 {...input}
						 accept={accept}
						 value={value}
						 autoFocus={autoFocus}
						 placeholder={touched && error ? error : placeholder}
						 maxLength={maxLength}
						 type={type}/>{child}
			{/*{touched &&
			((error &&
					<div className={className}>
						<span className={s.error}>{error}</span>
					</div>
				) ||
				(warning && <div className={s.inputWarning}>{warning}</div>))}*/}
		</>
	)
};

