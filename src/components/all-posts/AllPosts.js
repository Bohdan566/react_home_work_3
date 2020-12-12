import React, {Component} from 'react';
import PostsService from "../../services/posts-service/PostsService";
import Post from "../post/Post";

class AllPosts extends Component {

    postsService = new PostsService();

    state = {posts: []}

    async componentDidMount() {
        let posts = await this.postsService.posts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;