import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class User extends Component {
    render() {
        let {item, match: {url}} = this.props
        return (
            <div>
                {item.name} - <Link to={`${url}/${item.id}`}>Users Details</Link> {<hr/>}
            </div>
        );
    }
}

export default withRouter(User);