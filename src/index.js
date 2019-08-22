import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import news from './components/news';
import login from './components/login';
import 'bootstrap';
import './material-kit/assets/css/material-kit.css';
import 'react-quill/dist/quill.snow.css'; // ES6
import dashboard from './components/dashboard';
import addnews from './components/addnews';
import singlenews from './components/singlenews';
import NavBar from './components/navbar';
import Header from './components/header';

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(

  <Router>
    <React.Fragment>
      {/* <NavBar /> */}
      <Route exact path='/' component={news} />
      <Route exact path='/dashboard' component={dashboard} />
      <Route exact path='/login' component={login} />
      <Route exact path='/addnews' component={addnews} />
      <Route exact path='/singlenews/:id' component={singlenews} />
      <div>
        <p class="footer text-center"><a href="https://cosmicjs.com/add-bucket?import_bucket=5d56bf861b388168e89902a0"><img src="https://cdn.cosmicjs.com/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg" /></a></p>

      </div>
    </React.Fragment>
  </Router >,
  document.getElementById('root')
);


serviceWorker.register();
