import { StyleSheet } from 'react-native';

export const appColors = {
    brown: '#673928',
    lightYellow: '#FFF7E7',
    yellow: '#FFE6B5'
}

export const navStyles = StyleSheet.create({
    navHeaderStyle: {
        backgroundColor: appColors.brown
    },
    navHeaderTitleStyle: {
        color: appColors.lightYellow,
        fontWeight: 'normal',
        fontSize: 18
    },
    navContentStyle: {
        backgroundColor: appColors.yellow
    }
});

export const appStyles = StyleSheet.create({

});