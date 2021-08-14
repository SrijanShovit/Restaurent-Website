// import logo from './logo.svg';
// import './App.css';

// //this file contains the components to show and nothing else and is then exported
// //functional component necessary 
// //something is must to be returned from here 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <MyName/>
//         {/* nested components;can be reused any no of times */}
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// //creating custom components
// const MyName = () => {
//   // App can also be called inside this component
//   return <h1>Srijan Shovit</h1>
// }

// //all these are functional components
// //class components are outdated
// export default App;

// //In JSX components must be written in camelCase
// //we cannot have two components with the same name

// //if we use rendering(showing) synatx same as of React version older than 17 then we must 
// //import react from 'react' otherwise it won't work'

// //old syntax 

// // <React.Fragment> is now written as <>

// //const App = () => {
// //     return React.createElement("div",{props},React.createElement("h1",{props},"Hello world"))
// //  };







//*******************************Actual Code Starts ****************************/

//rafce -> React Arrow Function Component with Export

import React from 'react'
import './style.css'
import Restaurent from './Restaurent'
import Menu from './MenuApi'
// 

const App = () => {
  return (
    <Restaurent/>

  )
}

export default App
