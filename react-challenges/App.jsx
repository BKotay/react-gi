// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Basic Information</h1>
//         <div>
//           <p><strong>Name:</strong> John Doe</p>
//           <p><strong>Phone Number:</strong> (123) 456-7890</p>
//           <p><strong>Date of Birth:</strong> January 1, 1990</p>
//           <p><strong>Email:</strong> johndoe@example.com</p>
//           <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  constructor(props) {
    // Call the parent class's constructor with props
    super(props);
    
    // Initialize the state with personal data inside 'person'
    this.state = {
      person: {
        name: 'John Doe',
        phoneNumber: '(123) 456-7890',
        dateOfBirth: 'January 1, 1990',
        email: 'johndoe@example.com',
        address: '123 Main St, Anytown, USA'
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Basic Information</h1>
        {/* Pass person object from state to BasicInfo as a prop */}
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}