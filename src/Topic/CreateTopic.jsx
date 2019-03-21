import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class CreateTopic extends Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="create">
            <div className="create__head">
              <div className="create__title">
                <img
                  src="fonts/icons/main/New_Topic.svg"
                  alt="New topic" />
                Create New Thread
              </div>
              <span>
                Forum Guidelines
              </span>
            </div>
            <div className="create__section">
              <label className="create__label" htmlFor="title">
                Thread Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Add here" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="create__section">
                  <label
                    className="create__label"
                    htmlFor="category">
                    Select Category
                  </label>
                  <label className="custom-select">
                    <select id="category">
                      <option>Choose</option>
                      <option>
                        Choose #2
                      </option>
                      <option>
                        Choose #3
                      </option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="create__section">
                  <label
                    className="create__label"
                    htmlFor="sub-category">
                    Select Sub Category
                  </label>
                  <label className="custom-select">
                    <select id="sub-category">
                      <option>Choose</option>
                      <option>
                        Choose #2
                      </option>
                      <option>
                        Choose #3
                      </option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="create__section create__textarea">
              <label
                className="create__label"
                htmlFor="description">Description</label>
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
                <div className="create__textarea-btn">
                  <a href="#" className="btn">Preview</a>
                </div>
              </div>
              <textarea
                className="form-control"
                id="description">
                Adding amazing books to your summer reading list can be as simple as signing up for the BuzzFeed Books newsletter! You'll get a review of a new book you might love every Wednesday, plus much more twice a week: great jokes and quizzes, wonderful lists, powerful essays, all the Harry Potter and YA buzz you can handle, and of course, even more book recommendations. So make some space in your beach bag now — because you're going to have a lot to read this summer.
              </textarea>
            </div>
            <div className="create__section">
              <label className="create__label" htmlFor="tags">
                Add Tags
              </label>
              <input
                type="text"
                className="form-control"
                id="tags"
                placeholder="e.g. nature, science" />
            </div>
            <div className="create__advanced">
              <div className="row">
                <div className="col-lg-4 col-xl-4">
                  <div className="create__section">
                    <label className="create__label">
                      Who can see this?
                    </label>
                    <div className="create__radio">
                      <label className="create__box">
                        <label className="custom-radio">
                          <input
                            type="radio"
                            name="can-see"
                            defaultChecked="checked" />
                          <i />
                        </label>
                        <span>Everyone</span>
                      </label>
                      <label className="create__box">
                        <label className="custom-radio">
                          <input type="radio" name="can-see" />
                          <i />
                        </label>
                        <span>
                          Only Friends
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div className="create__section">
                    <label className="create__label">
                      Share on Social?
                    </label>
                    <div className="create__radio">
                      <label className="create__box">
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            name="share-social"
                            defaultChecked="checked" />
                          <i />
                        </label>
                        <i
                          className="fa fa-facebook-square"
                          aria-hidden="true" />
                      </label>
                      <label className="create__box">
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            name="share-social"
                            defaultChecked="checked" />
                          <i />
                        </label>
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </label>
                      <label className="create__box">
                        <label className="custom-checkbox">
                          <input type="checkbox" name="share-social" />
                          <i />
                        </label>
                        <i
                          className="fa fa-google-plus"
                          aria-hidden="true" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-5">
                  <div className="create__section">
                    <label className="create__label">
                      Is this a Mature Thread?
                    </label>
                    <div className="create__radio">
                      <label className="create__box">
                        <label className="custom-radio">
                          <input type="radio" name="mature-thread" />
                          <i />
                        </label>
                        <span>Yes</span>
                      </label>
                      <label className="create__box">
                        <label className="custom-radio">
                          <input
                            type="radio"
                            name="mature-thread"
                            defaultChecked="checked" />
                          <i />
                        </label>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="create__footer">
              <a href="#" className="create__btn-cansel btn">Cancel</a>
              <a
                href="#"
                className="create__btn-create btn btn--type-02">
                Create Thread
              </a>
            </div>
          </div>
          <div className="posts" data-visible="desktop">
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


      function mapStateToProps(state) {
          const { users, authentication } = state;
          const { user } = authentication;
          return {
              user,
              users
          };
      }

      const connectedCreateTopic = connect(mapStateToProps)(CreateTopic);
      export { connectedCreateTopic as CreateTopic };
