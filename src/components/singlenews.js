import React, { Component } from 'react';
import newsData from './../services/news';
import ReactHTMLParser from 'react-html-parser';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../CSS/singlenews.css';
import ReactDOM from 'react-dom';

class singlenews extends Component {
  // singleNewsData = [];
  constructor(props) {
    super(props);
    this.state = {
      newsId: '',
      allNews: [],
      newsArray: [],
      singleNewsData: [],
      singleNewsURL: '',
      name: '',
      comment: '',
      message: '',
      allComments: [],
      offset: 0

    };
    this.parallaxShift = this.parallaxShift.bind(this)
    this.DivToFocus = React.createRef() 
    // this.singleNews = this.singleNews.bind(this);
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift, true);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  handleClick = (event) => {
    //.current is verification that your element has rendered
    const scrollNode = ReactDOM.findDOMNode(this.refs.main);
    scrollNode.scrollIntoView({behavior: 'smooth' ,block: 'start', inline: 'start'});
}

  singleNews() {
    newsData.getNews()
      .then((result) => {
        console.log(result.data.objects);
        var allData = result.data.objects;
        this.setState({ allNews: result.data.objects });

        var singleNewsFilteredData = allData.filter((
          news) => news._id === this.state.newsId);
        this.setState({ singleNewsData: singleNewsFilteredData[0] });
        this.setState({ singleNewsURL: this.state.singleNewsData.metadata.backgroundimage.url })
      })
  }






  render() {
    const content = ReactHTMLParser(this.state.singleNewsData.content);
    const description = content.slice(0, 1);



    return (
      <React.Fragment>

        <div class="page-header" style={{ backgroundImage: "url(" + this.state.singleNewsURL + ")" }}  >
          <div class="container" >
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center" >
                <h1 class="title">{this.state.singleNewsData.title}</h1>
                <h4>{description}</h4>
                <br />
                <a onClick={this.handleClick} class="btn btn-rose btn-round btn-lg">
                  Read More
              </a>
              </div>
            </div>
          </div>
        </div >
        <div class="main main-raised" ref='main'  >
          <div class="wrapper">
            <div class="container" id="blog-post">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                  <h3 class="title">{this.state.singleNewsData.title}</h3>
                  <p className="content">{content}</p>
                </div>
              </div>
            </div>

          </div>
          <div class="container" style={{ bottom: this.state.offset / 2 }}>
            <br />
            <h2 class='title text-center'>Other News</h2>

            <div class="row">
              <React.Fragment>
                {this.state.allNews.slice(0, 3).map(newsData =>
                  <div class="col-md-4">
                    <Link to={`/singlenews/${newsData._id}`} class="card-description" key={newsData._id}>
                      <Card className="card card-plain card-blog">
                        <div class="card-header card-header-image">
                          <img class="img img-raised" src={newsData.metadata.backgroundimage.url} />
                        </div>
                        <div class="card-body">
                          <h6 class="card-category text-info">{newsData.metadata.category}</h6>
                          <h3 class='card-title' key="{newsData.title}">{newsData.title}</h3>
                          <p class="card-description" >
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
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.singleNews();
    this.setState({ newsId: this.props.match.params.id });
    window.addEventListener('scroll', this.parallaxShift, true);
    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== this.state.newsId) {
      this.setState({ newsId: this.props.match.params.id });
      this.singleNews();
      window.scrollTo(0, 0)

    }
  }
}

const Card = styled.div``;
export default singlenews;