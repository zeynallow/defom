import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Nav extends Component {


  getCategories() {
    const { category } = this.props;
    console.log(category);
    if (category.categories) {
      return category.categories.map((cat, index) => {
        return <li key={index} className="col-xs-6">
          <Link to={"/category/" + cat.id + "/" + cat.slug} className="category"><i className={cat.color} />{cat.title}</Link>
        </li>
      })
    }
  }

  render() {

    return (

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
                {this.getCategories()}
              </ul>
            </nav>
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
                  <Link to="">Latest</Link>
                </li>
                <li>
                  <Link to="">Unreadaa</Link>
                </li>
                <li>
                  <Link to="">Rising</Link>
                </li>
                <li>
                  <Link to="">
                    Most Liked
                    </Link>
                </li>
                <li>
                  <Link to="">
                    Follow Feed
                 </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li className="active">
              <Link to="">Latest</Link>
            </li>
            <li>
              <Link to="">Unread</Link>
            </li>
            <li>
              <Link to="">Rising</Link>
            </li>
            <li>
              <Link to="">
                Most Liked
                </Link>
            </li>
            <li>
              <Link to="">
                Follow Feed
                </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { category } = state;
  return {
    category
  };
}

const connectedNav = connect(mapStateToProps)(Nav);
export { connectedNav as Nav }
