import React, { useState } from 'react';

const DatePicker: React.FC<{ onDateChange: (date: string) => void }> = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setSelectedDate(date);
        onDateChange(date);
    };

    return (
        <div>
            <label htmlFor="date-picker">Select Date:</label>
            <input
                type="date"
                id="date-picker"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DatePicker;