import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from './../components/home/home';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type HomeParams = {
};
export type RootStackParamList = {
    Home: HomeParams;
};

type Props = {
};

const navigationOptions: { [key: string]: NativeStackNavigationOptions } = {
    Home: {
        title: 'Simple Notes',
        headerStyle: { backgroundColor: '#673928' },
        headerTitleStyle: { color: '#FFF7E7', fontWeight: 'normal', fontSize: 18 },
        contentStyle: { backgroundColor: '#FFE6B5' }
    }
};

class Navigation extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };
    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator initialRouteName='Home'>
                    <RootStack.Screen name="Home" component={HomeScreen} options={navigationOptions.Home} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    };
};

export default Navigation;