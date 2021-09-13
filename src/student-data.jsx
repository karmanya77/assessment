import React from 'react';
import { sum } from 'lodash';
import './student-data.css';
import { useState } from 'react/cjs/react.development';

export const StudentData = ({ studentInfo }) => {
  const { firstName, email, skill, grades, company, pic } = studentInfo;
  const [isActive, setIsActive] = useState(false);

  let total = [];

  for (let i = 0; i < Object.keys(grades).length; i++) {
    total.push(parseInt(grades[i]));
  }
  const average = sum(total) / Object.keys(grades).length;

  return (
    <div style={{ padding: '24px' }} className="student-card">
      <div>
        <img className="glyph" src={pic} />
      </div>
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
        <br />
        {isActive && (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {grades.map((grade, key) => {
              return (
                <li key={key}>
                  Test {key + 1} : &nbsp;&nbsp;&nbsp;{grade}%
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div>
        <button onClick={() => setIsActive(!isActive)}>+</button>
      </div>
    </div>
  );
};
