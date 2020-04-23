import React, { useState } from 'react';
import { StyleSheet, Modal, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AddUser = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [modal, setModal] = useState(false);


    return (
        <View style={style.ana}>
            <TextInput
                label='Ad'
                value={name}
                placeholder="Lütfen adınızı girin"
                style={style.textInput}
                keyboardType="ascii-capable"
                onChangeText={text => setName(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Soyad'
                value={surname}
                placeholder="Lütfen soyadınızı girin"
                style={style.textInput}
                keyboardType="ascii-capable"
                onChangeText={text => setSurname(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Email'
                value={email}
                placeholder="Lütfen e-posta adresinizi girin"
                style={style.textInput}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Telefon'
                value={phone}
                placeholder="Lütfen telefonunuzu girin"
                style={style.textInput}
                keyboardType="phone-pad"
                onChangeText={text => setPhone(text)}
                mode="outlined"
                theme={theme}
            />
            <TextInput
                label='Maaş'
                value={salary}
                placeholder="Lütfen soyadınızı girin"
                style={style.textInput}
                keyboardType="numeric"
                onChangeText={text => setSalary(text)}
                mode="outlined"
                theme={theme}
            />
            <Button
                icon="upload"
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
                            onPress={() => console.log("Foto çek")}
                        >
                            Fotoğraf Çek
                        </Button>
                        <Button
                            icon="folder"
                            theme={theme}
                            mode="contained"
                            onPress={() => console.log("Galeriden seç")}
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