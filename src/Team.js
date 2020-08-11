import React, {Component} from 'react'
// import made from '../public/logos/Swish.wav'
let swishSound = new Audio('logos/Swish.wav')
let shotSound = new Audio('logos/PUNCH.wav')
let brickSound = new Audio('logos/BackBoard.wav')
function swish(){
  swishSound.play()
}

function shot(){
  shotSound.play()
}

function brick(){
  brickSound.play()
}


    class Team extends React.Component{
        constructor(props){
          super(props)
          this.state = {
            shotCount: 0,
            score:0,
            shotsMade:0,
  
        }
        
        }
        shotButton = () => {
     

        if (Math.floor(Math.random() * 100 < 45)){
          this.setState((state) => {
            return {shotCount: state.shotCount +1,
                    score: state.score + 2,
                    shotsMade: state.shotsMade +1,
                    }
          })
          shot()
          setTimeout(swish, 700)           
        }   
       else {
            this.setState((state) => {
              return {shotCount: state.shotCount +1,      
                      }
            })
            shot()
            setTimeout(brick, 700)      
          } 
        }
        render(){
            return (<React.Fragment>
               <img id='backimage' src="/logos/curry.jpeg"/>
                <div className="teamname">{this.props.name}</div>
                   
                    <div className="score">Score {this.state.score}</div>
                    <img className = "team" src = {this.props.logo}/>
                    <button onClick={this.shotButton} id="shootbutton">Shoot</button>
                    <div className="shotdata">Shots Attempted {this.state.shotCount} </div>
                     {Math.round(this.state.shotsMade/this.state.shotCount *100) >= 0 &&
                      <div className="shotdata">Shooting Percentage {Math.round(this.state.shotsMade/this.state.shotCount *100)}%</div>}
            
                    
          
            </React.Fragment>)  
                    
            
        }
    }

    export default Team