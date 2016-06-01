import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {AppBar,Drawer,MenuItem} from 'material-ui';
import {connect} from 'react-redux';
import {clearToastr} from '../actions/toastrActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Toastr extends Component {

 	toastClear() { 		
 		this.props.dispatch(clearToastr());
 	}

	componentDidUpdate() {
	 	if(this.props.toastr.message) {
			Meteor.setTimeout(this.toastClear.bind(this), this.props.delay);	
		}
	}
	
	toastRender() {			
		if(this.props.toastr.message) {		

			let toasterClass = classNames({
				'toast' : true,
				'toast-success' : this.props.toastr.level == 'SUCCESS',
				'toast-error' : this.props.toastr.level == 'ERROR',
				'toast-info' : this.props.toastr.level == 'INFO',
				'toast-warning' : this.props.toastr.level == 'WARNING',
			});

			return (<div id="toast-container" className="toast-bottom-full-width">
						<div className={toasterClass}>
							<div className="toast-message"> 
								{this.props.toastr.message}
							</div>
						</div>
					</div>);
		} else {
			return ;
		}
	} 	 		 	

	render() {			
		let display = this.toastRender();
	 	return (<ReactCSSTransitionGroup 
					transitionName="example" 
					transitionEnterTimeout={600} 
					transitionLeaveTimeout={400}>
					{display}</ReactCSSTransitionGroup>);
	}
}

Toastr.propTypes = {  
  delay: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    toastr: state.toastr
  }
}

export default connect(mapStateToProps)(Toastr);