import React from "react";
import UserClass from "./UserClass";
import User from "./user";
import UserContext from "../utils/UserContext.js";
class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent construtor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }
    render(){
        console.log("parent render")
        return(
        <>
        <h1>About US Page</h1>
        <p>This is about us page</p>
        <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
        </>
    )
    }
}

export default About;