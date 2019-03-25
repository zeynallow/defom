import React, { Component } from 'react';
import { connect } from 'react-redux';


class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="footer js-dropdown">
          <div className="container">
            <div className="footer__logo">
              <div>
                <img
                  src="/fonts/icons/main/Logo_Forum.svg"
                  alt="logo" />
                Unity
              </div>
            </div>
            <div className="footer__nav">
              <div className="footer__tline">
                <i className="icon-Support" />
                <ul className="footer__menu">
                  <li>
                    <span>Support</span>
                  </li>
                  <li>
                    <span>About</span>
                  </li>
                  <li>
                    <span>
                      Contact Us
                    </span>
                  </li>
                  <li>
                    <span>
                      The Team
                    </span>
                  </li>
                </ul>
                <div className="footer__language">
                  <div
                    className="footer__language-btn"
                    data-dropdown-btn="language">
                    Americas - English
                    <i className="icon-Arrow_Below" />
                  </div>
                  <div
                    className="footer__language-dropdown dropdown dropdown--design-01 dropdown--reverse-y"
                    data-dropdown-list="language">
                    <div className="row">
                      <div className="col-xs-6">
                        <h3>Region</h3>
                        <ul className="dropdown__catalog">
                          <li className="active">
                            <span><i />America</span>
                          </li>
                          <li>
                            <span><i />Europe</span>
                          </li>
                          <li>
                            <span><i />Asia</span>
                          </li>
                          <li>
                            <span><i />China</span>
                          </li>
                          <li>
                            <span><i />Australia</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xs-6">
                        <h3>Language</h3>
                        <ul className="dropdown__catalog">
                          <li className="active">
                            <span><i />English</span>
                          </li>
                          <li>
                            <span><i />Espanol</span>
                          </li>
                          <li>
                            <span><i />Portugues</span>
                          </li>
                          <li>
                            <span><i />Chinese</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__bline">
                <ul className="footer__menu">
                  <li className="footer__copyright">
                    <span>
                      © 2019. Defom
                    </span>
                  </li>
                  <li>
                    <span>Teams</span>
                  </li>
                  <li>
                    <span>Privacy</span>
                  </li>
                  <li>
                    <span>
                      Send Feedback
                    </span>
                  </li>
                </ul>
                <ul className="footer__social">
                  <li>
                    <span>
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <i
                        className="fa fa-google-plus"
                        aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <i
                        className="fa fa-dribbble"
                        aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-cloud" aria-hidden="true" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-rss" aria-hidden="true" />
                    </span>
                  </li>
                </ul>
                <div
                  className="footer__language-btn-m"
                  data-dropdown-btn="language">
                  Americas - English
                  <i className="icon-Arrow_Below" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}


function mapStateToProps(state) {
    const { account, authentication,category } = state;
    const { user } = authentication;
    return {
        user,
        account,
        category
    };
}

const connectedFooter = connect(mapStateToProps)(Footer);
export { connectedFooter as Footer };
