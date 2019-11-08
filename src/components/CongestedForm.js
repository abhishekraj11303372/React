import React from 'react'

class CongestedForm extends React.Component{
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
            <main>
                 <form>
                     <input
                         name="firstName"
                         value={this.state.firstName}
                         placeholder="firstName"
                         onChange={this.handleChange}
                         />
                         <br />
                     <input
                         name="lastName"
                         value={this.state.lastName}
                         placeholder="lastName"
                         onChange={this.handleChange}
                         />
                         <br />
                     <input
                         name="age"
                         value={this.state.age}
                         placeholder="age"
                         onChange={this.handleChange}
                         />
                         <br />
                     <input
                         type="radio"
                         name="gender"
                         value="Male"
                         checked={this.state.gender === "Male"}
                         onChange={this.handleChange}
                       />Male
                      <br />
                     <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange}
                      />Female
                     <br />
                      <select
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleChange}
                      >
                            <option value="">---Please Choose your destination---</option>
                            <option value="India">India</option>
                            <option value="US">US</option>
                            <option value="Phillipines">Phillipines</option>
                            <option value="Canada">Canada</option>
                      </select>
                         <br />
                      <label>
                            <input
                                type="checkbox"
                                name="isVegan"
                                onChange={this.handleChange}
                                checked={this.state.isVegan}
                            /> Vegan
                         <br />
                         <input
                                type="checkbox"
                                name="isLactoseFree"
                                onChange={this.handleChange}
                                checked={this.state.isLactoseFree}
                         /> Lactose Free
                          <br />
                         <input
                               type="checkbox"
                               name="isKosher"
                               onChange={this.handleChange}
                               checked={this.state.isKosher}
                         /> Kosher
                      </label>
                      <br />
                     <button>Submit</button>
                 </form>
                 <hr />
                 <h2>External Information:</h2>
                 <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                 <p>Your age: {this.state.age}</p>
                 <p>Your gender: {this.state.gender}</p>
                 <p>Your destination: {this.state.destination}</p>
                 <p>Dietary Restrictions:-
                 <br/>-------------------------------------------<br/>
                  Vegan : {this.state.isVegan ? "Yes" : "No"}<br/>
                  Lactose Free : {this.state.isLactoseFree ? "Yes" : "No"}<br/>
                  Kosher : {this.state.isKosher ? "Yes" : "No"}
                </p>
             </main>
        )
    }
}

export default CongestedForm