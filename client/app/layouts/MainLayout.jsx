
import React from 'react';

const MainLayout = ({content,navbar}) => (
	<div>
		<header>
			{navbar}
		</header>
		<main>
			{content}
		</main>
	</div>
);

export default MainLayout;