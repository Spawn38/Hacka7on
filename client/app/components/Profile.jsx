import React, {Component, PropTypes} from 'react';
import { Meteor } from 'meteor/meteor'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Avatar,Popover,PopoverAnimationVertical,List,ListItem,FontIcon,Menu,MenuItem} from 'material-ui';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: 1,
    };
  }

  itemTapped(event,menuItem,index) {
      event.preventDefault();
      this.props.dispatch(push(menuItem.ref));
  }
  

  handleTouchTap(event) {    
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  handleChange(event, index, value) {
    this.setState({value});
  } 

  render() { 
    return (
      <div>    
        <List className="noPadding">
          <ListItem    
           onTouchTap={this.handleTouchTap.bind(this)}
           leftAvatar={
            <Avatar icon={<FontIcon className="material-icons">settings</FontIcon>} />
           }></ListItem>
        </List>                
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
          animation={PopoverAnimationVertical}>
          <Menu value={this.state.value} onChange={this.handleChange.bind(this)} onItemTouchTap={this.itemTapped.bind(this)}>
            <MenuItem primaryText="Settings" ref="Settings" value={1}  leftIcon={<FontIcon className="material-icons">settings</FontIcon>}  />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default connect()(Profile);