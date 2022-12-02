import React from 'react'

const Die = (props) => {
  return (
    <div>
        <div 
          id="die" 
          style={{backgroundColor: props.isHeld? '#59E391': '#FFFFFF'}} 
          onClick = {()=> {
            props.holdDice(props.id)
          }}
        >
            {props.value}
          </div>
    </div>
  )
}

export default Die