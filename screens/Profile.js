import React from 'react';
import { StyleSheet, Text, View, Image , Platform, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = () => {

    const  call = async (number) => {

        try{
            if (Platform.OS === "android") {
                await Linking.openURL(`tel:${number}`);
            } else {
                await Linking.openURL(`telprompt:${number}`);
            }
        }catch(e){
            console.log("Tespit edilemeyen hata oluştu: ",e)
        }
    }

    return (
        <View style={style.root}>
            <LinearGradient
                colors={["#0078f7", "#a2caf5"]}
                style={style.linear}
            />
            <View style={style.profImage}>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1558216144-fef86b75da36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" }}
                    style={style.Image}
                />
            </View>
            <View style={style.title}>
                <Title style={{ fontSize: 22 }}>Hasan Göçen</Title>
                <Text style={style.myText}>WEB Developer</Text>
            </View>
            <Card style={style.myCardStyle} onPress={()=> {
                Linking.openURL("mailto:hasangocen2777666@gmail.com");
            }}>
                <View style={style.myViewStyle}>
                    <MaterialIcons name="email" size={32} color={"#006aff"} />
                    <Text style={style.myEmail}>hasangocen2777666@gmail.com</Text>
                </View>
            </Card>
            <Card style={style.myCardStyle} onPress={() =>  call("00905555555555")}>
                <View style={style.myViewStyle}>
                    <Entypo name="phone" size={32} color={"#006aff"} />
                    <Text style={style.myEmail}>+90-555-555 55 55</Text>
                </View>
            </Card>
            <Card style={style.myCardStyle}>
                <View style={style.myViewStyle}>
                    <MaterialIcons name="attach-money" size={32} color={"#006aff"} />
                    <Text style={style.myEmail}>5.000 TL</Text>
                </View>
            </Card>
            <View style={style.buttonDiv}>
                <Button 
                    icon="account-edit"
                    mode="contained"
                    style={style.btnGuncelle}
                    onPress={()=> console.log("güncellendi")}
                >Güncelle
                </Button>
                <Button 
                    icon="delete"
                    mode="contained"
                    style={style.btnGuncelle}
                    onPress={()=> console.log("silindi")}
                >Kişiyi sil
                </Button>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        alignContent: "center",
        flex: 1
    },
    linear: {
        height: 150,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    profImage: {
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: 75,
        left: 0,
        right: 0
    },
    Image: {
        borderRadius: 70,
        height: 140,
        width: 140
    },
    title: {
        position: "absolute",
        top: 215,
        left: 0,
        right: 0,
        alignItems: "center",
    },
    myCardStyle: {
        margin: 5,
        top: 275,
        left: 0,
        right: 0,
        
        // alignItems: "center",
    },
    myViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    myText: {
        fontSize: 18
    },
    myEmail: {
        marginLeft: 10,
        fontSize: 18,
    },
    buttonDiv: {
        flexDirection: "row",
        justifyContent: "space-around",
        top: 287,
        left: 0,
        right: 0,
    },
    btnGuncelle: {
        backgroundColor: "#006aff",
        height:44,
        justifyContent:"center",
        padding:5,
    }
})

export default Profile;