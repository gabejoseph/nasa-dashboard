import React from 'react';

interface SortControlsProps {
    onSortChange: (sortBy: string) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ onSortChange }) => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSortChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="size">Size</option>
                <option value="closeness">Closeness to Earth</option>
                <option value="velocity">Relative Velocity</option>
            </select>
        </div>
    );
};

export default SortControls;