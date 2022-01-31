import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Settings'>;
};

class SettingsComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };
    render() {
        return (
            <View>
                <Text>Settings Screen</Text>
            </View>
        );
    };
};

export default SettingsComponent;