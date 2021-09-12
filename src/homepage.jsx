import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StudentData } from './student-data';
import './student-data.css';

export const Homepage = () => {
  const [studentsArray, setStudentsArray] = useState([]);
  const [windowHeight, setWindowHeight] = useState();
  const [query, setQuery] = useState('');
  const getData = async () => {
    const data = await axios.get(
      'https://api.hatchways.io/assessment/students'
    );
    setStudentsArray(data.data.students);
  };

  const handleResize = () => setWindowHeight(window.innerHeight - 100);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    getData();
  }, []);

  let mockData = [];
  const checkWithResponse = (value) => {
    for (let i = 0; i < studentsArray.length; i++) {
      for (let prop in studentsArray[i]) {
        if (prop === 'firstName') {
          if (studentsArray[i][prop].startsWith(value.toUpperCase())) {
            mockData.push(studentsArray[i]);
          }
        }
      }
    }
    setStudentsArray(mockData);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    query.length > 0 && checkWithResponse(query);
  };

  return (
    <div className="student-container" style={{ height: windowHeight }}>
      <input onChange={handleChange} />
      {studentsArray.map((student) => {
        return <StudentData studentInfo={student} key={student?.id} />;
      })}
    </div>
  );
};
