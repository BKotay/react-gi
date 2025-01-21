import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    const { person } = this.props;  
    return (
      <>
        <p>Name:{person.name}</p>
        <p>Phone Number:{person.phoneNumber}</p>
        <p>Date of Birth:{person.dateOfBirth}</p>
        <p>Email:{person.email}</p>
        <p>Address:{person.address}</p>
      </>
    );
  }
}

export default BasicInfo;