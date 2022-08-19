import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation/navigation';

type Props = {
};

class App extends React.Component {
	constructor(props: Props) {
		super(props);
	};
	render() {
		return (
			<>
				<StatusBar backgroundColor='#673928' barStyle='light-content' />
				<Navigation />
			</>
		);
	};
};

export default App;