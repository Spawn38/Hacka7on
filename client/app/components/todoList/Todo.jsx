import React from 'react';
import {Checkbox, ListItem} from 'material-ui';

export default function Todo({onClick,completed,text}) {
	return (
	   <ListItem
        primaryText={text}  
        leftCheckbox={<Checkbox  onCheck={onClick} checked = {completed}/>}
        onTouchTap={onClick}
        className="textAlignLeft"
      />
	);
};