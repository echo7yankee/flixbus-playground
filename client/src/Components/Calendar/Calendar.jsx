import React from 'react';

//style
import 'react-day-picker/lib/style.css';

//components
import DayPickerInput from 'react-day-picker/DayPickerInput';

export const Calendar = ({ onDayChange, isFirstCalendar, value, placeholder, beforeDate }) => {

    return (
        <DayPickerInput
            placeholder={placeholder}
            value={value}
            dayPickerProps={{
                modifiers: {
                    disabled: [
                        {
                            before: beforeDate || new Date()
                        }
                    ]
                }
            }}
            onDayChange={(day, modifiers) => onDayChange(day, modifiers, isFirstCalendar)} />
    )
}
