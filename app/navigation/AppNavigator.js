import { NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BookmarkList from '../views/bookmark/BookmarkList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewBookmark from '../views/bookmark/AddNewBookmark';
import BookmarkDetails from '../views/bookmark/BookmarkDetails';
import ThemeLight from '../themes/ThemeLight';

const Stack = createNativeStackNavigator();

const StackFunction = () => {
    return (
        <Stack.Navigator
            initialRouteName='BookmarkList'
            theme={ThemeLight}
        >
            <Stack.Screen
                name='BookmarkList'
                component={BookmarkList}
                options={{ title: 'Bookmark Manager', headerShown: true }}
            />
            <Stack.Screen
                name="BookmarkDetails"
                component={BookmarkDetails}
                options={{ title: 'Bookmark Details', headerShown: true }}
            />
            <Stack.Screen
                name='AddNewBookmark'
                component={AddNewBookmark}
                options={{ title: 'Add New Bookmark' }}
            />
        </Stack.Navigator>
    )
}

const AppNavigator = ({ appTheme }) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={appTheme}>
                <StackFunction />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator;