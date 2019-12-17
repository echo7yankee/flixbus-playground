import React from 'react';

//style
import 'react-day-picker/lib/style.css';

//components
import DayPickerInput from 'react-day-picker/DayPickerInput';

export const Calendar = ({ onDayChange, isFirstCalendar, today }) => {
    return (
        <DayPickerInput
            value={today}
            onDayChange={day => onDayChange(day, isFirstCalendar)} />
    )
}
