import React from 'react';
import Calendar from 'react-calendar';
import s from './NewCalendar.module.scss';


export const NewCalendar = (
	{
		setDateOfBirth, setShowCalendar
	}) => {

	const setNewDate = () => {
		setDateOfBirth(new Date().toLocaleString());
		setTimeout(setShowCalendar(false),0);
	};
	const onChange = date => setDateOfBirth(date.toLocaleString());

	const closeCalendar = () => setShowCalendar(false);

	return (
		<div className={s.calendarWrapper}>
			<div>
				Дата рождения
			</div>
			<Calendar
				maxDate={new Date()}
				onChange={onChange}
				value={new Date()}
			/>
			<div className={s.closeCalendar}
					 onClick={closeCalendar}>Применить
			</div>
			<div className={s.closeCalendar}
					 onClick={setNewDate}>Отменить
			</div>
		</div>
	);
};