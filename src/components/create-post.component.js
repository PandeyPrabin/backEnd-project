import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const post = {
      title: title,
      body: body
    };

    console.log(post);

    axios
      .post('http://localhost:5000/posts/add', post)
      .then(res => console.log(res.data));

    window.location = '/';
  };

  return (
    <div>
      <h3>Create New Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Post: </label>
          <textarea
            required
            className="form-control"
            rows="7"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Post"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
