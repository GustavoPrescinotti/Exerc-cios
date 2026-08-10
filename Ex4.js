import {Button, StyleSheet, Text, TextInput, View,} from "react-native";
import {useState} from "react";

export default function App(){
    const [meta,setMeta] = useState("");
    const [guardar,setGuardar] = useState("");
    const [mensal, setMensal] = useState("");
    const [resultado, setResultado] = useState("")

    function calculo(){
        let falta = meta - guardar;
        let meses = falta / mensal

        setResultado(
            falta + (meses)
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Execicio 4</Text>
            <TextInput style={styles.input} onChangeText={setMeta} placeholder='Quanto deseja juntar'></TextInput>
            <TextInput style={styles.input} onChangeText={setGuardar} placeholder='Quanto ja tem'></TextInput>
            <TextInput style={styles.input} onChangeText={setMensal} placeholder='Quanto economizou'></TextInput>

            <Button title='Cacular' onPress={calculo} />
            <Text style={styles.titulo}>{resultado}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },

    resultado: {
        fontSize: 18,
        marginTop: 20,
        textAlign: "center",
    },
});