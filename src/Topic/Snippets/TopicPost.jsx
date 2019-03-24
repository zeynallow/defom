import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TopicPost extends Component {


  //Constructor
  constructor(props) {

    super(props);

    this.state = {
      post_id: this.props.post_id,
      post_title: this.props.post_title,
      post_category: this.props.post_category,
      post_category_color: this.props.post_category_color,
      post_category_slug: this.props.post_category_slug,
      post_users: this.props.post_users,
      post_replies: this.props.post_replies,
      post_views: this.props.post_views,
      post_activity: this.props.post_activity,
      post_pinned: this.props.post_pinned,
      post_locked: this.props.post_locked

    }

  }


  //Get Post Users
  getPostUser() {
    return this.state.post_users.map((user, index) => {
      return (
        <div key={index}>
          <Link to={user} className="avatar">
            <img
              src="fonts/icons/avatars/L.svg"
              alt="avatar" />
          </Link>
        </div>
      )
    })
  }


  //Render
  render() {

    var post_background = "bg-f2f4f6";
    var post_icon = { __html: '<i></i>' };


    //Check Pinned Post
    if (this.state.post_pinned == "true") {
      post_background = "bg-fef2e0";
      post_icon = { __html: '<i><img src="fonts/icons/main/Pinned.svg" alt="Pinned"></i>' };
    }

    //Check Locked Post
    if (this.state.post_locked == "true") {
      post_icon = { __html: '<i class="icon-Locked"></i>' };
    }

    return (
      <div className={"posts__item " + post_background}>
        <div className="posts__section-left">
          <div className="posts__topic">
            <div className="posts__content">
              <Link to={"/topic/" + this.state.post_id}>
                <h3>
                  <span dangerouslySetInnerHTML={post_icon} />
                  {this.state.post_title}
                </h3>
              </Link>
            </div>
          </div>
          <div className="posts__category">
          <Link to={"/category/" + this.state.post_category_slug} className="category">
          <i className={this.state.post_category_color} /> {this.state.post_category}
        </Link>
          </div>
        </div>
        <div className="posts__section-right">
          <div className="posts__users">
            {this.getPostUser()}
          </div>
          <div className="posts__replies">{this.state.post_replies}</div>
          <div className="posts__views">{this.state.post_views}</div>
          <div className="posts__activity">{this.state.post_activity}</div>
        </div>
      </div>
    )
  }

}

export default TopicPost;
