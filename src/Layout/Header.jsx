import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { accountActions, categoryActions } from '../_actions';

class Header extends Component {



  componentDidMount() {
    this.props.dispatch(accountActions.getAccountInformation());
    this.props.dispatch(categoryActions.getCategories());
  }


  render() {

    const { account } = this.props;

    var AccountBlock = <div className="header__user">
      <Link className="header__user-btn" to="/login">
        Login
      </Link>
    </div>

    if (account.information) {
     AccountBlock = <div className="header__user">
        <div className="header__user-btn" data-dropdown-btn="user">
          <img src={"/fonts/icons/avatars/" + account.information.username.charAt(0).toUpperCase() + ".svg"} alt="avatar" />
          {account.information.username}
          <i className="icon-Arrow_Below" />
        </div>
        <nav
          className="dropdown dropdown--design-01"
          data-dropdown-list="user">
          <div>
            <div className="dropdown__icons">
              <Link to=""> 
                <i className="icon-Bookmark" />
              </Link>
              <Link to=""> 
                <i className="icon-Message" />
              </Link>
              <Link to=""> 
                <i className="icon-Preferences" />
              </Link>
              <Link to="/login">
                <i className="icon-Logout" />
              </Link>
            </div>
          </div>
          <div>
            <ul className="dropdown__catalog">
              <li>
                <Link to=""> Dashboard</Link>
              </li>
              <li>
                <Link to=""> Badges</Link>
              </li>
              <li>
                <Link to=""> 
                  My Groups
                </Link>
              </li>
              <li>
                <Link to=""> Notifications</Link>
              </li>
              <li>
                <Link to=""> Topics</Link>
              </li>
              <li>
                <Link to=""> Likes</Link>
              </li>
              <li>
                <Link to=""> Solved</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    }


    return (
      <header>
        <div className="header js-header js-dropdown">
          <div className="container">

            <Link to={"/home"}>
              <div className="header__logo">
                <h1>
                  <img
                    src="/fonts/icons/main/Logo_Forum.svg"
                    alt="logo" />
                </h1>
                <div className="header__logo-btn"> Defom </div>
              </div>
            </Link>

            <div className="header__search">
              <form action="#">
                <label>
                  <i className="icon-Search js-header-search-btn-open" />
                  <input
                    type="search"
                    placeholder="Search all forums"
                    className="form-control" />
                </label>
              </form>
              <div className="header__search-close js-header-search-btn-close">
                <i className="icon-Cancel" />
              </div>
            </div>

            <div className="header__notification">
              <div
                className="header__notification-btn"
                data-dropdown-btn="notification">
                <i className="icon-Notification" />
                <span>6</span>
              </div>
              <div
                className="dropdown dropdown--design-01"
                data-dropdown-list="notification">
                <div>
                  <Link to=""> 
                    <i className="icon-Favorite_Topic" />
                    <p>
                      Roswell . 16 feb, 17
                  <span>
                        Which movie have you watched recently?
                  </span>
                    </p>
                  </Link>
                  <Link to=""> 
                    <i className="icon-Reply_Empty" />
                    <p>
                      Callis . 18 feb, 17
                  <span>
                        I got an amzon thingie!
                  </span>
                    </p>
                  </Link>
                  <Link to=""> 
                    <i className="icon-Share_Topic" />
                    <p>
                      Charlie . 22 feb, 17
                  <span>
                        Need Video file of that cat.
                  </span>
                    </p>
                  </Link>
                  <Link to=""> 
                    <i className="icon-Pencil" />
                    <p>
                      Greentea . 22 feb, 17
                  <span>
                        New Facebook like and share button.
                  </span>
                    </p>
                  </Link>
                  <span>
                    <Link to=""> Bütün bildirişləri göstər </Link>
                  </span>
                </div>
              </div>
            </div>

            {/*AccountBlock*/}

            {AccountBlock}

            {/*AccountBlock*/}

          </div>
          <div className="header__offset-btn">
            <Link to="/create-topic">
              <img
                src="/fonts/icons/main/New_Topic.svg"
                alt="New Topic" />
            </Link>
          </div>
        </div>
      </header>

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

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
