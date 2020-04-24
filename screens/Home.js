import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';


const Home = (props) => {

    const data = [
        { id: "1", phone: "+90123456789", url: "https://avatars3.githubusercontent.com/u/48566149?s=460&u=3d94bae8cae1db30beb2242238544a244cd963b4&v=4", name: "Serkan Akman", position: "Frontend Dev", email: "akmanserkan65@gmail.com", salary: 5500 },
        { id: "2", phone: "+90235354353", url: "https://images.unsplash.com/photo-1561826693-1246ed6cc0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80", name: "Hale Polat", position: "QA Engineer" , email: "asadadada@gmail.com", salary: 5000 },
        { id: "3", phone: "+90345242452", url: "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80", name: "John Doe", position: "Backend Dev", email: "dasdasdasdsa@gmail.com", salary: 6500   },
        { id: "4", phone: "+90432534525", url: "https://images.unsplash.com/photo-1585925130019-eeafcd31b7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80", name: "Esma Alkan", position: "HR Specialist" , email: "afsafsafdsa@gmail.com", salary: 6500  },
        { id: "5", phone: "+90234532553", url: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", name: "Joi Trister", position: "Python Dev", email: "afsasadaewead@gmail.com" , salary: 4500  }
    ];

    const Renderlist = (d => {
        return (
            <Card style={styles.homeStyle}
                onPress={() => { props.navigation.navigate("Profil", {d}) }}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: d.url }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{d.name}</Text>
                        <Text style={styles.text}>{d.position}</Text>
                    </View>
                </View>
            </Card>
        )
    }
    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return Renderlist(item)
                }}
                keyExtractor={item => item.id}
            />

            <FAB
                onPress={() => props.navigation.navigate("Personel")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: "#006aff" } }}
            />
        </View>


    )
}


const styles = StyleSheet.create({
    homeStyle: {
        margin: 5,
        borderRadius: 8
    },
    cardView: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 18
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0
    }
});

export default Home;