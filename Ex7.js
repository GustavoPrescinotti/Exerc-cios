import {TextInput, View, Text, StyleSheet} from "react-native";
import {useState} from "react";

export default function App() {
    const [time1, setTime1] = useState("");
    const [time2, setTime2] = useState("");
    const [cartaoamarelo, setCartaoamarelo] = useState("");
    const [cartaovermelho, setCartaovermelho] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Placar do jogo</Text>
            <Text style={styles.placar}>{time1}x{time2}</Text>

            <TextInput style={styles.time1} onChangeText={setTime1}  placeholder={'time1'}></TextInput>
            <TextInput style={styles.time2} onChangeText={setTime2}  placeholder={'time2'}></TextInput>

            <Text style={styles.cartaoAmarelo}>{cartaoamarelo}</Text>
            <Text style={styles.cartaoVermelho} >{cartaovermelho}</Text>

            <View>
                <TextInput
                    style={styles.cartaoAmarelo}
                    onChangeText={setCartaoamarelo}
                />

                <TextInput
                    style={styles.cartaoVermelho}
                    onChangeText={setCartaovermelho}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d5d5d5',
    },
    texto:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,

    },
    placar:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,

    },

    time1:{
        backgroundColor:'black',
        borderRadius:5,
        color:'white',
        width: '50%',
        height: '30%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 10,
    },
    time2:{
        width:'50%',
        height:'30%',
        backgroundColor:'#0000FF',
        borderRadius:5,
        fontSize:25,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center',
        marginTop: 10,

    },

    cartaoAmarelo: {
        width: 80,
        height: 110,
        backgroundColor: '#FFD700',
        borderRadius: 8,
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',

        borderWidth: 2,
        borderColor: '#D4AF00',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },

    cartaoVermelho: {
        width: 80,
        height: 110,
        backgroundColor: '#FF1E1E',
        borderRadius: 8,
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',

        borderWidth: 2,
        borderColor: '#B00000',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
})