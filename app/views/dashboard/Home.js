import * as React from 'react';
import { View, Text, Button, SafeAreaView, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from '../../features/bookmarkList/BookmarkListSlice';


const Home = ({ navigation, route }) => {
    const bookmarkList = useSelector((state) => state.bookmark.listOfBookmark)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {/* Passing params to nested navigators */}
            <TouchableOpacity accessible={true} accessibilityLabel="Tap me!" accessibilityHint="Talk Back Please">
                <Text style={{ color: "black" }}>Home Screen</Text>
            </TouchableOpacity>
            <Button
                title="Go to Login"
                onPress={() =>
                    navigation.navigate('Stack', {
                        screen: "Login",
                        params: { itemId: 69 },
                    })
                }
            />

            <Button
                title="Add New Todo"
                onPress={() =>
                    dispatch(addBookmark("neww to do"))
                }
            />

            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />


            <View style={styles.container}>
                {/* <SectionList
                    sections={[
                        {
                            title: 'TO DO List',
                            data: bookmarkList
                        },
                        // {
                        //     title: 'Section 2',
                        //     data: ['Item 2.1', 'Item 2.2', 'Item 2.3'],
                        // },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => String(index)}
                /> */}
            </View>

        </View>
    );
}

export default Home;

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