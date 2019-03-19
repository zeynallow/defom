import React, { Component } from 'react';


class SingleTopic extends Component {

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
            <div className="nav__thread">
              <p>
                Thread Navigation:
              </p>
              <a
                href="#"
                className="nav__thread-btn nav__thread-btn--prev"><i className="icon-Arrow_Left" />Previous</a>
              <a
                href="#"
                className="nav__thread-btn nav__thread-btn--next">Next<i className="icon-Arrow_Right" /></a>
            </div>
          </div>
          <div className="topics">
            <div className="topics__heading">
              <h2 className="topics__heading-title">
                Which movie have you watched most recently?
              </h2>
              <div className="topics__heading-info">
                <a href="#" className="category">
                  <i className="bg-3ebafa" /> Exchange
                  </a>
                  <div className="tags">
                    <a href="#" className="bg-4f80b0">gaming</a>
                    <a href="#" className="bg-424ee8">nature</a>
                    <a href="#" className="bg-36b7d7">entertainment</a>
                  </div>
                </div>
              </div>
              <div className="topics__body">
                <div className="topics__content">
                  <div className="topic">
                    <div className="topic__head">
                      <div className="topic__avatar">
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/B.svg"
                            alt="avatar" />
                        </a>
                      </div>
                      <div className="topic__caption">
                        <div className="topic__name">
                          <a href="#">
                            Benjamin Caesar
                          </a>
                        </div>
                        <div className="topic__date">
                          <i className="icon-Watch_Later" />
                          06 May, 2017
                        </div>
                      </div>
                    </div>
                    <div className="topic__content">
                      <div className="topic__text">
                        <p>
                          Welcome to Prey. A lot of this game is going to feel familiar — you’ll see bits and pieces from a dozen well-loved games in its DNA. But that doesn’t mean you’re going to immediately understand how everything works. That’s what we’re here for. Let’s talk about some of the habits you’re going to have to pick up, concepts you’ll have to learn and choices you’re going to be making as you play.
                        </p>
                        <p>
                          We’re going to break it down into three rough categories: Your world, your enemies (and ways to kill them) and yourself.
                        </p>
                      </div>
                      <div className="topic__footer">
                        <div className="topic__footer-likes">
                          <div>
                            <a href="#">
                              <i className="icon-Upvote" />
                            </a>
                            <span>201</span>
                          </div>
                          <div>
                            <a href="#">
                              <i className="icon-Downvote" />
                            </a>
                            <span>08</span>
                          </div>
                          <div>
                            <a href="#">
                              <i className="icon-Favorite_Topic" />
                            </a>
                            <span>39</span>
                          </div>
                        </div>
                        <div className="topic__footer-share">
                          <div data-visible="desktop">
                            <a href="#">
                              <i className="icon-Share_Topic" />
                            </a>
                            <a href="#">
                              <i className="icon-Flag_Topic" />
                            </a>
                            <a href="#">
                              <i className="icon-Bookmark" />
                            </a>
                          </div>
                          <div data-visible="mobile">
                            <a href="#">
                              <i className="icon-More_Options" />
                            </a>
                          </div>
                          <a href="#">
                            <i className="icon-Reply_Fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topic">
                    <div className="topic__content">
                      <div className="topic__info">
                        <div className="topic__info-section">
                          <div>
                            <span className="topic__info-title">Created</span>
                            <div className="topic__info-avatar">
                              <a href="#" className="avatar">
                                <img
                                  src="fonts/icons/avatars/B.svg"
                                  alt="avatar" />
                              </a>
                              <span>13d</span>
                            </div>
                          </div>
                          <div>
                            <span className="topic__info-title">
                              Last reply
                            </span>
                            <div className="topic__info-avatar">
                              <a href="#" className="avatar">
                                <img
                                  src="fonts/icons/avatars/A.svg"
                                  alt="avatar" />
                              </a>
                              <span>4h</span>
                            </div>
                          </div>
                        </div>
                        <div className="topic__info-section">
                          <div>
                            <span className="topic__info-title">Replies</span>
                            <div className="topic__info-count">18</div>
                          </div>
                          <div>
                            <span className="topic__info-title">Views</span>
                            <div className="topic__info-count">205</div>
                          </div>
                          <div>
                            <span className="topic__info-title">Users</span>
                            <div className="topic__info-count">6</div>
                          </div>
                          <div>
                            <span className="topic__info-title">Likes</span>
                            <div className="topic__info-count">315</div>
                          </div>
                          <div>
                            <span className="topic__info-title">Links</span>
                            <div className="topic__info-count">7</div>
                          </div>
                        </div>
                        <a href="#" className="topic__info-more">
                          <i className="icon-Arrow_Down" />
                        </a>
                      </div>
                      <div className="topic__title">
                        <p>
                          Frequent Posters
                        </p>
                      </div>
                      <div className="topic__posters">
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/C.svg"
                            alt="avatar" />
                          <span>10</span>
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/U.svg"
                            alt="avatar" />
                          <span>5</span>
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/I.svg"
                            alt="avatar" />
                          <span>12</span>
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/K.svg"
                            alt="avatar" />
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/N.svg"
                            alt="avatar" />
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/T.svg"
                            alt="avatar" />
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/K.svg"
                            alt="avatar" />
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/L.svg"
                            alt="avatar" />
                        </a>
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/R.svg"
                            alt="avatar" />
                        </a>
                      </div>
                      <div className="topic__title">
                        <p>
                          Popular Links
                        </p>
                      </div>
                      <div className="topic__list">
                        <ul>
                          <li>
                            <span>12</span>
                            <a href="#">
                              Deepest and darkest secrets. <span>imgur.com</span>
                          </a>
                        </li>
                        <li>
                          <span>1</span>
                          <a href="#">
                            Help Center. <span>techlabs.net</span>
                        </a>
                      </li>
                      <li>
                        <span>7</span>
                        <a href="#">
                          Best 20 youtube videos. <span>youtube.com</span>
                      </a>
                    </li>
                    <li>
                      <span>19</span>
                      <a href="#">
                        Bootstrap 4, things you need to know.
                      </a>
                    </li>
                    <li>
                      <span>3</span>
                      <a href="#">
                        Best Simpson jokes.
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topic__title">
                  <p>
                    There are <span>81 replies</span> with an estimated read time of <span>
                    11 minutes.
                  </span>
                </p>
              </div>
              <div className="topic__btns">
                <a href="#" className="btn btn--type-02">Summarize <span data-visible="desktop">This</span>Topic</a>
                <div className="topic__select">
                  <p>
                    Sort replies by:
                  </p>
                  <div className="btn-select">
                    <i className="icon-Favorite_Topic" />
                    Most Liked
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/N.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Nicolas</a>
                </div>
                <div className="topic__date">
                  <div className="topic__user topic__user--pos-r">
                    <i className="icon-Reply_Fill" />
                    <a href="#" className="avatar">
                      <img
                        src="fonts/icons/avatars/B.svg"
                        alt="avatar" />
                    </a>
                    <a href="#" className="topic__user-name">
                      Benjamin Caesar
                    </a>
                  </div>
                  <i className="icon-Watch_Later" />
                  06 May, 2017
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  I am using BootStrap 4, but they are asking me to use PHP framework, which I won't do. My code is secure against SQL injection, XSS and all other attacks, it is well organized, i was using OOP. I just think CodeCanyon will always find a reason to reject my work....
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <a href="#">
                      <i className="icon-Upvote" />
                    </a>
                    <span>137</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Downvote" />
                    </a>
                    <span>02</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Favorite_Topic" />
                    </a>
                    <span>46</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <div data-visible="desktop">
                    <a href="#">
                      <i className="icon-Share_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Flag_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Bookmark" />
                    </a>
                  </div>
                  <div data-visible="mobile">
                    <a href="#">
                      <i className="icon-More_Options" />
                    </a>
                  </div>
                  <a href="#">
                    <i className="icon-Reply_Fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="topics__promo">
            <a href="#">
              <img src="images/topic-promo.jpg" alt="promo" />
            </a>
          </div>
          <div className="topic">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/T.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Tesla</a>
                </div>
                <div className="topic__date">
                  <i className="icon-Watch_Later" />
                  07 May, 2017
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  Yeah! This is really bad. Rejecting an item because its not using a PHP framework(no matter what the script is doing) is a wrong move I think. There are a lot of people reporting this problem(Rejected because of not using a framework).
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <a href="#">
                      <i className="icon-Upvote" />
                    </a>
                    <span>71</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Downvote" />
                    </a>
                    <span>06</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Favorite_Topic" />
                    </a>
                    <span>42</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Reply_Empty" />
                    </a>
                    <span>01</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <div data-visible="desktop">
                    <a href="#">
                      <i className="icon-Share_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Flag_Topic" />
                    </a>
                    <a href="#" className="active">
                      <i className="icon-Already_Bookmarked" />
                    </a>
                  </div>
                  <div data-visible="mobile">
                    <a href="#">
                      <i className="icon-More_Options" />
                    </a>
                  </div>
                  <a href="#">
                    <i className="icon-Reply_Fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="topic topic--comment">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/L.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Larry</a>
                </div>
              </div>
              <a
                href="#"
                className="topic__arrow topic__arrow--up">
                <i className="icon-Arrow_Up" />
              </a>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  Can you stop ADP, and create new option for author can create coupon code, Author will give for their customer. Its better than now.
                </p>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/K.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Kevin</a>
                </div>
                <div className="topic__date">
                  <i className="icon-Watch_Later" />
                  08 May, 2017
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  I will, but I'm not doing it for me, i'll open ticket for the community.<br />I got accepted with no problems on other marketplace.
                </p>
                <div className="topic topic--answer">
                  <div className="topic__head">
                    <div className="topic__caption">
                      <div className="topic__user">
                        <a href="#" className="avatar">
                          <img
                            src="fonts/icons/avatars/T.svg"
                            alt="avatar" />
                        </a>
                        <a href="#" className="topic__user-name">Tesla</a>
                      </div>
                    </div>
                    <a href="#" className="topic__arrow">
                      <i className="icon-Arrow_Up" />
                    </a>
                  </div>
                  <div className="topic__content">
                    <div className="topic__text">
                      <p>
                        Yeah! This is really bad. Rejecting an item because its not using a PHP framework(no matter what the script is doing) is a wrong move I think.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  Subscribers may download more than an ad-hoc purchaser on a marketplace, but by retaining subscribers over time (paying money every month), there’s more money in total for contributors.
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <a href="#">
                      <i className="icon-Upvote" />
                    </a>
                    <span>415</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Downvote" />
                    </a>
                    <span>28</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Favorite_Topic" />
                    </a>
                    <span>49</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <div data-visible="desktop">
                    <a href="#">
                      <i className="icon-Share_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Flag_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Bookmark" />
                    </a>
                  </div>
                  <div data-visible="mobile">
                    <a href="#">
                      <i className="icon-More_Options" />
                    </a>
                  </div>
                  <a href="#">
                    <i className="icon-Reply_Fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="topic topic--selected">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/C.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Callis</a>
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  This post has been hidden by a moderator. Received too much downvotes.
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <a href="#">
                      <i className="icon-Downvote" />
                    </a>
                    <span>617</span>
                  </div>
                </div>
                <div className="topic__footer-show">
                  <a href="#" className="btn">
                    Show me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/R.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Robin</a>
                </div>
                <div className="topic__date">
                  <i className="icon-Watch_Later" />
                  09 May, 2017
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  Does our 60% more expensive milk go well with your 60% more expensive coffee?
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <a href="#">
                      <i className="icon-Upvote" />
                    </a>
                    <span>21</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Downvote" />
                    </a>
                    <span>03</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Favorite_Topic" />
                    </a>
                    <span>08</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <div data-visible="desktop">
                    <a href="#">
                      <i className="icon-Share_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Flag_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Bookmark" />
                    </a>
                  </div>
                  <div data-visible="mobile">
                    <a href="#">
                      <i className="icon-More_Options" />
                    </a>
                  </div>
                  <a href="#">
                    <i className="icon-Reply_Fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="topic__head">
              <div className="topic__avatar">
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/L.svg"
                    alt="avatar" />
                </a>
              </div>
              <div className="topic__caption">
                <div className="topic__name">
                  <a href="#">Larry</a>
                </div>
                <div className="topic__date">
                  <div className="topic__user topic__user--pos-r">
                    <i className="icon-Reply_Fill" />
                    <a href="#" className="avatar">
                      <img
                        src="fonts/icons/avatars/T.svg"
                        alt="avatar" />
                    </a>
                    <a href="#" className="topic__user-name">Tesla</a>
                  </div>
                  <i className="icon-Watch_Later" />
                  3d
                </div>
              </div>
            </div>
            <div className="topic__content">
              <div className="topic__text">
                <p>
                  Can you stop ADP, and create new option for author can create coupon code, Author will give for their customer. Its better than now.
                </p>
              </div>
              <div className="topic__footer">
                <div className="topic__footer-likes">
                  <div>
                    <a href="#">
                      <i className="icon-Upvote" />
                    </a>
                    <span>139</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Downvote" />
                    </a>
                    <span>32</span>
                  </div>
                  <div>
                    <a href="#">
                      <i className="icon-Favorite_Topic" />
                    </a>
                    <span>68</span>
                  </div>
                </div>
                <div className="topic__footer-share">
                  <div data-visible="desktop">
                    <a href="#">
                      <i className="icon-Share_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Flag_Topic" />
                    </a>
                    <a href="#">
                      <i className="icon-Bookmark" />
                    </a>
                  </div>
                  <div data-visible="mobile">
                    <a href="#">
                      <i className="icon-More_Options" />
                    </a>
                  </div>
                  <a href="#">
                    <i className="icon-Reply_Fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topics__calendar">
          <div className="calendar">
            <div className="calendar__top">
              <a
                href="#"
                className="calendar__btn calendar__btn--c-01">
                <i className="icon-Calender" />
              </a>
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
              <a
                href="#"
                className="calendar__btn calendar__btn--c-01">
                <i className="icon-Track" />
              </a>
              <a
                href="#"
                className="calendar__btn calendar__btn--c-02">
                <i className="icon-Reply_Fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="topics__title">
        <i className="icon-Watch_Later" />
        This topic will close 6 months after the last reply.
      </div>
      <div className="topics__control">
        <a href="#" className="btn"><i className="icon-Bookmark" />Bookmark</a>
        <a href="#" className="btn"><i className="icon-Share_Topic" />Share</a>
        <a href="#" className="btn"><i className="icon-Flag_Topic" />Flag</a>
        <a href="#" className="btn"><i className="icon-Add_User" />Invite</a>
        <a href="#" className="btn"><i className="icon-Track" />Track</a>
        <a
          href="#"
          className="btn btn--type-02"
          data-visible="desktop"><i className="icon-Reply_Fill" />Reply</a>
      </div>
      <div className="topics__title">
        Suggested Topics
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
        <div className="posts__item">
          <div className="posts__section-left">
            <div className="posts__topic">
              <div className="posts__content">
                <a href="#">
                  <h3>
                    Current news and discussion
                  </h3>
                </a>
              </div>
            </div>
            <div className="posts__category">
              <a href="#" className="category"><i className="bg-368f8b" />Politics</a>
            </div>
          </div>
          <div className="posts__section-right">
            <div className="posts__users">
              <div>
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/A.svg"
                    alt="avatar" />
                </a>
              </div>
              <div>
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/G.svg"
                    alt="avatar" />
                </a>
              </div>
              <div>
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/P.svg"
                    alt="avatar" />
                </a>
              </div>
            </div>
            <div className="posts__replies">31</div>
            <div className="posts__views">14.5k</div>
            <div className="posts__activity">13d</div>
          </div>
        </div>
        <div className="posts__item bg-f2f4f6">
          <div className="posts__section-left">
            <div className="posts__topic">
              <div className="posts__content">
                <a href="#">
                  <h3>
                    Get your username drawn by the other users of unity! or a drawing based on what you do
                  </h3>
                </a>
                <div className="posts__tags tags">
                  <a href="#" className="bg-4f80b0">gaming</a>
                  <a href="#" className="bg-424ee8">nature</a>
                  <a href="#" className="bg-36b7d7">entertainment</a>
                </div>
              </div>
            </div>
            <div className="posts__category">
              <a href="#" className="category"><i className="bg-4436f8" />Video</a>
            </div>
          </div>
          <div className="posts__section-right">
            <div className="posts__users">
              <div>
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/L.svg"
                    alt="avatar" />
                </a>
              </div>
              <div>
                <a href="#" className="avatar">
                  <img
                    src="fonts/icons/avatars/T.svg"
                    alt="avatar" />
                </a>
              </div>
            </div>
            <div className="posts__replies">252</div>
            <div className="posts__views">396</div>
            <div className="posts__activity">13m</div>
          </div>
        </div>
        <div className="posts__item">
          <div className="posts__section-left">
            <div className="posts__topic">
              <div className="posts__content">
                <a href="#">
                  <h3>
                    Which movie have you watched most recently?
                  </h3>
                </a>
              </div>
            </div>
            <div className="posts__category">
              <a href="#" className="category">
                <i className="bg-3ebafa" /> Exchange
                </a>
              </div>
            </div>
            <div className="posts__section-right">
              <div className="posts__users">
                <div>
                  <a href="#" className="avatar">
                    <img
                      src="fonts/icons/avatars/E.svg"
                      alt="avatar" />
                  </a>
                </div>
                <div>
                  <a href="#" className="avatar">
                    <img
                      src="fonts/icons/avatars/I.svg"
                      alt="avatar" />
                  </a>
                </div>
                <div>
                  <a href="#" className="avatar">
                    <img
                      src="fonts/icons/avatars/R.svg"
                      alt="avatar" />
                  </a>
                </div>
              </div>
              <div className="posts__replies">207</div>
              <div className="posts__views">7.5k</div>
              <div className="posts__activity">41m</div>
            </div>
          </div>
          <div className="posts__item posts__item--bg-gradient">
            <div className="posts__section-left">
              <div className="posts__topic">
                <div className="posts__content">
                  <a href="#">
                    <h3>
                      <span>
                        This post contails spoiler about
                      </span> Star Wars Movie.
                    </h3>
                  </a>
                </div>
              </div>
              <div className="posts__category">
                <a href="#" className="category">
                  <i className="bg-777da7" /> Q&amp;As
                  </a>
                </div>
              </div>
              <div className="posts__section-right">
                <div className="posts__users">
                  <div>
                    <a href="#" className="avatar">
                      <img
                        src="fonts/icons/avatars/F.svg"
                        alt="avatar" />
                    </a>
                  </div>
                </div>
                <div className="posts__replies">2.3k</div>
                <div className="posts__views">2.0k</div>
                <div className="posts__activity">1h</div>
              </div>
            </div>
            <div className="posts__item">
              <div className="posts__section-left">
                <div className="posts__topic">
                  <div className="posts__content">
                    <a href="#">
                      <h3>
                        Take a picture of what you’re doing at this very moment
                      </h3>
                    </a>
                    <div className="posts__tags tags">
                      <a href="#" className="bg-ec008c">selfie</a>
                      <a href="#" className="bg-7cc576">camera</a>
                    </div>
                  </div>
                </div>
                <div className="posts__category">
                  <a href="#" className="category">
                    <i className="bg-c6b38e" /> Pets
                    </a>
                  </div>
                </div>
                <div className="posts__section-right">
                  <div className="posts__users">
                    <div>
                      <a href="#" className="avatar">
                        <img
                          src="fonts/icons/avatars/C.svg"
                          alt="avatar" />
                      </a>
                    </div>
                    <div>
                      <a href="#" className="avatar">
                        <img
                          src="fonts/icons/avatars/U.svg"
                          alt="avatar" />
                      </a>
                    </div>
                    <div>
                      <a href="#" className="avatar">
                        <img
                          src="fonts/icons/avatars/I.svg"
                          alt="avatar" />
                      </a>
                    </div>
                  </div>
                  <div className="posts__replies">441</div>
                  <div className="posts__views">3.1k</div>
                  <div className="posts__activity">6h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>



    );
  }
}

export default SingleTopic;
