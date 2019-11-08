import React from 'react'

function FormFullContainer(props){
        return(
                            <main>
                                <form>
                                    <input
                                        name="firstName"
                                        value={props.data.firstName}
                                        placeholder="firstName"
                                        onChange={props.handleChange}
                                        />
                                        <br />
                                    <input
                                        name="lastName"
                                        value={props.data.lastName}
                                        placeholder="lastName"
                                        onChange={props.handleChange}
                                        />
                                        <br />
                                    <input
                                        name="age"
                                        value={props.data.age}
                                        placeholder="age"
                                        onChange={props.handleChange}
                                        />
                                        <br />
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={props.data.gender === "Male"}
                                        onChange={props.handleChange}
                                      />Male
                                     <br />
                                    <input
                                       type="radio"
                                       name="gender"
                                       value="Female"
                                       checked={props.data.gender === "Female"}
                                       onChange={props.handleChange}
                                     />Female
                                    <br />
                                     <select
                                       name="destination"
                                       value={props.data.destination}
                                       onChange={props.handleChange}
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
                                               onChange={props.handleChange}
                                               checked={props.data.isVegan}
                                           /> Vegan
                                        <br />
                                        <input
                                               type="checkbox"
                                               name="isLactoseFree"
                                               onChange={props.handleChange}
                                               checked={props.data.isLactoseFree}
                                        /> Lactose Free
                                         <br />
                                        <input
                                              type="checkbox"
                                              name="isKosher"
                                              onChange={props.handleChange}
                                              checked={props.data.isKosher}
                                        /> Kosher
                                     </label>
                                     <br />
                                    <button>Submit</button>
                                </form>
                                <hr />
                                <h2>External Information:</h2>
                                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                                <p>Your age: {props.data.age}</p>
                                <p>Your gender: {props.data.gender}</p>
                                <p>Your destination: {props.data.destination}</p>
                                <p>Dietary Restrictions:-
                                <br/>-------------------------------------------<br/>
                                 Vegan : {props.data.isVegan ? "Yes" : "No"}<br/>
                                 Lactose Free : {props.data.isLactoseFree ? "Yes" : "No"}<br/>
                                 Kosher : {props.data.isKosher ? "Yes" : "No"}
                                 </p>
                           </main>
        )
}

export default FormFullContainer