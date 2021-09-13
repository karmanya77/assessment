import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InforCards } from './info-cards';

import './student-data.css';

export const Homepage = () => {
  const [windowHeight, setWindowHeight] = useState();
  const handleResize = () => setWindowHeight(window.innerHeight - 200);
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [query, setQuery] = useState('');
  const [studentsArray, setStudentsArray] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(
      'https://api.hatchways.io/assessment/students'
    );
    setStudentsArray(data.data.students);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const queryData = () => {
    const filteredData = studentsArray.filter((student) => {
      return student.firstName.toLowerCase().startsWith(query);
    });
    if (filteredData.length > 0) return filteredData;
    // matched students
    else if (query.length === 0) return studentsArray;
    //all students
    else return;
  };

  return (
    <div className="student-container" style={{ height: windowHeight }}>
      <input onChange={handleChange} />
      <InforCards information={queryData()} />
    </div>
  );
};
