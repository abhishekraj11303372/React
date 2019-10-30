import React from 'react'

function HandlingEvents(){
    return(
            <div>
                <img onMouseOver={() => console.log("Hovered")} src="https://media.spokesman.com/photos/2018/06/16/WASH_DL_ijDr9Gn.jpg" width="120" height="60" alt="broken"/>
                <br/>
                <br/>
                <button onClick ={function(){console.log("I was clicked")}}>Click Me</button>
            </div>
    )
}

export default HandlingEvents