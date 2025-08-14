import React from 'react';

interface NeoObject {
  id: string;
  name: string;
  size: number;
  closeness: number;
  velocity: number;
}

interface NeoTableProps {
  neoObjects: NeoObject[];
  onSort: (key: keyof NeoObject) => void;
}

const NeoTable: React.FC<NeoTableProps> = ({ neoObjects, onSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('name')}>Name</th>
          <th onClick={() => onSort('size')}>Size (meters)</th>
          <th onClick={() => onSort('closeness')}>Closeness to Earth (km)</th>
          <th onClick={() => onSort('velocity')}>Relative Velocity (km/h)</th>
        </tr>
      </thead>
      <tbody>
        {neoObjects.map((neo) => (
          <tr key={neo.id}>
            <td>{neo.name}</td>
            <td>{neo.size}</td>
            <td>{neo.closeness}</td>
            <td>{neo.velocity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NeoTable;
