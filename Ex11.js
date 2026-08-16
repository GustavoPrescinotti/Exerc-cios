import {View, StyleSheet, TextInput, Button, Text} from "react-native";
import {useState} from "react";

export default function App(){
    const [nota,setNota]=useState("");
    const [nota2,setNota2]=useState("");
    const [nota3,setNota3]=useState("");
    const [nota4,setNota4]=useState("");
    const [media,setMedia]=useState(0);
    const [sittuacao,setSimttuacao]=useState("");

    function calculo(){
        const resultadado = (
            Number(nota) +
            Number(nota2) +
            Number(nota3)+
            Number(nota4)
        )/ 4
        setMedia(resultadado);
        if (resultadado >=7){
            setSimttuacao("Aprovado com sucesso");
        }
        else if (resultadado >= 5){
            setSimttuacao("Sinto muito mas recuperação");
        }else{
            setSimttuacao("Voçê foi um idiota o ano todo até o ano que vem");
        }

    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Média</Text>
            <TextInput style={styles.input} onChangeText={setNota} value={nota} placeholder={"Nota"}></TextInput>
            <TextInput style={styles.input} onChangeText={setNota2} value={nota2} placeholder={"Nota2"}></TextInput>
            <TextInput style={styles.input} onChangeText={setNota3} value={nota3} placeholder={"Nota3"}></TextInput>
            <TextInput style={styles.input} onChangeText={setNota4} value={nota4} placeholder={"Nota4"}></TextInput>

            <Button title="Calcular" onPress={calculo}/>

            <Text>Media: {media}</Text>
            <Text>Situação: {sittuacao}</Text>

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
});