import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import AddUser from './screens/AddUser';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const myOptions = {
    title:"Anasayfa",
    headerTintColor:"white",
    headerStyle:{
        backgroundColor:"#006aff"
    } 
};

function App() {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen 
                name="Anasayfa" 
                component={Home} 
                options={myOptions}
                />
                <Stack.Screen 
                name="Personel" 
                component={AddUser} 
                options={{...myOptions, title:"Personel Ekle"}}
                />
                <Stack.Screen 
                name="Profil" 
                component={Profile} 
                options={{...myOptions, title:"Profil"}}
                />
            </Stack.Navigator>
        </View>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        // alignItems: 'center',
        // justifyContent: 'center',  
        backgroundColor: "#e0e0e0"
    },
});
