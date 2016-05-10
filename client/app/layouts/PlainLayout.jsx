
import React from 'react';
import MyTheme from '../theme/theme.jsx';

const style = {background : MyTheme.palette.primary2Color};

const PlainLayout = ({content}) => (
	<main>
		<div className="page-wrap" style={style}>			
			{content}			
		</div>
	</main>
);

export default PlainLayout;