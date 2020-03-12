import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import PostsList from './components/posts-list.component';
import CreatePost from './components/create-post.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={PostsList} />
        <Route path="/create" component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
