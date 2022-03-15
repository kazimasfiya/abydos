import React, { Component,PureComponent } from 'react'

export class PureComponentM extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"mahtab",
             count:0
        }
    }
    
    render() {

        console.log("checking-rrendering");
        return (
            <div>
                <h1>Pure Component</h1>
                <h3>{this.state.name}</h3>
                <button onClick={()=>{this.setState({name:this.state.name})}}>Update name</button>
                <button onClick={()=>{this.setState({name:this.state.count+1})}}>Update count</button>
            </div>
        )
    }
}

export default PureComponentM
