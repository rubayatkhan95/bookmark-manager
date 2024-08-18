import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextInput } from 'react-native-paper';
import { addBookmark } from '../../features/bookmarkList/BookmarkListSlice';
import ThemeLight from '../../themes/ThemeLight';

import InputBox from '../../components/input/InputBox';
import DropdownComponent from '../../components/input/InputDropdown';

const AddNewBookmark = ({ navigation }) => {
    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [category, setCategory] = React.useState('');
    const bookmarkList = useSelector((state) => state.bookmark.listOfBookmark);
    const dispatch = useDispatch();

    const validateInputs = () => {
        if (title.trim().length === 0 && title.trim().length <=30 ) {
            alert("Title is required");
            return false;
        }
        if (url.trim().length === 0 || !/^https?:\/\/.+\..+/.test(url)) {
            alert("A valid URL is required");
            return false;
        }
        return true;
    };

    const handleSave = () => {
        if (validateInputs()) {
            const newBookmark = {
                id: bookmarkList.length + 1,
                title: title.trim(),
                url: url.trim(),
                category: category.trim(),
                isActive: true
            };
            dispatch(addBookmark(newBookmark));
            navigation.goBack();
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <InputBox label="Title" value={title} setValue={setTitle} />
            <View style={{ height: 5 }}></View>
            <InputBox label="URL" value={url} setValue={setUrl} />
            <View style={{ height: 5 }}></View>
            <InputBox label="Category" value={category} setValue={setCategory} />
<DropdownComponent/>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={handleCancel} style={styles.button}>
                    Cancel
                </Button>
                <Button mode="contained" onPress={handleSave} style={styles.button}>
                    Save
                </Button>
            </View>
        </View>
    );
};

export default AddNewBookmark;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
});
