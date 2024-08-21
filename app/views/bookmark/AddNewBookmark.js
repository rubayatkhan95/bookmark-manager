import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextInput } from 'react-native-paper';
import { addBookmark, saveBookmarks } from '../../features/bookmarkList/BookmarkListSlice';
import { addCategory } from '../../features/category/CategorySlice';
import ThemeLight from '../../themes/ThemeLight';
import InputBox from '../../components/input/InputBox';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-ico-material-design';
//https://ico.simpleness.org/pack/material-design

const AddNewBookmark = ({ navigation }) => {
    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [isTextInputVisible, setTextInputVisible] = React.useState(false);

    const bookmarkList = useSelector((state) => state.bookmark.listOfBookmark);
    const categoryList = useSelector((state) => state.category.listOfCategory);
    const dispatch = useDispatch();

    const validateInputs = () => {
        if (title.trim().length === 0 && title.trim().length <= 30) {
            alert("Title is required");
            return false;
        }
        if (url.trim().length === 0 || !/^https?:\/\/.+\..+/.test(url)) {
            alert("A valid URL is required");
            return false;
        }
        if (isTextInputVisible && category.trim().length === 0) {
            alert("Category is required");
            return false;
        }
        return true;
    };

    const saveBookmarkToLocalStorage = (newBookmark) => {
        dispatch(saveBookmarks(newBookmark))
            .then(() => {
                console.log('Bookmarks have been saved!');
            })
            .catch((error) => {
                console.error('Failed to save bookmarks:', error);
            });
    }

    const handleSave = () => {
        if (validateInputs()) {
            const newBookmark = {
                id: bookmarkList.length + 1,
                title: title.trim(),
                url: url.trim(),
                category: category.trim(),
            };
            dispatch(addBookmark(newBookmark));
            saveBookmarkToLocalStorage(newBookmark)
            if (isTextInputVisible && category.trim().length > 0) {
                const newCategory = {
                    id: categoryList.length + 1,
                    title: category.trim(),
                };
                dispatch(addCategory(newCategory));
            }
            clearState()
            navigation.goBack();
        }
    };

    const clearState = () => {
        setTitle('');
        setUrl('');
        setCategory('');
        setTextInputVisible(false);
    }

    const handleCancel = () => {
        clearState()
        navigation.goBack();
    };

    const toggleModal = () => {
        setTextInputVisible(!isTextInputVisible);
    };

    return (
        <ScrollView style={styles.container}>
            <InputBox label="Title" value={title} setValue={setTitle} />
            <InputBox label="URL" value={url} setValue={setUrl} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <SelectDropdown
                    data={categoryList}
                    onSelect={(selectedItem, index) => {
                        setCategory(selectedItem.title)
                    }}
                    disabled={isTextInputVisible}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={[styles.dropdownButtonStyle, { backgroundColor: isTextInputVisible ? ThemeLight.colors.onSurfaceDisabled : ThemeLight.colors.primaryContainer, }]}>
                                <Text style={styles.dropdownButtonTxtStyle}>
                                    {(selectedItem && selectedItem.title) || 'Select Cetegory'}
                                </Text>
                                <Icon name={isOpened ? 'drop-up-arrow' : 'drop-down-arrow'} style={styles.dropdownButtonArrowStyle} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <TouchableOpacity
                    onPress={toggleModal}
                    style={{ height: 40, width: 40, backgroundColor: ThemeLight.colors.buttonColor, borderRadius: 4, justifyContent: "center", alignItems: "center" }}>
                    <Icon name="add-plus-button" color={"white"} style={{ marginLeft: 3, marginTop: 1 }} />
                </TouchableOpacity>
            </View>
            {isTextInputVisible && (
                <InputBox
                    label="New Category"
                    value={category}
                    setValue={setCategory}
                    style={{ marginTop: 20 }}
                />
            )}
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={handleCancel} style={styles.button} theme={ThemeLight}>
                    Cancel
                </Button>
                <Button mode="contained" onPress={handleSave} style={styles.button} theme={ThemeLight}>
                    Save
                </Button>
            </View>

        </ScrollView>
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
    dropdownButtonStyle: {
        width: "84%",
        height: 50,
        backgroundColor: ThemeLight.colors.primaryContainer,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});


