import { NavigationContainer, getFocusedRouteNameFromRoute, useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Button } from 'react-native';
import Dashboard from '../views/dashboard/Dashboard';
import Login from '../views/authentication/Login';
import BookmarkList from '../views/bookmark/BookmarkList';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserProfile from '../views/user/UserProfile';
import SettingsPage from '../views/settings/SettingsPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-ico-material-design';
import AddNewBookmark from '../views/bookmark/AddNewBookmark';
import BookmarkDetails from '../views/bookmark/BookmarkDetails';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()
const BottomTab = createBottomTabNavigator()


const BottomTabFunction = () => {
    return (
        <BottomTab.Navigator>
            {/* <BottomTab.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list-of-three-elements-on-black-background" color={color} size={size} />
                    ),
                }} /> */}
            <BottomTab.Screen
                name="Profile"
                component={UserProfile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="round-account-button-with-user-inside" color={color} size={size} />
                    ),
                }} />
            <BottomTab.Screen
                name="Settings"
                component={SettingsPage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings-cogwheel-button" color={color} size={size} />
                    )
                }} />
        </BottomTab.Navigator>

    )
}


function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    switch (routeName) {
        case 'BottomTabFunction':
            return 'Home';
        case 'Profile':
            return 'My profile';
        case 'Login':
            return 'My Login';
        case 'Home':
            return 'Home';
    }
}



const DrawerFunction = () => {
    const theme = useTheme()
    return (
        <Drawer.Navigator
            initialRouteName="BottomTabFunction"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: 240,
                },

            }}>
            <Drawer.Screen
                name='Bookmark Manager'
                component={StackFunction}
                options={({ route }) => ({
                    // headerTitleStyle: { color: theme.colors.colorWhite },
                    // headerStyle: {
                    //     backgroundColor: theme.colors.primary, // Change this to your desired color

                    // }
                })}
            />
            <Drawer.Screen name='Home' component={BottomTabFunction}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),

                })} />
            <Drawer.Screen
                name='AddNewBookmark'
                component={AddNewBookmark}
               // initialParams={{ itemId: 42 }}
                options={({ route }) => ({ title: "Add New Bookmark"})}
            //options={({ route }) => ({ title: route.params.title })}
            />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItem
                label="Help"
            //focused={true}
            // inactiveTintColor={"red"}
            // activeBackgroundColor={"blue"}
            // inactiveBackgroundColor={"grey"}

            //onPress={() => alert('Link to help')}
            //activeTintColor={"pink"}
            /> */}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}


const StackFunction = () => {
    return (
        <Stack.Navigator initialRouteName='Dashboard'
            // sharing common styling in all the screens
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2342DA',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            {/* <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    title: 'Overview',
                    //sharing individuals styling
                    headerStyle: { backgroundColor: "#2342DA" },

                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="black"
                        />
                    ),
                    // headerSearchBarOptions : true,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="black"
                        />
                    ),

                }}
            /> */}
            <Stack.Screen
                name='New Bookmark'
                component={BookmarkList}
                options={({ route }) => ({ headerShown: false,  })}

            // options={({ route }) => ({ title: route.params.title , headerShown: false})}
            />
            <Stack.Screen
                name="Bookmark Details"
                component={BookmarkDetails}
                options={({ route }) => ({ headerShown: false,  })}

            // options={({ route }) => ({ title: route.params.title , headerShown: false})}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                initialParams={{ itemId: 42 }}
            // options={({ route }) => ({ title: route.params.title })}
            />
        </Stack.Navigator>
    )
}

const AppNavigator = ({ appTheme }) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={appTheme}>
                <DrawerFunction/>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator;