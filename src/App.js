import React from 'react';
import './App.css';
import Game from "./components/Game"



function App() {
  // { return<div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //       </div> }
  
  let away = prompt ("Away Team")
  let home = prompt ("Home Team")
  let location = prompt("Venue")
    return <Game awayTeam = {away} homeTeam = {home} venue = {location}/>
}
  

    
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


export default App;


