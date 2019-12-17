import React from 'react';

//style
import 'react-day-picker/lib/style.css';

//components
import DayPickerInput from 'react-day-picker/DayPickerInput';

export const Calendar = ({ onDayChange, isFirstCalendar, today, beforeDate }) => {

    return (
        <DayPickerInput
            value={today}
            dayPickerProps={{
                modifiers: {
                    disabled: [
                        {
                            before: beforeDate
                        }
                    ]
                }
            }}
            onDayChange={(day, modifiers) => onDayChange(day, modifiers, isFirstCalendar)} />
    )
}
