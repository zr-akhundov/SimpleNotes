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

const navOptions: { [key: string]: NativeStackNavigationOptions } = {
    defaultStyle: {
        headerStyle: navStyles.navHeaderStyle,
        headerTitleStyle: navStyles.navHeaderTitleStyle,
        contentStyle: navStyles.navContentStyle
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
                    <RootStack.Screen name="Home" component={HomeScreen} options={{ ...navOptions.defaultStyle, title: 'Simple Notes' }} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    };
};

export default Navigation;