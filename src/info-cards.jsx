import React from 'react';
import { StudentData } from './student-data';

export const InforCards = ({ information }) => {
  return (
    <div>
      {information.map((student) => {
        return <StudentData studentInfo={student} key={student?.id} />;
      })}
    </div>
  );
};
