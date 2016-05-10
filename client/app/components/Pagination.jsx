import React, { Component, PropTypes, Styles, ChildContextTypes} from 'react';
import {FlatButton, Paper} from 'material-ui';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import muiThemeable from 'material-ui/styles/muiThemeable';


class Pagination extends Component {
  
 constructor(props) {
  super(props);
  this.pagesNavigation = this.pagesNavigation.bind(this);
  this.handlePreviousPage = this.handlePreviousPage.bind(this);
  this.handleNextPage = this.handleNextPage.bind(this);

  this.state =  {selected : props.initialSelected ? props.initialSelected : 0};
 }

  pagesNavigation(nbPage) {
    const styleSelected = Object.assign(this.constructor.styles.iconLinkSelected, { background: this.props.muiTheme.palette.primary1Color });
    return Array.apply(null, Array(nbPage)).map((val,index) => {
      
      if(index === this.state.selected) {
        return <FlatButton key={index+1} label={index+1} style={styleSelected} disabled={true} />;
      }
      else {
        return <FlatButton key={index+1} label={index+1} style={this.constructor.styles.iconLink} />;
      }
    });        
  }


  handlePreviousPage(evt) {
    
    if (this.state.selected > 0) {
      this.handlePageSelected(this.state.selected - 1, evt);
    }
  }

  handleNextPage(evt) {
    
    if (this.state.selected < this.props.pageNum - 1) {
      this.handlePageSelected(this.state.selected + 1, evt);
    }
  }

  handlePageSelected(selected, evt) {
    

    if (this.state.selected === selected) return;

    this.setState({selected: selected});

    // Call the callback with the new selected item:
    this.callCallback(selected);
  }

 callCallback(selectedItem) {
    if (typeof(this.props.clickCallback) !== "undefined" &&
        typeof(this.props.clickCallback) === "function") {
      this.props.clickCallback({selected: selectedItem});
    }
  };

  render() {

    const t = this.pagesNavigation(this.props.pageNum);
 

    return (
      <Paper>
        <FlatButton icon={<ChevronLeft/>} style={this.constructor.styles.iconLink} disabled={this.state.selected===0} onClick={this.handlePreviousPage}/>
        {t}
        <FlatButton icon={<ChevronRight/>} style={this.constructor.styles.iconLink} disabled={this.state.selected===this.props.pageNum} onClick={this.handleNextPage}/>
      </Paper>
    );
  }
}

Pagination.styles = {
  iconLink : { width : "36px !important", minWidth :"36px"},
  iconLinkSelected  : { width : "36px !important", minWidth :"36px", color : "white"}
};

Pagination.propTypes = { 
    pageNum: React.PropTypes.number.isRequired,
    pageRangeDisplayed: React.PropTypes.number,
    marginPagesDisplayed: React.PropTypes.number,

    clickCallback: React.PropTypes.func.isRequired,
    initialSelected: React.PropTypes.number
  };

export default muiThemeable()(Pagination);