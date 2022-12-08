import React from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";



export default function App () {

  const [num, setNum] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);


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

  

  function holdDice (id)  {

    setNum(prevNum =>  prevNum.map(die => {
        return (die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die)
      })
    )
  };



  function btnCall () {
    setNum(prevNum => prevNum.map(die => {
      return (die.isHeld === false? 
        {...die, value: Math.floor((Math.random() * 6) + 1),id: nanoid()}:
        die)
    }))

    return tenzies && setNum(allNewDice()), setTenzies(false)
  }



  function allAreEqual(array) {
    const result = array.every(element => {
      if (element === array[0]) {
        return true;
      }
    });
  
    return result;
  }

  // PREFERRED WAY
  // React.useEffect(()=>{
  //  const allIsHeld = num.every(die => die.isHeld);
  //  const sameValue = num.every(die => die.value === num[0].value);

  //  if (allIsHeld && sameValue){
  //   setTenzies(true)
  //   console.log("You won!")

  //  }
  // },[num])


  React.useEffect(()=>{
    let x = []
    let val = []
    for (let i = 0; i < 10; i++){
      
      if (num[i].isHeld){
        x.push(true)
        val.push(num[i].value)
      }

      if (x.length === 10 && allAreEqual(val)){
        setTenzies(true)
      } 
    } 
  },[num])
  
   
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
                {tenzies && <Confetti />}
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.
                </p>

                <div id="dice"> 
                  {value} 
                </div>

                <button id="rollbtn" onClick={btnCall}>{tenzies? 'New Game': 'Roll'}</button>  
            </div>
        </main>

    </div>
  )
}