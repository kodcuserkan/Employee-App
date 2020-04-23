import React from 'react';
import { StyleSheet, Modal, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'


const Profile = () => {

    return (
        <View style={style.root}>
            <LinearGradient 
                colors={[ "#0078f7" , "#a2caf5" ]}
                style={style.linear}
            />
            <View style={style.profImage}>
                <Image 
                    source={{ uri: "https://images.unsplash.com/photo-1558216144-fef86b75da36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}}
                    style={style.Image}
                />
            </View>
        
        
        </View>
    )

}

const style = StyleSheet.create({
    root: {
        alignContent: "center",
        flex:1
    }, 
    linear: {
        height: 150,
        position: "absolute",
        top: 0,
        left:0,
        right:0
    },
    profImage: {
        flexDirection:"row",
        justifyContent:"center",
        position: "absolute",
        top: 75,
        left:0,
        right:0
    },
    Image: {
        borderRadius: 70,
        height: 140,
        width: 140
    }
})

export default Profile;