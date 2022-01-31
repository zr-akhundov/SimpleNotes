import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Home'>;
};

class HomeComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        );
    };
};

export default HomeComponent;