import React from 'react'
import FormFullContainer from './FormFullContainer'

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
            <FormFullContainer />
        )
    }
}

export default FormFullComponent