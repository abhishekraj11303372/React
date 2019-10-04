import React from 'react'
import ContactCard from './ContactCard'

function Contact(){
return(
<div>
    <ContactCard
    contact={{name:"mrs. Parkins", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwanD6x6fdgyAO-Eq-Q3VeSUmvg175-kTwF1-lyuN6KGuagrE ", phone:"156156451423", email:"asdh@aekjf.com"}}/>
    <ContactCard
     contact={{name:"mrs. Parkins", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwanD6x6fdgyAO-Eq-Q3VeSUmvg175-kTwF1-lyuN6KGuagrE ", phone:"", email:"asdh@aekjf.com"}}/>

    <ContactCard
  contact={{name:"mrs. Parkins", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwanD6x6fdgyAO-Eq-Q3VeSUmvg175-kTwF1-lyuN6KGuagrE ", phone:"156156451423", email:"asdh@aekjf.com"}}/>
    <ContactCard
    contact={{name:"mrs. Parkins", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwanD6x6fdgyAO-Eq-Q3VeSUmvg175-kTwF1-lyuN6KGuagrE ", phone:"156156451423", email:"asdh@aekjf.com"}}/>
</div>
)
}
export default Contact
