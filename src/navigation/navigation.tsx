import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from './../components/home/home';
import { navStyles } from './../appStyles';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type HomeParams = {
};
export type RootStackParamList = {
    Home: HomeParams;
};

type Props = {
};
type State = {
};

const navOptionsDefaultStyles: NativeStackNavigationOptions = {
    headerStyle: navStyles.headerStyle,
    headerTitleStyle: navStyles.headerTitleStyle,
    contentStyle: navStyles.contentStyle
};
type navOptionsProperties = {
    Home: NativeStackNavigationOptions
};
const navOptions: navOptionsProperties = {
    Home: { ...navOptionsDefaultStyles, title: 'Simple Notes' }
};

class Navigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator initialRouteName='Home'>
                    <RootStack.Screen name="Home" component={HomeScreen} options={navOptions.Home} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    };
};

export default Navigation;