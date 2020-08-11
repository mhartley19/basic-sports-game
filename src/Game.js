import React from 'react'
import Team from './Team'

function Game(props){
    return(<React.Fragment>
     <h1>Basketball Simulator
     </h1>
     <h2 id="venue">Welcome to {props.venue}</h2>
     <div id="gameboard">
     <div id="awayteaminfo" className="teamInfo">
     <Team name = {props.awayTeam} logo="./logos/away.jpeg"/>
     </div>
     <div id="hometeamInfo" className="teamInfo">
     <Team name = {props.homeTeam} logo="./logos/HomeTeam.jpeg"/>
     </div>
         </div>
     </React.Fragment>)

 }

export default Game