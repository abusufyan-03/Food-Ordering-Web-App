import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)

        this.state = {
            count: 1,
            count2: 2
        }

        console.log(this.props.name + " child Constructor")
    }

    componentDidMount(){
        console.log("Child componentDidMount")
        /* this.timer = setInterval(()=>{
            console.log("interval running");
        }, 1000) */
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){

        console.log("component will unmount")
        // clearInterval(this.timer)
    }
    render(){
        console.log(this.props.name + "child render")
        let { count, count2 } = this.state
        return(
            <>
            <div className="user-card">
                <h1>This is Class Base Component</h1>
                <p>Name: {this.props.name} </p>
                <p>Count: {count} </p>
                <p>Count: {count2} </p>
                <button onClick={()=>{
                    this.setState({
                        count: count + 1,
                        count2: count2 + 1
                    })
                }}>increment</button>
            </div>
            </>
        )
    }
}

export default UserClass;