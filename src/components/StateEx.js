import React,{Component} from "react"

class StateEx extends Component {
constructor(){
super()
this.state = {
    answer: "yes"
    }}

    render() {
        return(
                 <div>
                        <h1>Is state important to know? {this.state.answer}</h1>
                 </div>
              )
        }
}

export default StateEx
