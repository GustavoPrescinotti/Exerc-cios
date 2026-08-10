import {View, StyleSheet, TextInput} from "react-native";
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
            <TextInput onChangeText={} placeholder={}></TextInput>
            <TextInput  onChangeText={} placeholder={}></TextInput>
            <TextInput  onChangeText={} placeholder={}></TextInput>
            <TextInput  onChangeText={} placeholder={}></TextInput>
            <Text>{resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})