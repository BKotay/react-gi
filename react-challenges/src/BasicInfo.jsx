import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    const { person } = this.props;  
    return (
      <div className='object'>
        <p>Name:{person.name}</p>
        <p>Height:{person.height}</p>
        <p>Phone Number:{person.phoneNumber}</p>
        <p>Date of Birth:{person.dateOfBirth}</p>
        <p>Email:{person.email}</p>
      </div>
    );
  }
}

export default BasicInfo;