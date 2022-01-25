import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './../components/home/home';
import SettingsComponent from './../components/settings/settings';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

type WelcomeParams = {
};
type HomeParams = {
};
type SettingsParams = {
};

type RootStackParamList = {
    Welcome: WelcomeParams;
    Home: HomeParams;
    Settings: SettingsParams;
};

class Navigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Welcome" component={WelcomeComponent} />
                    <Stack.Screen name="Home" component={HomeComponent} />
                    <Stack.Screen name="Settings" component={SettingsComponent} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};

export default Navigation;

type WelcomeProps = {
}

class WelcomeComponent extends React.Component<WelcomeProps> {
    constructor(props: WelcomeProps) {
        super(props);
    };

    render() {
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={welcomeStyles.text}>Go to home screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={welcomeStyles.text}>Go to settings screen</Text>
                </TouchableOpacity>
            </View>
        );
    };
};