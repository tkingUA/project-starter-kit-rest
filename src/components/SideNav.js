import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu, Sticky } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleContextRef = this.handleContextRef.bind(this);
    }

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

    handleContextRef = (contextRef) => {
        this.setState({ contextRef });
    }

    render() {
        const { activeItem, contextRef } = this.state;

        return (
            <div className="sidebar navigation">
                <div className="sidebar navigation col">
                <Sticky context={contextRef}>
                    <Menu vertical>
                        <Menu.Item className="logo-container">
                            <Icon className="main-content-logo" name="code" />
                        </Menu.Item>
                        <Menu.Item>
                            <Input placeholder="Search..." />
                        </Menu.Item>

                        <Menu.Item>
                            Home
                        <Menu.Menu>
                            <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                                Search
                            </Menu.Item>
                            <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                                Add
                            </Menu.Item>
                            <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                                Remove
                            </Menu.Item>
                            <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                                Search
                            </Menu.Item>
                            <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                                Add
                            </Menu.Item>
                            <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                                Remove
                            </Menu.Item>
                            <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                                Search
                            </Menu.Item>
                            <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                                Add
                            </Menu.Item>
                            <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                                Remove
                            </Menu.Item>
                            <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                                Search
                            </Menu.Item>
                            <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                                Add
                            </Menu.Item>
                            <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                                Remove
                            </Menu.Item>
                            <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick}>
                                Search
                            </Menu.Item>
                            <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick}>
                                Add
                            </Menu.Item>
                            <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                                Remove
                            </Menu.Item>


                        </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item name="browse" active={activeItem === 'browse'} onClick={this.handleItemClick}>
                            <Icon name="grid layout" />
                            Browse
                    </Menu.Item>
                        <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick}>
                            Messages
                    </Menu.Item>

                        <Dropdown item text="More">
                            <Dropdown.Menu>
                                <Dropdown.Item icon="edit" text="Edit Profile" />
                                <Dropdown.Item icon="globe" text="Choose Language" />
                                <Dropdown.Item icon="settings" text="Account Settings" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                    </Sticky>
                </div>
            </div>

        );
    }
}

export default connect()(SideNav);
