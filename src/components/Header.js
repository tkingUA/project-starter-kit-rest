'use strict';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

class PageHeader extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <header>
        <div className="header-content">
          <div className="header-logo">
            <Header as="h4" icon textAlign="center">
              <Icon name="users" />
              <Header.Content>
                Header Logo
              </Header.Content>
            </Header>
          </div>

          <div className="header-center-area">
            <h4>Center Item</h4>
          </div>

          <div className="header-user-area">
            <Header as="h4" icon textAlign="center">
              <Icon name="settings" />
              <Header.Content>
                User Settings
              </Header.Content>
            </Header>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(connect()(PageHeader));
