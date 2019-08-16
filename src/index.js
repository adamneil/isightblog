import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import news from './components/news';
import login from './components/login';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
// import 'material-kit/css/material-kit.min.css';
import 'react-quill/dist/quill.snow.css'; // ES6
import dashboard from './components/dashboard';
import addnews from './components/addnews';
import singlenews from './components/singlenews';
import NavBar from './components/navbar';

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(
  <Router>
    <React.Fragment>




      <NavBar />
      <Route exact path='/' component={news} />
      <Route path='/dashboard' component={dashboard} />
      <Route path='/login' component={login} />
      <Route path='/addnews' component={addnews} />
      <Route path='/singlenews/:id' component={singlenews} />
      <div>
        <p className="footer-center">Proudly Powered by <a href="https://cosmicjs.com/">Cosmic JS</a></p>
      </div>

    </React.Fragment>
  </Router >,
  document.getElementById('root')
);


serviceWorker.register();
