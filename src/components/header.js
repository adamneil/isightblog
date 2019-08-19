import React, { Component } from 'react';

class Header extends Component {
  render() {
    let background='https://www.isightrpv.com/images/frontpage1.jpg';

    return (
      <div class="page-header header-filter header-small" data-parallax="true" style={{ backgroundImage: "url("+background+")"}}>
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">A Place to explore the drone services industry</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header