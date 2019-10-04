import React from "react"

function Header(){
const fname= "RAJ"
const lname= "JAR"
const date = new Date()

return (
<header className="navbar">
This is header
{" "+fname+" "+ lname+" "+ date.getHours() +" "} o'clock
</header>
)
}

export default Header