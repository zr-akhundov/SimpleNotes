import React from 'react';
import Navigation from './src/navigation/navigation';

type Props = {
};

class App extends React.Component {
	constructor(props: Props) {
		super(props);
	};
	render() {
		return (
			<Navigation />
		);
	};
};

export default App;