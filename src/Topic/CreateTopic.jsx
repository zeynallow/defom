import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class CreateTopic extends Component {

 //Constructor
 constructor(props) {

  super(props);

  this.state = {
    title: "",
    category: "",
    text: ""

  }

  this.handleChange = this.handleChange.bind(this);
  this.postSubmit = this.postSubmit.bind(this);

}


  /*
  * Post Submit
  */

  postSubmit(event) {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.key) {

      var postData = {
        "title": this.state.title,
        "category": this.state.category,
        "text": this.state.text,
        "post_success":false,
        "post_slug":"",
        "post_id":""
      }


      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': 'Token ' + user.key,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      };

      fetch('http://localhost:8000/api/v1/topic/posts/', requestOptions)
        .then((response) => response.json())
        .then((post) => {

          if (post.success) {
            this.setState({
              post_success:true,
              post_slug:post.post_slug,
              post_id:post.post_id
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


  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {

    if (this.state.post_success) {
        return <Redirect to={"/topic/"+this.state.post_id+"/"+this.state.post_slug} />
    }

    const { category } = this.props;
    let getCategories = []

    if(category.categories){
      getCategories = category.categories;
    }

    return (
      <main>
        <div className="container">
          <div className="create">
            <form onSubmit={this.postSubmit}>
              <div className="create__head">
                <div className="create__title">
                  <img src="fonts/icons/main/New_Topic.svg" alt="New topic" />
                  Yeni mövzü yarat
              </div>
              </div>
              <div className="create__section">
                <label className="create__label" htmlFor="title">
                  Mövzünün başlığı
              </label>
                <input type="text" onChange={this.handleChange} value={this.state.title} className="form-control" name="title" id="title" placeholder="Başlığı daxil edin" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="create__section">
                    <label className="create__label" htmlFor="category">
                      Kateqoriyanı seçin
                  </label>
                    <label className="custom-select">
                      <select onChange={this.handleChange} value={this.state.category} name="category" id="category">
                        <option value="0">Seçin</option>
                        {
                           getCategories.map((cat,index) => {
                              return <option key={index} value={cat.id}>{cat.title}</option>
                          })
                         }
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="create__section create__textarea">
                <label
                  className="create__label"
                  htmlFor="description">Mətn</label>
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
                <textarea onChange={this.handleChange} value={this.state.text} className="form-control" name="text" id="description"></textarea>
              </div>
              <div className="create__advanced">
                <div className="row">
                  <div className="col-lg-4 col-xl-4">
                    <div className="create__section">
                      <label className="create__label">
                        Kimlər bu yazını görsun?
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
                          <span>Hər kəs</span>
                        </label>
                        <label className="create__box">
                          <label className="custom-radio">
                            <input type="radio" name="can-see" />
                            <i />
                          </label>
                          <span>
                            Yalnız izləyicilərim
                        </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="create__section">
                      <label className="create__label">
                        Sosial şəbəkələrdə paylaş
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-5">
                    <div className="create__section">
                      <label className="create__label">
                        Gizli paylaşım
                    </label>
                      <div className="create__radio">
                        <label className="create__box">
                          <label className="custom-radio">
                            <input type="radio" name="mature-thread" />
                            <i />
                          </label>
                          <span>Bəli</span>
                        </label>
                        <label className="create__box">
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="mature-thread"
                              defaultChecked="checked" />
                            <i />
                          </label>
                          <span>Xeyir</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create__footer">
                <button className="create__btn-cansel btn">İmtina</button>
                <button type="submit" className="create__btn-create btn btn--type-02">Yarat</button>
              </div>
            </form>
          </div>
        </div>
      </main>

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

const connectedCreateTopic = connect(mapStateToProps)(CreateTopic);
export { connectedCreateTopic as CreateTopic };
