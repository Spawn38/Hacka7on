
import React from 'react';

export const MainLayout = ({content,navbar}) => (
	<div>
		<div>
			{navbar}
		</div>
		<div>
			{content}
		</div>
	</div>
)
