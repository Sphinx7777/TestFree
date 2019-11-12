import React from 'react';
import Calendar from 'react-calendar';
import s from './NewDateOfBirthCalendar.module.scss';


export const NewDateOfBirthCalendar = (
	{
		id, setEditMode, setNewDateOfBirth, setDateOfBirth, setShowCalendar
	}) => {

	const onChange = date => setDateOfBirth(date.toLocaleString());

	const setNewDateAndClose = () => {
		setNewDateOfBirth(id);
		setTimeout(setShowCalendar(false), 0);
	};

	const closeEditModeAndCalendar = () => {
		setEditMode(false);
		setShowCalendar(false);
	};

	return (
		<div className={s.calendarWrapper}>
			<div>
				<div>
					Дата рождения
				</div>
				<Calendar
					maxDate={new Date()}
					onChange={onChange}
					value={new Date()}
				/>
				<div className={s.closeCalendar}
						 onClick={setNewDateAndClose}>
					Применить
				</div>
				<div className={s.closeCalendar}
						 onClick={closeEditModeAndCalendar}>
					Отменить
				</div>
			</div>
		</div>
	);
};