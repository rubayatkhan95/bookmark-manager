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


const ItemForRender = ({ navigation,item, styles, index  }) => {
    const dispatch = useDispatch()
    const [selected, setSelected] = React.useState(!item.isActive);
    const handlePress = (item) => {
        console.log(item.url)
       // Linking.openURL(item.url)
    };
    const goToDetails = () => {
        navigation.navigate('Bookmark Details', { item });
    };
    return (
        <TouchableOpacity onPress={handlePress(item)}
        style={{backgroundColor:ThemeLight.colors.primaryContainer, justifyContent:"space-between", flexDirection:"row", padding:10}}>
            <Text style={[styles.text]}>{item.title}</Text>
            <Button title='Details' color={ThemeLight.colors.buttonColor} onPress={goToDetails}></Button>
        </TouchableOpacity>
    );
};

const FloatingAddButton = ({ navigation, styles, onPress }) => (
    <FAB
        theme={ThemeLight}
        icon={() => <Icon name="add-plus-button" color={ThemeLight.colors.buttonColor} style={{ marginLeft: 3, marginTop: 1}} />}
        style={styles.fab}
        onPress={onPress}
    />
);



const BookmarkList = ({ navigation, route }) => {

    const bookmarkList = useSelector((state) => state.bookmark.listOfBookmark)

    const SECTIONLIST =
        [
            {
                title: 'To-Dos',
                data: bookmarkList.filter((item) => item.isActive == true),
            },
            {
                title: 'To-Dos2',
                data: bookmarkList.filter((item) => item.isActive == true),
            },
        ]
        ;

    // const listOfDoneBookmark =  useSelector((state) => state.bookmark.listOfDoneBookmark)
    const styles = bookmarkListStyles()
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onPressDone = () => {
        toggleModal()
    }
    return (
        <View style={styles.container}>
            <Button
                title="Add Bookmark"
                onPress={() => {
					// Pass and merge params back to home screen
					navigation.navigate({
						name: 'AddNewBookmark',

					});
				}}
               // onPress={toggleModal}
            />
            {/* <FlatList
                data={bookmarkList}
                renderItem={({ item }) => <ItemForRender item={item} styles={styles} />}
                keyExtractor={(item, index) => String(index)}
            /> */}
            <SectionList
                sections={SECTIONLIST}
                renderItem={({ item, index }) => <ItemForRender navigation={navigation} item={item} index={index} styles={styles} />}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => String(index)}
            />
            <FloatingAddButton navigation={navigation} styles={styles} onPress={toggleModal} />
            <View style={{ flex: 1, height: 500 }}>
                <ModalBottomSheet
                    isModalVisible={isModalVisible}
                    toggleModal={toggleModal}
                    onPressDone={onPressDone}
                    modalContent={<AddNewBookmark onPressDone={onPressDone} />}
                />
            </View>

        </View>
    )

}

export default BookmarkList;

