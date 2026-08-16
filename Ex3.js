import { TextInput, View, StyleSheet, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
    const [valor, setValor] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular() {
        let compra = Number(valor);
        let desconto = 0;

        if (compra > 500) {
            desconto = 15;
        } else if (compra > 300) {
            desconto = 10;
        } else if (compra > 100) {
            desconto = 5;
        }else {
            desconto = 0;
        }

        let resultadocomdesconto = compra * desconto / 100;
        let final = compra - resultadocomdesconto;

        setResultado(
            final
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exercício 3</Text>

            <TextInput
                style={styles.input}
                placeholder="Valor da compra"
                onChangeText={setValor}
            />

            <Button
                title="Calcular"
                onPress={calcular}
            />

            <Text style={styles.resultado}>
                {resultado}
            </Text>
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
