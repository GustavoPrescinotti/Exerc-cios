import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {

    const [ligado, setLigado] = useState(false);
    const [temperatura, setTemperatura] = useState(23);

    function aumentar() {
        if (ligado && temperatura < 30) {
            setTemperatura(temperatura + 1);
        }
    }

    function diminuir() {
        if (ligado && temperatura > 16) {
            setTemperatura(temperatura - 1);
        }
    }

    function mensagem() {
        if (temperatura <= 19) {
            return "Muito frio";
        }

        if (temperatura <= 25) {
            return "Temperatura agradável";
        }

        return "Temperatura alta";
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Ar-Condicionado
            </Text>

            <Text>
                {ligado ? "Ligado" : "Desligado"}
            </Text>

            <Text style={styles.temperatura}>
                {temperatura}°C
            </Text>

            <Button
                title={ligado ? "Desligar" : "Ligar"}
                onPress={() => setLigado(!ligado)}
            />

            <Button
                title="Aumentar temperatura"
                onPress={aumentar}
            />

            <Button
                title="Diminuir temperatura"
                onPress={diminuir}
            />

            {ligado && (
                <Text style={styles.mensagem}>
                    {mensagem()}
                </Text>
            )}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },

    titulo: {
        fontSize: 25,
        fontWeight: "bold",
    },

    temperatura: {
        fontSize: 30,
    },

    mensagem: {
        fontSize: 18,
    },

});