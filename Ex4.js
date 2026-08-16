import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

export default function App() {
    const [meta, setMeta] = useState("");
    const [guardado, setGuardado] = useState("");
    const [mensal, setMensal] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular() {
        let falta = Number(meta) - Number(guardado);
        let meses = falta / Number(mensal);

        if (falta <= 0) {
            setResultado("Você já atingiu sua meta!");
        } else {
            setResultado(
                "Ainda falta: R$ " + falta.toFixed(2) +
                "Meses necessários: " + (meses * Number(mensal))
            );
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meta de Economia</Text>

            <TextInput style={styles.input} placeholder="Quanto deseja juntar?" onChangeText={setMeta}/>

            <TextInput style={styles.input} placeholder="Quanto já possui guardado?" onChangeText={setGuardado}/>

            <TextInput style={styles.input} placeholder="Quanto economiza por mês?" onChangeText={setMensal}/>

            <Button title="Calcular" onPress={calcular} />

            <Text style={styles.resultado}>{resultado}</Text>
        </View>
    );
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
