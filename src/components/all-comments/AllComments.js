import React, {Component} from 'react';
import CommentsService from "../../services/comments-service/CommentsService";
import Comment from "../comment/Comment";

class AllComments extends Component {

    commentsService = new CommentsService();

    state = {comments: []};

    async componentDidMount() {
        let comments = await this.commentsService.comments();
        this.setState({comments});
    }

    render() {
        let {comments} = this.state
        return (
            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;