import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import TopicPost from '../Topic/Snippets/TopicPost';
import Nav from '../Layout/Nav';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getPosts: []
    };
  }


  componentDidMount() {

    /* latestPost */
    fetch('http://localhost:8000/api/v1/topic/posts/')
    .then((response) => response.json())
    .then((latestPost) => {
      this.setState({getPosts:latestPost.posts});
    });
  }

  getPosts(){
    if(this.state.getPosts.length > 0){
      return this.state.getPosts.map(post => {
        return <TopicPost
          key={post.id}
          post_id={post.id}
          post_title={post.title}
          post_category={post.categories}
          post_tags={post.tags}
          post_users={['zeynal','cavidan']}
          post_replies="54"
          post_views="1200"
          post_activity="11 min"
          post_pinned="false"
          post_locked="false"
          />

      })
    }
  }


  render() {

    return (
      <main>

          <div className="container">

            <Nav />

            <div className="posts">
              <div className="posts__head">
                <div className="posts__topic">Topic</div>
                <div className="posts__category">Category</div>
                <div className="posts__users">Users</div>
                <div className="posts__replies">Replies</div>
                <div className="posts__views">Views</div>
                <div className="posts__activity">Activity</div>
              </div>
              <div className="posts__body">

                {this.getPosts()}

              </div>
            </div>
          </div>
        </main>

      );
    }
  }

  function mapStateToProps(state) {
    const { account, authentication } = state;
    const { user } = authentication;
    return {
      user,
      account
    };
  }

  const connectedHome = connect(mapStateToProps)(Home);
  export { connectedHome as Home };
