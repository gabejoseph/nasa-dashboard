import React, { useState, useEffect } from 'react';
import { DatePicker } from './components/DatePicker';
import NeoTable from './components/NeoTable';
import { fetchNeoData } from './api/neo';

const App: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [neoObjects, setNeoObjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSort = (key: string) => {
    setNeoObjects(prev =>
      [...prev].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      })
    );
  };

  useEffect(() => {
    const getNeoData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNeoData(date); // pass the selected date
        console.log("Fetched data:", data);
        setNeoObjects(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getNeoData();
  }, [date]);

  return (
    <div>
      <h1>NASA Near Earth Objects Dashboard</h1>
      <DatePicker selectedDate={date} onDateChange={setDate} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <NeoTable neoObjects={neoObjects} onSort={handleSort} />
    </div>
  );
};

export default App;
