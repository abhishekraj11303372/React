import React from 'react'

function Conditional(props){
// Condition ? statement if true : if true : statement if false

//    if(props.isLoading === true){
//        return(
//                <h1>Loading...</h1>
//        )
//    }else{
//        return(
//            <h1>Cool Stuff about conditional rendering </h1>
//        )
//    }

 // Another way of implementation

    return(
//        <div>{props.isLoading === true ? <h1>Loading...</h1> : <h1>Cool Stuff about conditional rendering</h1>}</div>

    //since isLoading is a boolean already we don't need a === true
//        <div>{props.isLoading ? <h1>Loading...</h1> : <h1>Cool Stuff about conditional rendering</h1>}</div>
    //since this function should only display what it is supposed to display the condition should be in main component
    <div><h1>Cool Stuff about conditional rendering</h1></div>
    )
}

export default Conditional