import React, { Component } from 'react';


class TopicPost extends Component {


  //Constructor
  constructor(props) {

      super(props);

      this.state = {
        post_title: this.props.post_title,
        post_category: this.props.post_category,
        post_tags:this.props.post_tags,
        post_users:this.props.post_users,
        post_replies:this.props.post_replies,
        post_views:this.props.post_views,
        post_activity:this.props.post_activity,
        post_pinned:this.props.post_pinned,
        post_locked:this.props.post_locked

      }

    }


//Get Post Users
getPostUser(){
  return this.state.post_users.map(user => {
      return (
        <div>
          <a href={user} className="avatar">
            <img
              src="fonts/icons/avatars/L.svg"
              alt="avatar" />
          </a>
        </div>
      )
  })
}

//Get Post Tags
getPostTags(){
  return this.state.post_tags.map(tag => {
      return (
          <a href="#" className="bg-4f80b0">{tag}</a>
      )
  })
}


//Render
  render() {

    var post_background = "bg-f2f4f6";
    var post_icon = "";


    //Check Pinned Post
    if(this.state.post_pinned == "true"){
        post_background = "bg-fef2e0";
        post_icon= {__html: '<i><img src="fonts/icons/main/Pinned.svg" alt="Pinned"></i>'};
    }

    //Check Locked Post
    if(this.state.post_locked == "true"){
        post_icon= {__html: '<i class="icon-Locked"></i>'};
    }

      return (
          <div className={"posts__item " + post_background}>
            <div className="posts__section-left">
              <div className="posts__topic">
                <div className="posts__content">
                  <a href="#">
                    <h3>
                      <span dangerouslySetInnerHTML={post_icon} />
                      {this.state.post_title}
                    </h3>
                  </a>
                  <div className="posts__tags tags">
                    {this.getPostTags()}
                  </div>
                </div>
              </div>
              <div className="posts__category">
                <a href="#" className="category"><i className="bg-4436f8" />{this.state.post_category}</a>
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
