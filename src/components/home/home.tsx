import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'Home'>;
};

class HomeScreen extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    };
    render() {
        return (
            <View />
        );
    };
};

export default HomeScreen;