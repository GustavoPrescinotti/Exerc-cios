import {Button, TextInput, View ,Text,  StyleSheet} from "react-native";
import {useState} from "react";


export default function App(){
    const [distancia, setDistancia] = useState("")
    const [preco, setPreco] = useState("")
    const [resultado, setResultado] = useState("")
    const [consumos, setConsumos] = useState("")

    function calculo() {
        let litros = distancia / consumos;
        let total = litros * preco;
        let custo100 = (100 / consumos) * preco;

        setResultado(
            "Litros necessários: " + litros.toFixed(2) +
            "Custo total: R$ " + total.toFixed(2) +
            "Custo a cada 100 km: R$ " + custo100.toFixed(2)
        );
    }
    return (
        <View style={css.container}>
            <Text style={css.titulo}>Calculadora</Text>
            <TextInput style={css.input} placeholder={'Distancia'} onChangeText={setDistancia}></TextInput>
            <TextInput style={css.input} placeholder={'Consumo'} onChangeText={setConsumos}></TextInput>
            <TextInput style={css.input} placeholder={'Preço'} onChangeText={setPreco}></TextInput>



            <Button title="Calcular" onPress={calculo} />
            <Text style={css.resultado}>{resultado}</Text>

        </View>

    )
}
const css = StyleSheet.create({
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
})
