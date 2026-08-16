import {Button, Text, TextInput, View ,StyleSheet} from "react-native";
import {useState} from "react";


export default function App() {
    const [nome, setNome] = useState("");
    const [profissao, setProfissao] = useState("");
    const [idade, setIdade] = useState("");
    const [cadastrar, setCadastrar] = useState("");

    function verificadordeidade(){
        if (idade < 18){
            return 'Menor de idade'
        }
        else if (idade < 60){
            return 'Adulto'
        }
        else{
            return 'Idade da Lais'
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder={"Digite o seu nome"}></TextInput>
            <TextInput style={styles.input} onChangeText={setProfissao} value={profissao} placeholder={"Digite sua profissão"}></TextInput>
            <TextInput style={styles.input} onChangeText={setIdade} value={idade} keyboardType={"numeric"} placeholder={"Digite sua idade"}></TextInput>

            <Button title="Cadastrar" onPress={() => setCadastrar()}></Button>


            <View style={styles.container}>
                <Text>Nome: {nome}</Text>
                <Text>Profissão: {profissao}</Text>
                <Text>Idade: {idade}</Text>
                <Text>classificaçã: {verificadordeidade()}</Text>
            </View>


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