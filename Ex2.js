import {View, StyleSheet, TextInput, Button} from "react-native";
import {useState} from "react";

export default function App() {
    const [salario, setSalario] = useState("");
    const [horas, setHoras] = useState("");
    const [valorhora, setValorhora] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular (){
        let extra = horas * valorhora;
        let salariofinal = Number(salario) + extra
        let imposto = 0;

        if (salariofinal > 5000){
            imposto = salariofinal * 0,10
            salariofinal = salariofinal - imposto
        }
        setResultado(
            salario + extra + imposto + salariofinal
        )
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={"Salario"} placeholder={setSalario}></TextInput>
            <TextInput style={styles.input} onChangeText={"Horas"} placeholder={setHoras}></TextInput>
            <TextInput style={styles.input} onChangeText={"ValorHora"} placeholder={setValorhora}></TextInput>
            <Button title='calcular' onPress={calcular} />
            <Text style={styles.resultado}>{resultado}</Text>
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
})