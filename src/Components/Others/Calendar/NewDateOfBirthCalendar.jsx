import React from 'react';
import Calendar from 'react-calendar';
import s from './NewDateOfBirthCalendar.module.scss';


export const NewDateOfBirthCalendar = (
	{id, setEditMode, setNewDateOfBirth, setDateOfBirth, setShowCalendar}
) => {

	return (
		<div className={s.calendarWrapper}>
			<div>
				<div>
					Дата рождения
				</div>
				<Calendar
					maxDate={new Date()}
					onChange={(date) => setDateOfBirth(date)}
					value={new Date()}
				/>
				<div className={s.closeCalendar} onClick={() => {
					setNewDateOfBirth(id);
					setShowCalendar(false);
				}}>Применить
				</div>
				<div className={s.closeCalendar} onClick={() => {
					setEditMode(false);
					setShowCalendar(false);
				}}>Отменить
				</div>
			</div>
		</div>
	);
};