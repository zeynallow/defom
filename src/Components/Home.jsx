import React, { Component } from 'react';
import TopicPost from './Topic/Snippets/TopicPost';


class Home extends Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="nav">
            <div className="nav__categories js-dropdown">
              <div className="nav__select">
                <div
                  className="btn-select"
                  data-dropdown-btn="categories">
                  All Categories
                </div>
                <nav
                  className="dropdown dropdown--design-01"
                  data-dropdown-list="categories">
                  <ul className="dropdown__catalog row">
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-f9bc64" />Hobbies</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-348aa7" />Social</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-4436f8" />Video</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-5dd39e" />Random</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-ff755a" />Arts</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-bce784" />Tech</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-83253f" />Gaming</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-c49bbb" />Science</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-3ebafa" />Exchange</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-c6b38e" />Pets</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-a7cdbd" />Entertainment</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-525252" />Education</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-777da7" />Q&amp;As</a>
                    </li>
                    <li className="col-xs-6">
                      <a href="#" className="category"><i className="bg-368f8b" />Politics</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="nav__select">
                <div
                  className="btn-select"
                  data-dropdown-btn="tags">Tags</div>
                <div
                  className="dropdown dropdown--design-01"
                  data-dropdown-list="tags">
                  <div className="tags">
                    <a href="#" className="bg-4f80b0">gaming</a>
                    <a href="#" className="bg-424ee8">nature</a>
                    <a href="#" className="bg-36b7d7">entertainment</a>
                    <a href="#" className="bg-ef429e">selfie</a>
                    <a href="#" className="bg-7cc576">camera</a>
                    <a href="#" className="bg-3a3a17">username</a>
                    <a href="#" className="bg-6f7e9c">funny</a>
                    <a href="#" className="bg-f26522">photography</a>
                    <a href="#" className="bg-a3d39c">climbing</a>
                    <a href="#" className="bg-92278f">adventure</a>
                    <a href="#" className="bg-8781bd">dreams</a>
                    <a href="#" className="bg-f1ab32">life</a>
                    <a href="#" className="bg-3b96ca">reason</a>
                    <a href="#" className="bg-348aa7">social</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav__menu js-dropdown">
              <div className="nav__select">
                <div
                  className="btn-select"
                  data-dropdown-btn="menu">Latest</div>
                <div
                  className="dropdown dropdown--design-01"
                  data-dropdown-list="menu">
                  <ul className="dropdown__catalog">
                    <li>
                      <a href="#">Latest</a>
                    </li>
                    <li>
                      <a href="#">Unread</a>
                    </li>
                    <li>
                      <a href="#">Rising</a>
                    </li>
                    <li>
                      <a href="#">
                        Most Liked
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Follow Feed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul>
                <li className="active">
                  <a href="#">Latest</a>
                </li>
                <li>
                  <a href="#">Unread</a>
                </li>
                <li>
                  <a href="#">Rising</a>
                </li>
                <li>
                  <a href="#">
                    Most Liked
                  </a>
                </li>
                <li>
                  <a href="#">
                    Follow Feed
                  </a>
                </li>
              </ul>
            </div>
          </div>
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


              <TopicPost
                post_title="Salam"
                post_category="Game"
                post_tags={['gta','mario']}
                post_users={['zeynal','cavidan']}
                post_replies="54"
                post_views="1200"
                post_activity="11 min"
                post_pinned="true"
                post_locked="false"
                />

              <TopicPost
                post_title="Salam"
                post_category="Game"
                post_tags={['gta','mario']}
                post_users={['zeynal','cavidan']}
                post_replies="54"
                post_views="1200"
                post_activity="11 min"
                post_pinned="false"
                post_locked="true"
                />




            </div>
          </div>
        </div>
      </main>

    );
  }
}

export default Home;
