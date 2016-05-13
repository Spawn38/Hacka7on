import React, { Component, PropTypes, Styles, ChildContextTypes} from 'react';
import {FlatButton, Paper, RaisedButton} from 'material-ui';
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
        return <RaisedButton key={index+1} label={index+1} style={this.constructor.styles.iconLink} primary={true}/>;
      }
      else {
        return <RaisedButton key={index+1} label={index+1} style={this.constructor.styles.iconLink}  onClick={this.handlePageSelected.bind(this, index)} />;
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
    this.callCallback(selected);
  }

 callCallback(selectedItem) {
    if (typeof(this.props.clickCallback) !== "undefined" &&
        typeof(this.props.clickCallback) === "function") {
      this.props.clickCallback({selected: selectedItem});
    }
  }

  render() {
    const navigation = this.pagesNavigation(this.props.pageNum); 
    return (
      <div className="rowInline">
        <Paper>
          <RaisedButton icon={<ChevronLeft/>} onClick={this.handlePreviousPage} style={this.constructor.styles.iconLink}/>
          {navigation}
          <RaisedButton icon={<ChevronRight/>} onClick={this.handleNextPage} style={this.constructor.styles.iconLink}/>
        </Paper>
      </div>
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