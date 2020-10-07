import React from 'react';
import data from '../data/berlin.json';

class FaceBook extends React.Component {
  render() {
    return (
      <div>
        {data.map((button) => (
          <button>{button.country}</button>
        ))}
        {data.map((student, index) => (
          <div className="IdCard" key={index}>
            <img src={student.img} alt="" />
            <div>
              <div>First name: {student.firstName}</div>
              <div>Last name:{student.lastName}</div>
              <div>Country:{student.country}</div>
              <div>Type: {student.isStudent ? 'Student' : 'Teacher'}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FaceBook;
