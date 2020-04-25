import React, { useState } from 'react';
import { Modal, View, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const AddUser = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [modal, setModal] = useState(false);

    const handleUpload = async (image) => {
        let fd = new FormData();
        fd.append('file', image);
        fd.append('upload_preset','empapp');
        fd.append('cloud_name','akmanserkan65');

        fetch('https://api.cloudinary.com/v1_1/akmanserkan65/image/upload', {
            method:'post',
            body: fd
        }).then(res => res.json()).then(data=> {
            console.log(data);
            setPicture(data.url);
            setModal(false);
        })
    }

    const pickImageFromGalery = async () => {
        let { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[4,3],
                quality:0.5
            });
            if (!data.cancelled) {
                let image = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test/${data.uri.split(".")[0]}`
                }
                //console.log(image);
                handleUpload(image);
            }else{
                console.log("iptal edildi");
            }

        } else {
           Alert.alert("Lütfen önce cihazınızın ayarlar menüsünden ugulamaya galerinize erişme izni veriniz.");
        }
    }
    const pickImageFromCamera = async () => {
        let { granted } = await Permissions.askAsync(Permissions.CAMERA);

        if ( granted ) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[4,3],
                quality:0.5
            });
            if (!data.cancelled) {
                let image = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test/${data.uri.split(".")[0]}`
                }
                //console.log(image);
                handleUpload(image);

            }else{
                console.log("iptal edildi");
            }

        } else {
            Alert.alert("Lütfen önce cihazınızın ayarlar menüsünden ugulamaya kameranıza erişme izni veriniz.");
        }
    }
    return (
        <View style={style.ana}>
            <TextInput
                label='Ad-Soyad'
                value={name}
                placeholder="Lütfen ad/soyad girin"
                style={style.textInput}
                keyboardType="ascii-capable"
                onChangeText={text => setName(text)}
                mode="outlined"
                theme={theme}
            />

            <TextInput
                label='Email'
                value={email}
                placeholder="Lütfen e-posta adresi girin"
                style={style.textInput}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Telefon'
                value={phone}
                placeholder="Lütfen telefonu numarası girin"
                style={style.textInput}
                keyboardType="phone-pad"
                onChangeText={text => setPhone(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Departman'
                value={position}
                placeholder="Lütfen departmanı girin"
                style={style.textInput}
                keyboardType="ascii-capable"
                onChangeText={text => setPosition(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Maaş'
                value={salary}
                placeholder="Lütfen maaş girin"
                style={style.textInput}
                keyboardType="numeric"
                onChangeText={text => setSalary(text)}
                mode="outlined"
                theme={theme}
            />
            <Button
                icon={picture ==='' ? 'upload' : 'check'}
                mode="contained"
                style={style.textInput}
                theme={theme}
                onPress={() => setModal(true)}
            >
                Resim seç
            </Button>
            <Button
                icon="content-save"
                mode="contained"
                style={style.textInput}
                theme={theme}
                onPress={() => console.log("Kaydedildi")}
            >
                KAYDET
            </Button>
            <Modal
                animationType="fade"
                visible={modal}
                transparent={true}
                onRequestClose={() => setModal(false)}
            >
                <View style={style.modalView}>
                    <View style={style.modalButton}>
                        <Button
                            icon="camera"
                            theme={theme}
                            mode="contained"
                            onPress={() => pickImageFromCamera()}
                        >
                            Fotoğraf Çek
                        </Button>
                        <Button
                            icon="folder"
                            theme={theme}
                            mode="contained"
                            onPress={() => pickImageFromGalery()}
                        >
                            Galeriden seç
                        </Button>
                    </View>
                    <Button
                        mode="outlined"
                        style={style.cancelButton}
                        onPress={() => setModal(false)}
                    >
                        İPTAL
                    </Button>


                </View>

            </Modal>
        </View>
    )
}

const style = {
    ana: {
        flex: 1
    },
    textInput: {
        margin: 5,
        color: "#006faa"
    },
    modalButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 9

    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    },
    cancelButton: {
        backgroundColor: "#fff59e"

    }
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}


export default AddUser;