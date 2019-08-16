import React, { Component } from 'react';
import newsData from './../services/news';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

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
      <div class="row">
          <React.Fragment>
        {this.state.newsArray.map(newsData =>
            <div className="card col-md-4"> 
                <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h3 className='card-title' key="{newsData.title}"><strong>{newsData.title}</strong></h3>
                    <p key={newsData.metadata.description}>{ReactHtmlParser(newsData.metadata.description)}</p>
                    <Link to={`/singlenews/${newsData._id}`} className="btn btn-success" key={newsData._id}>Complete News..</Link>
                  </div>
                </div>
            </div>
        )}
        </React.Fragment>
        </div>
    );
  }

  componentDidMount() {
    this.data = localStorage.getItem('currentUser');
    this.getNews();

  }

}

export default news;