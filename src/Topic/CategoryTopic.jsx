import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import TopicPost from '../Topic/Snippets/TopicPost';
import { Nav } from '../Layout/Nav';


class CategoryTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getPosts: []
    };
  }


  componentDidUpdate() {

    const { match: { params } } = this.props;

    /* Category Posts */
    fetch(`http://localhost:8000/api/v1/topic/category-posts/${params.category_id}`)
    .then((response) => response.json())
    .then((categoryPosts) => {
      this.setState({getPosts:categoryPosts.posts});
    });
  }

  componentWillUnmount(){
    this.setState({getPosts:[]});
  }

  getPosts(){
    if(this.state.getPosts.length > 0){
      return this.state.getPosts.map(post => {
        return <TopicPost
          key={post.id}
          post_id={post.id}
          post_slug={post.slug}
          post_title={post.title}
          post_category={post.category_title}
          post_category_slug={post.category_slug}
          post_category_color={post.category_color}
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
    const { account, authentication, category } = state;
    const { user } = authentication;
    return {
      user,
      account,
      category
    };
  }

  const connectedCategoryTopic = connect(mapStateToProps)(CategoryTopic);
  export { connectedCategoryTopic as CategoryTopic };
