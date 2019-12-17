import React from 'react';

//style
import 'react-day-picker/lib/style.css';

//components
import DayPickerInput from 'react-day-picker/DayPickerInput';

export const Calendar = ({ onDayChange, isFirstCalendar }) => {
    return (
        <DayPickerInput onDayChange={day => onDayChange(day, isFirstCalendar)} />
    )
}
