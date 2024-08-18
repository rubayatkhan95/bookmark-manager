import * as React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import ThemeLight from '../../themes/ThemeLight';

const BookmarkDetails = ({ route, navigation }) => {
    const {item}=route.params;
    return (
       <View style={styles.container}>
            <Text style={styles.text}>Title: {item.title}</Text>
            <Text style={styles.text}>URL: {item.url}</Text>
            <Text style={styles.text} >Category: {item.category}</Text>
        </View>
    );
};

export default BookmarkDetails;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:ThemeLight.colors.primaryContainer,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:"black",
        fontSize:18
    }

});
