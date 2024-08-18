import * as React from 'react';
import { View, Text, Button, SafeAreaView, SectionList, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {/* Passing params to nested navigators */}
            <TouchableOpacity accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Talk Back Please">
                <Text style={{ color: "black" }}>User Profile Screen</Text>
            </TouchableOpacity>



        </View>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'lightgrey',
        padding: 5,
    },
    item: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        color: 'black',
        borderBottomColor: 'black',
    },
});