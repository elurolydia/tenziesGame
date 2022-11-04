import React from "react";
import Die from "./Die";



export default function Main() {
    return (
        <main>
            <div id="mainDiv">
                <h2>Tenzies</h2>
                <p>Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.
                </p>
                <Die />
                <button id="rollbtn">Roll</button>
            </div>
            
        </main>
    )
}