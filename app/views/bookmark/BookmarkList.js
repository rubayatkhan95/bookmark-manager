import * as React from 'react';
import { View, Text, Button, TouchableOpacity, SectionList, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import bookmarkListStyles from './Styles';
import ThemeLight from '../../themes/ThemeLight';
import { useEffect } from 'react';
import { loadBookmarks } from '../../features/bookmarkList/BookmarkListSlice';


const ItemForRender = ({ navigation, item, styles, index }) => {
    const handlePress = () => {
        Linking.openURL(item.url).catch((err) => console.error("Failed to open URL:", err));
    };
    const goToDetails = () => {
        navigation.navigate('BookmarkDetails', { item });
    };
    return (
        <TouchableOpacity onPress={handlePress}
            style={{ backgroundColor: ThemeLight.colors.primaryContainer, justifyContent: "space-between", flexDirection: "row", padding: 10, margin:5 }}>
            <Text style={[styles.text]}>{item.title}</Text>
            <Button title='Details' color={ThemeLight.colors.buttonColor} onPress={goToDetails}></Button>
        </TouchableOpacity>
    );
};

const BookmarkList = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const bookmarkList = useSelector((state) => state.bookmark.listOfBookmark) || []
    const categoryList = useSelector((state) => state.category.listOfCategory) || [];

    console.log("categoryList:", categoryList);
    console.log("bookmarkList:", bookmarkList);
    console.log("sectionList:", sectionList);
    useEffect(()=>{
        console.log("here")
        dispatch(loadBookmarks())
    }, [dispatch])

    const sectionList = categoryList.map(category => ({
        title: category.title,
        data: (bookmarkList || []).filter(bookmark => bookmark.category === category.title)
    })).filter(section => section.data.length > 0);
    const styles = bookmarkListStyles()

    return (
        <View style={styles.container}>
            <Button
                title="Add Bookmark"
                onPress={() => {
                    navigation.navigate({
                        name: 'AddNewBookmark',

                    });
                }}
                color={ThemeLight.colors.buttonColor}
            />
            <SectionList
                sections={sectionList}
                renderItem={({ item, index }) => <ItemForRender navigation={navigation} item={item} index={index} styles={styles} />}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    )

}

export default BookmarkList;

