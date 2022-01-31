import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeComponent from './../components/home/home';
import SettingsComponent from './../components/settings/settings';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type WelcomeParams = {
};
type HomeParams = {
};
type SettingsParams = {
};

export type RootStackParamList = {
    Welcome: WelcomeParams;
    Home: HomeParams;
    Settings: SettingsParams;
};

type Props = {
};

class Navigation extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };
    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator initialRouteName='Welcome'>
                    <RootStack.Screen name="Welcome" component={WelcomeComponent} />
                    <RootStack.Screen name="Home" component={HomeComponent} />
                    <RootStack.Screen name="Settings" component={SettingsComponent} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    };
};

export default Navigation;

type WelcomeProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Welcome'>;
};

class WelcomeComponent extends React.Component<WelcomeProps> {
    constructor(props: WelcomeProps) {
        super(props);
    };

    render() {
        const { navigation } = this.props;

        const welcomeStyles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            },
            text: {
                fontSize: 20
            }
        });

        return (
            <View style={welcomeStyles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Home', {})}>
                    <Text style={welcomeStyles.text}>Go to home screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings', {})}>
                    <Text style={welcomeStyles.text}>Go to settings screen</Text>
                </TouchableOpacity>
            </View>
        );
    };
};