import React, { Component } from 'react';
import newsData from './../services/news';
import { Link } from 'react-router-dom';
import Header from './header';
import styled from 'styled-components';
import ReactHTMLParser from 'react-html-parser';
import logo from '../images/logo.png';


class news extends Component {
  data;
  constructor(props) {
    super(props);
    this.state = {
      newsArray: [],
    };
    this.loginCall = this.loginCall.bind(this);
    this.dashboardCall = this.dashboardCall.bind(this);
  };

  getNews() {
    if (navigator.onLine) {
      newsData.getNews()
        .then((result) => {
          // console.log(result.data.objects);
          if (result.data.objects) {
            this.setState({ newsArray: result.data.objects })
            localStorage.setItem('news', JSON.stringify(result.data.objects))
            // console.log(this.state.newsArray)
          }

        })
    }
    else {
      this.setState({ newsArray: JSON.parse(localStorage.getItem('news')) })
    }
  }

  loginCall() {
    this.props.history.push('/login');
  }

  dashboardCall() {
    this.props.history.push('/dashboard');
  }

  render() {

    return (

      <React.Fragment>
      <div id="blogs-2"> 

        <nav class="navbar navbar-light fixed-top navbar-expand-lg">
          <ul class="nav navbar-nav">


            <a class="navbar-brand" href="#home"><img src={logo} style={{ width: "110px" }} /></a>
            <a class="navbar-brand" href="#home"><span style={{ color: "#999999", fontSize: "18px", fontWeight: " bold" }}>ISIGHT
					</span><span id="span2">| </span><span id="span3" style={{ color: "#999999" }}>RPV Blog</span></a>
          </ul>
          <ul class="navbar-nav ml-auto">
            {this.data ? (
              <button className="btn btn-success button-right" onClick={this.dashboardCall}>Dashboard</button>
            ) : (
                <button className="btn btn-success button-right" onClick={this.loginCall}>Admin Login</button>
              )}
          </ul>

        </nav>
        <Header />
        <div class="container">
          <div class="section">

            <div class="row">
              <React.Fragment>
                {this.state.newsArray.map(newsData =>
                  <div class="col-md-4">
                    <Link to={`/singlenews/${newsData._id}`} class="card-description" key={newsData._id}>
                      <Card className="card card-plain card-blog">
                        <div class="card-header card-header-image">
                          <img class="img img-raised" src={newsData.metadata.backgroundimage.url} />
                        </div>
                        <div class="card-body">
                          <h6 class="card-category text-info">{newsData.metadata.category}</h6>
                          <h3 class='card-title' key="{newsData.title}">{newsData.title}</h3>
                          <p class="card-description">
                            {ReactHTMLParser(newsData.content.slice(0, 200).concat("..."))}<a href="#">Read More</a>
                          </p>

                        </div>
                      </Card>
                    </Link>
                  </div>
                )}
              </React.Fragment>
            </div>
          </div>
        </div>
        </div>
      </React.Fragment >
    );
  }


  componentDidMount() {
    this.data = localStorage.getItem('currentUser');
    this.getNews();

  }

}



const Card = styled.div`
        `
export default news;