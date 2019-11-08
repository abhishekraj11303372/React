import React from 'react'
import FormFullContainer from './FormFullContainer'
//component and container names are interchanged
class FormFullComponent extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:"",
            isVegan: false,
            isLactoseFree:false,
            isKosher:false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,type,value,checked}= event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({ [name]: value })
    }

    render(){
        return(
            <FormFullContainer
               handleChange={this.handleChange}
                /*firstName={this.firstName}*/
                data={this.state}
                />
        )
    }
}

export default FormFullComponent