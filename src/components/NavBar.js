'use strict';
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Sticky } from 'semantic-ui-react';
import { connect } from 'react-redux';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky className="navbar navbar-row">
        <nav className="navbar navbar-bg" role="navigation">
          <div className="navlinks">
            <Menu pointing secondary>

                <Menu.Item as={NavLink} exact to="/" name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick}>
                  Home
                  </Menu.Item>

                <Menu.Item as={NavLink} to="/fuel-savings" name="Demo App" active={activeItem === 'Demo App'} onClick={this.handleItemClick}>
                  Demo App
                  </Menu.Item>

                <Menu.Item as={NavLink} to="/about" name="About" active={activeItem === 'About'} onClick={this.handleItemClick}>
                  About
                  </Menu.Item>

                <Menu.Menu position="right">
                  <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
              </Menu>
          </div>
        </nav>
      </Sticky>
    );
  }
}


export default withRouter(connect()(NavBar));
