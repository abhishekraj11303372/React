import React from 'react'

class Message extends React.Component{
    constructor(){
        super()
        this.state= {
            unreadMessages: [
                    "a"
//                "Call your mm1",
//                "Now Spam email available are definitely safe to click"
            ]
        }
    }

    render(){
        return(
        <div>
       {this.state.unreadMessages.length > 0 ? <h2>You have {this.state.unreadMessages.length} unread messages</h2> : null}
       {this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} unread messages</h2> }
        </div>
        )
    }
}

export default Message