import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation/navigation';
import configureStore from './src/store/store';
import { Provider } from 'react-redux';

const { store } = configureStore();

type Props = {
};

class App extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	};
	render() {
		return (
			<>
				<StatusBar backgroundColor='#673928' barStyle='light-content' />
				<Provider store={store}>
					<Navigation />
				</Provider>
			</>
		);
	};
};

export default App;