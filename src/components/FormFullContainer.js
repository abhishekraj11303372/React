import React from 'react'

function FormFullContainer(props){
        return(
                            <main>
                                <form>
                                    <input
                                        name="firstName"
                                        value={props.firstName}
                                        placeholder="firstName"
                                        onChange={props.handleChange}
                                        />
                                        <br />
                                    <input
                                        name="lastName"
                                        value={props.lastName}
                                        placeholder="lastName"
                                        onChange={props.handleChange}
                                        />
                                        <br />
                                    <input
                                        name="age"
                                        value={props.age}
                                        placeholder="age"
                                        onChange={props.handleChange}
                                        />
                                        <br />
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={props.gender === "Male"}
                                        onChange={props.handleChange}
                                      />Male
                                     <br />
                                    <input
                                       type="radio"
                                       name="gender"
                                       value="Female"
                                       checked={props.gender === "Female"}
                                       onChange={props.handleChange}
                                     />Female
                                    <br />
                                     <select
                                       name="destination"
                                       value={props.destination}
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
                                               checked={props.isVegan}
                                           /> Vegan
                                        <br />
                                        <input
                                               type="checkbox"
                                               name="isLactoseFree"
                                               onChange={props.handleChange}
                                               checked={props.isLactoseFree}
                                        /> Lactose Free
                                         <br />
                                        <input
                                              type="checkbox"
                                              name="isKosher"
                                              onChange={props.handleChange}
                                              checked={props.isKosher}
                                        /> Kosher
                                     </label>
                                     <br />
                                    <button>Submit</button>
                                </form>
                                <hr />
                                <h2>External Information:</h2>
                                <p>Your name: {props.firstName} {props.lastName}</p>
                                <p>Your age: {props.age}</p>
                                <p>Your gender: {props.gender}</p>
                                <p>Your destination: {props.destination}</p>
                                <p>Dietary Restrictions:-
                                <br/>-------------------------------------------<br/>
                                 Vegan : {props.isVegan ? "Yes" : "No"}<br/>
                                 Lactose Free : {props.isLactoseFree ? "Yes" : "No"}<br/>
                                 Kosher : {props.isKosher ? "Yes" : "No"}
                                 </p>
                           </main>
        )
}

export default FormFullContainer