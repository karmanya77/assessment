import React from 'react';
import { sum } from 'lodash';
import './student-data.css';

export const StudentData = ({ studentInfo }) => {
  const { firstName, email, skill, grades, company, pic } = studentInfo;

  let total = [];

  for (let i = 0; i < Object.keys(grades).length; i++) {
    total.push(parseInt(grades[i]));
  }
  const average = sum(total) / Object.keys(grades).length;

  return (
    <div style={{ padding: '24px' }} className="student-card">
      <img className="glyph" src={pic} />
      <div>
        <h3>{firstName}</h3>
        <span>Email : {email}</span>
        <br />
        <br />
        <span>Company : {company}</span>
        <br />
        <br />
        <span>Skill : {skill}</span>
        <br />
        <br />
        <span>Average : {average && average}%</span>
      </div>
    </div>
  );
};
