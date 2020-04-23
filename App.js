import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import AddUser from './screens/AddUser';
import Profile  from './screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
     {/*<Home />
     <AddUser />*/}

     <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',  
    backgroundColor: "#e0e0e0"
  },
});
