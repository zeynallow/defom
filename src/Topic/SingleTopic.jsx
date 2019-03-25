import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {Nav} from '../Layout/Nav';

class SingleTopic extends Component {


  constructor(props) {
    super(props);
    this.state = {
      getPost: [],
      getReplies: [],
      reply_message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.replySubmit = this.replySubmit.bind(this);
  }


  componentDidMount() {

    const { match: { params } } = this.props;

    /* Fetch Post */
    fetch(`http://localhost:8000/api/v1/topic/posts/${params.post_id}`)
      .then((response) => response.json())
      .then((topic) => {
        this.setState({ getPost: topic.post });
      });


    /* Fetch Post Replies*/
    fetch(`http://localhost:8000/api/v1/topic/replies/${params.post_id}`)
      .then((response) => response.json())
      .then((post) => {
        if(post.replies){
          this.setState({ getReplies: post.replies });
        }
        
      });


  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /*
  * Reply Submit
  */

  replySubmit(event) {

    let user = JSON.parse(localStorage.getItem('user'));
    const { account } = this.props;

    if (user && user.key) {

      var replyData = {
        "post_id": this.state.getPost.id,
        "text": this.state.reply_message
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': 'Token ' + user.key,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(replyData)
      };

      fetch('http://localhost:8000/api/v1/topic/replies/', requestOptions)
        .then((response) => response.json())
        .then((reply) => {

          if (reply.success) {
            this.setState({ 
              getReplies: this.state.getReplies.concat({
                'text': this.state.reply_message,
                'owner_username': account.information.username,
                'created_date':'İndi'
              })
            })
          } else {
            alert("Sehv bash verdi");
          }
        });

    } else {
      alert("Login required!!");
    }

    event.preventDefault();
  }


  /*
  * Add Reply
  */
  addReply() {

    const { account } = this.props;

    if (account.information) {

      return (
        <div className="topic create">
          <div className="topic__head">
            <div className="topic__avatar">
              <Link to={account.information.username} className="avatar">
                <img src={"/fonts/icons/avatars/" + account.information.username.charAt(0).toUpperCase() + ".svg"} alt="avatar" />
              </Link>
            </div>
            <div className="topic__caption">
              <div className="topic__name">
                <Link to={account.information.username}>{account.information.username}</Link>
              </div>
            </div>
          </div>
          <div className="topic__content">
            <div className="topic__text">

              <form onSubmit={this.replySubmit}>
                <div className="create__section create__textarea">
                  <div className="create__textarea-head">
                    <span>
                      <i className="icon-Quote" />
                    </span>
                    <span>
                      <i className="icon-Bold" />
                    </span>
                    <span>
                      <i className="icon-Italic" />
                    </span>
                    <div className="create__textarea-separate" />
                    <span>
                      <i className="icon-Share_Topic" />
                    </span>
                    <span>
                      <i className="icon-BlockQuote" />
                    </span>
                    <span>
                      <i className="icon-Performatted" />
                    </span>
                    <span>
                      <i className="icon-Upload_Files" />
                    </span>
                    <span className="create__textarea-separate" />
                    <span>
                      <i className="icon-Bullet_List" />
                    </span>
                    <span>
                      <i className="icon-heading" />
                    </span>
                    <span>
                      <i className="icon-Horizontal_Line" />
                    </span>
                    <span>
                      <i className="icon-Emoticon" />
                    </span>
                    <span>
                      <i className="icon-Settings" />
                    </span>
                    <span>
                      <i className="icon-Color_Picker" />
                    </span>
                  </div>
                  <textarea onChange={this.handleChange} name="reply_message" value={this.state.reply_message} className="form-control" id="post_reply"></textarea>
                </div>

                <button type="submit" className="btn btn--type-02"><i className="icon-Reply_Fill" />Cavabla</button>
              </form>
            </div>
          </div>
        </div>)
    } else {
      return (<div className="topic create">
        Loading...
    </div>)
    }

  }


  /*
  * Get Post Replies
  */
  getReplies() {

    if (this.state.getReplies.length > 0) {
      return this.state.getReplies.map((reply, index) => {

        return (
          <div className="topic" key={index}>
            <div className="topic__head">
              <div className="topic__avatar">
                <Link to={reply.owner_username} className="avatar">
                  <img src={"/fonts/icons/avatars/" + reply.owner_username.charAt(0).toUpperCase() + ".svg"} alt="avatar" />
                </Link>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
               {reply.owner_username}
                </div>
                <div className="topic__date">
                  <div className="topic__user topic__user--pos-r">
                    <i className="icon-Reply_Fill" />
                      <img
                        src="/fonts/icons/avatars/B.svg"
                        alt="avatar" />
                    <span className="topic__user-name">
                      Benjamin Caesar
                     </span>
                  </div>
                  <i className="icon-Watch_Later" />
                  {reply.created_date}
            </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  {reply.text}
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <span>
                      <i className="icon-Upvote" />
                   </span>
                    <span>137</span>
                  </div>
                  <div>
                    <span>
                      <i className="icon-Downvote" />
                   </span>
                    <span>02</span>
                  </div>
                  <div>
                    <span>
                      <i className="icon-Favorite_Topic" />
                   </span>
                    <span>46</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <span>
                    <i className="icon-Reply_Fill" />
                 </span>
                </div>
              </div>
            </div>
          </div>)
      })
    }
  }

  /*
  * Get Post
  */
  getPost() {

    const post = this.state.getPost;

    return <div className="topics">

      <div className="topics__heading">
        <h2 className="topics__heading-title">
          {post.title}
        </h2>
        <div className="topics__heading-info">

        <Link to={"/category/" + post.category_slug} className="category">
          <i className={post.category_color} /> {post.category_title}
        </Link>

        </div>
      </div>

      <div className="topics__body">
        <div className="topics__content">

          <div className="topic">
            <div className="topic__head">
              <div className="topic__avatar">
                <Link to={"/users/" + post.owner_username} className="avatar">
                  {(post.owner_username) ? <img src={"/fonts/icons/avatars/" + post.owner_username.charAt(0).toUpperCase() + ".svg"} alt="avatar" /> : ''}
                </Link>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <span>
                    {post.owner_username}
                 </span>
                </div>
                <div className="topic__date">
                  <i className="icon-Watch_Later" />
                  {post.created_date}
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  {post.text}
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <span>
                      <i className="icon-Upvote" />
                   </span>
                    <span>201</span>
                  </div>
                  <div>
                    <span>
                      <i className="icon-Downvote" />
                   </span>
                    <span>08</span>
                  </div>
                  <div>
                    <span>
                      <i className="icon-Favorite_Topic" />
                   </span>
                    <span>39</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <div data-visible="desktop">
                    <span>
                      <i className="icon-Share_Topic" />
                   </span>
                    <span>
                      <i className="icon-Flag_Topic" />
                   </span>
                    <span>
                      <i className="icon-Bookmark" />
                   </span>
                  </div>
                  <div data-visible="mobile">
                    <span>
                      <i className="icon-More_Options" />
                   </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="topic">
            <div className="topic__content">
              <div className="topic__info">
                <div className="topic__info-section">
                  <div>
                    <span className="topic__info-title">Yazan</span>
                    <div className="topic__info-avatar">
                      <Link to={"/users/" + post.owner_username} className="avatar">
                        {(post.owner_username) ? <img src={"/fonts/icons/avatars/" + post.owner_username.charAt(0).toUpperCase() + ".svg"} alt="avatar" /> : ''}
                      </Link>
                      <span>13d</span>
                    </div>
                  </div>
                  <div>
                    <span className="topic__info-title">
                      Sonuncu cavablayan
                        </span>
                    <div className="topic__info-avatar">
                      <span className="avatar">
                        <img
                          src="/fonts/icons/avatars/A.svg"
                          alt="avatar" />
                     </span>
                      <span>4h</span>
                    </div>
                  </div>
                </div>
                <div className="topic__info-section">
                  <div>
                    <span className="topic__info-title">Cavablar</span>
                    <div className="topic__info-count">18</div>
                  </div>
                  <div>
                    <span className="topic__info-title">Baxış sayı</span>
                    <div className="topic__info-count">205</div>
                  </div>
                  <div>
                    <span className="topic__info-title">İstifadəçilər</span>
                    <div className="topic__info-count">6</div>
                  </div>
                  <div>
                    <span className="topic__info-title">Bəyənmələr</span>
                    <div className="topic__info-count">315</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Topic Replies */}
          {this.getReplies()}
          {this.addReply()}
          {/* Topic Replies */}



        </div>

        {/* Topic Calendar */}
        <div className="topics__calendar">
          <div className="calendar">
            <div className="calendar__top">
              <span
                className="calendar__btn calendar__btn--c-01">
                <i className="icon-Calender" />
             </span>
            </div>
            <div className="calendar__center">
              <div className="calendar__first">
                Jun 12
          </div>
              <div className="calendar__range">
                <div className="calendar__current">
                  <p>
                    31 / 75
              </p>
                  <span>
                    Jun 17
              </span>
                </div>
              </div>
              <div className="calendar__last">
                6h ago
          </div>
            </div>
            <div className="calendar__bottom">
              <span
                className="calendar__btn calendar__btn--c-01">
                <i className="icon-Track" />
             </span>
              <span
                className="calendar__btn calendar__btn--c-02">
                <i className="icon-Reply_Fill" />
             </span>
            </div>
          </div>
        </div>
      </div>
      {/* Topic Calendar */}

      {/* Topic Footer */}
      <div className="topics__control">
        <span className="btn"><i className="icon-Bookmark" />Yadda saxla</span>
        <span className="btn"><i className="icon-Share_Topic" />Paylaş</span>
        <span className="btn"><i className="icon-Flag_Topic" />Şikayət et</span>
        <span className="btn"><i className="icon-Add_User" />Dəvət et</span>
      </div>
      {/* Topic Footer */}

      {/* Other Topics */}
      <div className="topics__title">
        Oxşar mövzülar
        </div>

      {/* Other Topics  */}

    </div>

  }



  render() {
    return (
      <main>
        <div className="container">

          <Nav />

          {this.getPost()}

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

const connectedSingleTopic = connect(mapStateToProps)(SingleTopic);
export { connectedSingleTopic as SingleTopic };
