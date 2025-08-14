import React from 'react';

type DatePickerProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => (
  <input
    type="date"
    value={selectedDate}
    onChange={e => onDateChange(e.target.value)}
  />
);
