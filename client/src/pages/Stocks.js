import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getUsers()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
      <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header class="demo-drawer-header">
          <img src="https://images.pexels.com/photos/36715/pigeon-flight-twig.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="Logo"/>
          <div class="logoSpot">
          <div class="mdl-layout-spacer"></div>
          </div>
        </header>
      </div>
      <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">home</i>Home</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">person</i>Your Stocks</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">trending_up</i>Stock Market</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">pie_chart</i>Budget</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--amber-400 material-icons" role="presentation">verified_user</i>Log in / Log out</a>
       <div class="mdl-layout-spacer"></div>
      </nav>
    

    <main class="mdl-layout__content mdl-color--grey-100">
      <div class="mdl-grid demo-content">
        <div class="demo-charts mdl-color--blue-grey-900 mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
          <img class="frontIMG" src="car3.png"/>
          </div>
          
          
          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
              <div class="mdl-card__title mdl-card--expand mdl-color--amber-300">
                <h2 class="mdl-card__title-text " id="yellowCard">Stocks</h2>
              </div>
              </div>
              </div>

              <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                  <div class="mdl-card__title mdl-card--expand mdl-color--blue-grey-800">
                    <h2 class="mdl-card__title-text " id="blueCard">Stocks</h2>
                  </div>
                  </div>
                  </div>
                  <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                    <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                      <div class="mdl-card__title mdl-card--expand mdl-color--amber-300">
                        <h2 class="mdl-card__title-text ">Stocks</h2>
                      </div>
                      </div> 
                      </div>
                      <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                        <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                          <div class="mdl-card__title mdl-card--expand mdl-color--blue-grey-800">
                            <h2 class="mdl-card__title-text " id="blueCard">News</h2>
                          </div>
                          </div>
                          </div>
          
                          <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                            <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                              <div class="mdl-card__title mdl-card--expand mdl-color--amber-300">
                                <h2 class="mdl-card__title-text " color="">News</h2>
                              </div>
                              </div>
                              </div>
                              <div class="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                                <div class="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                                  <div class="mdl-card__title mdl-card--expand mdl-color--blue-grey-800">
                                    <h2 class="mdl-card__title-text " id="blueCard">News</h2>
                                  </div>
                                  </div>
                                  </div>
</div>

        </main> 
        </div>
    );
  }
}

export default Books;
