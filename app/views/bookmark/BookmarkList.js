import * as React from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet, SectionList, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-ico-material-design';
import { FAB, useTheme } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import bookmarkListStyles from './Styles';
import Modal from "react-native-modal";
import ModalBottomSheet from '../../components/modal/ModalBottomSheet';
import AddNewBookmark from './AddNewBookmark';
import { updateBookmark } from '../../features/bookmarkList/BookmarkListSlice';
import ThemeLight from '../../themes/ThemeLight';


const ItemForRender = ({ navigation, item, styles, index }) => {
    const dispatch = useDispatch()
    const [selected, setSelected] = React.useState(!item.isActive);
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

const FloatingAddButton = ({ navigation, styles, onPress }) => (
    <FAB
        theme={ThemeLight}
        icon={() => <Icon name="add-plus-button" color={ThemeLight.colors.buttonColor} style={{ marginLeft: 3, marginTop: 1 }} />}
        style={styles.fab}
        onPress={onPress}
    />
);



const BookmarkList = ({ navigation, route }) => {
    const bookmarkList = useSelector((state) => state.bookmark.listOfBookmark)
    const categoryList = useSelector((state) => state.category.listOfCategory)
    const sectionList = categoryList.map(category => ({
        title: category.title,
        data: bookmarkList.filter(bookmark => bookmark.category === category.title)
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

