import React, { Component } from 'react';


class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="footer js-dropdown">
          <div className="container">
            <div className="footer__logo">
              <div>
                <img
                  src="fonts/icons/main/Logo_Forum.svg"
                  alt="logo" />
                Unity
              </div>
            </div>
            <div className="footer__nav">
              <div className="footer__tline">
                <i className="icon-Support" />
                <ul className="footer__menu">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      The Team
                    </a>
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
                            <a href="#"><i />America</a>
                          </li>
                          <li>
                            <a href="#"><i />Europe</a>
                          </li>
                          <li>
                            <a href="#"><i />Asia</a>
                          </li>
                          <li>
                            <a href="#"><i />China</a>
                          </li>
                          <li>
                            <a href="#"><i />Australia</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xs-6">
                        <h3>Language</h3>
                        <ul className="dropdown__catalog">
                          <li className="active">
                            <a href="#"><i />English</a>
                          </li>
                          <li>
                            <a href="#"><i />Espanol</a>
                          </li>
                          <li>
                            <a href="#"><i />Portugues</a>
                          </li>
                          <li>
                            <a href="#"><i />Chinese</a>
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
                    <a href="#">Teams</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">
                      Send Feedback
                    </a>
                  </li>
                </ul>
                <ul className="footer__social">
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-google-plus"
                        aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-dribbble"
                        aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cloud" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss" aria-hidden="true" />
                    </a>
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

export default Footer;
