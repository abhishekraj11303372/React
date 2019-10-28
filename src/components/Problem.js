import React from 'react'

class Problem extends React.Component{
constructor(){
    super()
    this.state = {
    isLoggedIn: false
    }
}
    render(){
    let voidDisplay
    if(this.state.isLoggedIn){
        voidDisplay= "In"
    }
    else{
        voidDisplay ="Out"
    }
    return(
        <div>
        <h1>
                You are currently logged {voidDisplay}
        </h1>
        </div>
    )
    }
}

export default Problem