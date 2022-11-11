import React from "react";
import Die from "./Die";



export default function Main() {

    const allNewDice = () =>{
        let arr = []
        while (arr.length < 10) {
            let y = Math.floor((Math.random() * 6) + 1)
            arr.push(y)
        }
        
        return arr
    }

   
    const [num, setNum] = React.useState(allNewDice);
    const [value, setValue] = React.useState(
        // setNum(prev => {
        //     prev.map(pre => {
        //         return pre
        //     })
        // })
        1
    );
    console.log(num)

    

    return (
        <main>
            <div id="mainDiv">
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.
                </p>
                <Die value = {value}/>
                <button id="rollbtn">Roll</button>
            </div>
        </main>
    )
}