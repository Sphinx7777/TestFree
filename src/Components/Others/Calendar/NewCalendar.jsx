import React from 'react';
import Calendar from 'react-calendar';
import s from './NewCalendar.module.scss';


export const NewCalendar = ({setDateOfBirth, setShowCalendar}) => {

	return (
		<div className={s.calendarWrapper}>
			<div>
				Дата рождения
			</div>
			<Calendar
				maxDate={new Date()}
				onChange={(date) => setDateOfBirth(date.toLocaleString())}
				value={new Date()}
			/>
			<div className={s.closeCalendar}
					 onClick={() => {
						 setShowCalendar(false)
					 }}>Применить
			</div>
			<div className={s.closeCalendar} onClick={() => {
				setDateOfBirth(new Date().toLocaleString());
				setShowCalendar(false)
			}}>Отменить
			</div>
		</div>
	);
};