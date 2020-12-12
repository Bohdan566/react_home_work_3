import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

class Post extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.title} <Link to={`/posts/${item.id}`}>Posts Details</Link> {<hr/>}
            </div>
        );
    }
}

export default withRouter(Post);