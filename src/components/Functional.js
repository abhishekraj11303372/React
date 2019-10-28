import React from 'react'
//1
function Functional(){
    return(
    <div>
    <header />
    Hi
    <Greeting />
    </div>
    )
}

//2
function Header(props){
return(
<div>
    <header>
    hi bewada
    <p>Welcome , {props.username}!</p>
    </header>
    </div>
)
}

//3
function Greeting(){
const date = new Date()
const hours = date.getHours()
return(
    <div>
    {date +" "+ hours}
    </div>
)
}

export default Functional