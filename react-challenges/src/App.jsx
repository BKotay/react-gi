import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react';
import BasicInfo from './BasicInfo'


////  HARD Challenge ////
class App extends Component {
  constructor(props) {
    super(props);

    // Initialize the state with an array of people (Make three arrays with different information) //
    this.state = {
      people: [
        {
          name: 'Jim Johnson',
          height: '5 ft 1 in',
          phoneNumber: '(123) 456-7890',
          dateOfBirth: 'January 20, 2025',
          email: 'jimjohnson@yahoo.com',
        },
        {
          name: 'Jay Jackson',
          height: '9 ft 10 in',
          phoneNumber: '(999) 999-9999',
          dateOfBirth: 'February 31, 2026',
          email: 'jjack@outlook.com',
        }, {
          name: 'Blamah Kotay',
          height: '5 ft 10 in',
          phoneNumber: '704-123-4567',
          dateOfBirth: 'November 26, 1999',
          email: 'bkotay4@gmail.com.com'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}


export default App;


/// MEDIUM Challenge ////
/// BasicInfo receives the person object as a prop. It then renders the information using the values from the person object.  By passing this.state with the person object as a prop to BasicInfo, we allow the child component to render the information from the parent.

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Blamah Kotay',
//         phoneNumber: '704-123-4567',
//         dateOfBirth: 'November 26, 1999',
//         email: 'bkotay4@gmail.com',
//         address: '1423 Red Ventures Dr. , Charlotte, NC USA'
//       }
//     };
//   }
//   render() {
//     return (
//       <>
//         {}
//         <BasicInfo person={this.state.person} />
//       </>
//     );
//   }
// }


/// EASY challenge ///

// class App extends Component {
//   constructor(props) {
//     super(props); 
//     this.state = { person: {} };
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <p>Name: Blamah Kotay</p>
//           <p>Phone Number: 704-123-4567</p>
//           <p>Date of Birth: November 26, 1999</p>
//           <p>Email: bkotay4@gmail.com</p>
//           <p>Address: 1423 Red Ventures Dr. , Charlotte, NC USA</p>
//         </div>
//       </>
//     );
//   }
// }


///// VERY EASY Challenge   ////

// class App extends Component {
//   render() {
//     return (
//        <>
      //   <div>
      //   <p>Name: Blamah Kotay</p>
      //   <p>Phone Number: 704-123-4567</p>
      //   <p>Date of Birth: November 26, 1999</p>
      //   <p>Email: bkotay4@gmail.com</p>
      //   <p>Address: 1423 Red Ventures Dr. , Charlotte, NC USA</p>
      // </div>
    // </>
//     );
//   }
// }













