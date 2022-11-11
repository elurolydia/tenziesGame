import React from "react";
import Die from "./components/Die";



export default function App () {

  const allNewDice = () =>{
    let arr = []
    while (arr.length < 10) {
        let y = Math.floor((Math.random() * 6) + 1)
        arr.push(y)
    }
    
    return arr
  }


  const [num, setNum] = React.useState(allNewDice());
   
  const value = num.map(val => {
    return <Die value = {val}/>
  })

  
  return (
    <div id="app"> 
      
      <main>
            <div id="mainDiv">
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.
                </p>
                <div id="dice">{value}</div>
                <button id="rollbtn">Roll</button>
            </div>
        </main>

    </div>
  )
}