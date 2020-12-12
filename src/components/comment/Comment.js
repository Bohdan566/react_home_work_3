import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class Comment extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.name} <Link to={`/comments/${item.id}`}>Comments Details</Link> {<hr/>}
            </div>
        );
    }
}

export default withRouter(Comment);