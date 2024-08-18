import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from 'react-native-paper'
import ThemeLight from "../../themes/ThemeLight";

const getGlobalStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop:20
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 5,
        color:"black"
    },
    item: {
        fontSize: 16,
        padding: 10,
        // borderWidth: 1,
        // color: 'black',
        // borderColor: theme.colors.primary,

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colors.primary,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        // borderWidth: 1,
        // borderColor: theme.colors.primary,
        margin:4,
        borderRadius:4,
        backgroundColor: theme.colors.secondaryContainer,
    },
    selectedItem: {
        //backgroundColor: theme.colors.secondaryContainer,
    },
    text: {
        color:ThemeLight.colors.primary,
        fontSize: 16,
        marginLeft: 10, // Add some spacing between checkbox and text
    },
});

function bookmarkListStyles() {
    const { colors } = useTheme();
    const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);
    return styles;
}

export default bookmarkListStyles;