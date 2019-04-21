import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//CSS
import "./Content.css";

// Routes
import routes from "../../routes"

class Content extends React.Component {

    constructor() {
        super()
        this.state = {
            routes: routes
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.routes.map((route, index) => (
                        <Route path={route.path} exact={route.exact} render={route.component} key={index} />
                    ))
                }
            </div>
        )
    }
}

export default Content