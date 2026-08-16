import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {

    const [peso, setPeso] = useState("");
    const [agua, setAgua] = useState(0);
    const [resultado, setResultado] = useState("");

    function calcular() {
        let meta = Number(peso) * 35;
        let falta = meta - agua;

        setResultado(
            "Meta: " + meta + " ml" +
            "Consumido: " + agua + " ml" +
            "Falta: " + falta + " ml"
        );
    }

    function beber() {
        setAgua(agua + 250);
    }

    return (
        <View style={style.container}>

            <Text style={style.titulo}>Controle de Água</Text>

            <TextInput style={style.input} onChangeText={setPeso} placeholder="Digite seu peso"/>

            <Button title="Calcular"  onPress={calcular}/>
            <Button title="Beber 1 copo"  onPress={beber}/>

            <Text style={style.resultado}>{resultado}</Text>

        </View>
    );
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding: 20,
        gap: 10,
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
    },

    resultado: {
        fontSize: 18,
        marginTop: 20,
        textAlign: "center",
    },

});
