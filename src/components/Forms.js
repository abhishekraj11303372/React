import React from 'react'

class Forms extends React.Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "",
            details:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} =event.target
        type === "checkbox" ? this.setState({[name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(event){
        alert('you have submitted' + this.state.value);
                    event.preventDefault();
    }

    render(){
        return(
            <form  onSubmit={this.onSubmit} >
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <br />
                    <textarea value={this.details} onChange={this.handleChange}/>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                        /> Is Friendly

                <h1>{this.state.firstName} {this.state.lastName} </h1>

                    <input
                           type="radio"
                           name="gender"
                           value="male"
                           checked={this.state.gender === "male"}
                           onChange={this.handleChange}
                        /> Male

                    <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                         /> Female

                  <h1>You are {this.state.gender}</h1>

                <input type="submit" value="submit"/>
                <br />
                Favourite Color:
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                </select>

                <h1>Your Favouritie Color is {this.state.favColor}</h1>
            </form>
        )
    }
}

export default Forms