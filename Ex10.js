import {View, StyleSheet, TextInput, Alert, Button, Text} from "react-native";
import {useState} from "react";


export default function App() {
    const [nome, setNome] = useState('');
    const [senha,setSenha] = useState('')
    const [tentativa, setTentativa] = useState(0)
    const [bloque, setBloque] = useState('')

    function login(){
        if (bloque){
            Alert.alert("Voçê foi bloqueado ");
            return;
        }
        if (nome === "Admin" && senha === "1234"){
            Alert.alert("Sucesso!","logado");
            return "Sucesso!";
            setTentativa(0);
        }else {
            const novaste = tentativa + 1;
            setTentativa(novaste);

            if (novaste >=3 ){
                setBloque(true);
                Alert.alert("Acesso Bloqueado")
            }
            else {
                Alert.alert("Login incorrecto")
            }
        }

    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input} onChangeText={setNome} placeholder={"Nome do usuario"}></TextInput>
            <TextInput style={styles.input} onChangeText={setSenha} secureTextEntry={true} placeholder={"Senha"}></TextInput>

            <Button
                title="Entrar"
                onPress={login}
            />



            <Text style={styles.text} >Tentativas: {tentativa}/3</Text>
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
    text:{
        fontSize: 20,
        fontWeight: "bold",

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