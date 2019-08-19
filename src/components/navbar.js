import React, { Component } from 'react';
import logo from '../images/logo.png';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-transparent navbar-absolute">
          <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="#home"><img src={logo} style={{width: "110px"}}/></a>
                <a class="navbar-brand navbar-left" href="#home"><span style={{color: "#ffffff", fontSize: "18px", fontWeight:" bold"}}>ISIGHT
					</span><span id="span2">| </span><span id="span3" style={{color: "#ffffff"}}>RPV Blog</span></a>
          </div>
          </div>
	</nav>



      </React.Fragment>
          );
        }
      }
      
export default NavBar