import React from "react";

export default class Test extends React.Component {

    constructor() {
        console.log("Constructor")
        super()
        this.state = {
            defaultArray: [],
            newArray: [],
            isDataReady: false,
            counter:0
        }

        this.initialize = this.initialize.bind(this)
        this.initialize2 = this.initialize2.bind(this)
    }

    initialize() {
        this.setState((prev)=>({
            counter: prev.counter+1
        }))
    }

    initialize2() {
        
    }

    componentDidMount(){
        console.log("Component did Mount")
        console.log("--------------------")
    }

    componentDidUpdate(prev) {
        console.log("Component did Update")
        console.log("--------------------")
        this.initialize()
    }

    render() {
        console.log("Render")
        return (
            <div>
                {this.state.isDataReady ? console.log(this.state.newArray) : null}
                <button onClick={this.initialize}>Initialize</button>
            </div>
        )
    }

}