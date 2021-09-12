import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StudentData } from './student-data';
import './student-data.css';

export const Homepage = () => {
  const [studentsArray, setStudentsArray] = useState([]);
  const [windowHeight, setWindowHeight] = useState();
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
  return (
    <div className="student-container" style={{ height: windowHeight }}>
      {studentsArray.map((student) => {
        return <StudentData studentInfo={student} key={student?.id} />;
      })}
    </div>
  );
};
