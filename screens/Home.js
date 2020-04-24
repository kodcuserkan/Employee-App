import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card , FAB} from 'react-native-paper';


const Home = (props) => {

    const data = [
        { id: 1, url: "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", name: "Serkan Akman", position: "Frontend Dev" },
        { id: 2, url: "https://images.unsplash.com/photo-1561826693-1246ed6cc0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=775&q=80", name: "Hale Polat", position: "Tester" },
        { id: 3, url: "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80", name: "John Doe", position: "Backend Dev" },
        { id: 4, url: "https://images.unsplash.com/photo-1585925130019-eeafcd31b7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80", name: "Esma Alkan", position: "HR Specialist" },
        { id: 5, url: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", name: "Joi Trister", position: "Python Dev" }
    ];

    const Renderlist = (d => {
        return (
            <Card style={styles.homeStyle}
                onPress={()=> {props.navigation.navigate("Profil")}}
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
                renderItem={({item}) => {
                    return Renderlist(item)
                }}
                keyExtractor={item => `${item.id}`}
            />

            <FAB 
                onPress={() => props.navigation.navigate("Personel")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: {accent: "#006aff"} }}
            />
        </View>


    )
}


const styles = StyleSheet.create({
    homeStyle: {
        margin: 5,
        borderRadius:8
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