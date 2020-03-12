import React, { Component } from 'react';
import { Trash } from 'react-bootstrap-icons';
import axios from 'axios';

const Post = props => (
  <div>
    <h3 style={{ color: 'darkslategray' }}>{props.post.title}</h3>
    <div style={{ whiteSpace: 'pre-line' }}>{props.post.body}</div>
    <div>
      <a
        href="#"
        onClick={() => {
          props.deletePost(props.post._id);
        }}
      >
        <Trash /> Delete
      </a>
      <br />
      <br />
    </div>
  </div>
);

export default class PostsList extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/posts/')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    axios.delete('http://localhost:5000/posts/' + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      posts: this.state.posts.filter(el => el._id !== id)
    });
  }

  postList() {
    return this.state.posts.map(currentpost => {
      return (
        <Post
          post={currentpost}
          deletePost={this.deletePost}
          key={currentpost._id}
        />
      );
    });
  }

  render() {
    return <div>{this.postList()}</div>;
  }
}
