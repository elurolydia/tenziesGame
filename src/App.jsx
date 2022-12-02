import React from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid" 



export default function App () {


  const [num, setNum] = React.useState(allNewDice());

  function allNewDice(){
    let arr = []

    for (let i = 0; i < 10; i++){
      let y = {
        value: Math.floor((Math.random() * 6) + 1), 
        isHeld: false,
        id: nanoid()
      }
      
      arr.push(y)
    }
    return arr
  }


  function btnCall () { 
    setNum(allNewDice())
  }
  
  function holdDice (id)  {

    setNum(prevNum => prevNum.map(die => {
        return (die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die)
      })
    )

  };

  
   
  const value = num.map(val => (
    <Die 
        key={val.id} 
        value = {val.value} 
        isHeld={val.isHeld} 
        id = {val.id} 
        holdDice={holdDice}
    />
  ))

  return (
    <div id="app"> 
      
      <main>
            <div id="mainDiv">
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.
                </p>

                <div id="dice"> 
                  {value} 
                </div>

                <button id="rollbtn" onClick={btnCall}>Roll</button>
            </div>
        </main>

    </div>
  )
}