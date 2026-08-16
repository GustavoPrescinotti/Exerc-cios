import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
    const [quantidade, setQuantidade] = useState(0);
    const [estoque, setEstoque] = useState(0);

    function cadastrarEstoque() {
        const valor = Number(quantidade);

        if (valor >= 0) {
            setEstoque(valor);
        }
    }

    function adicionar() {
        setEstoque(estoque + 1);
    }

    function retirar() {
        if (estoque > 0) {
            setEstoque(estoque - 1);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Controle de Estoque
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Quantidade inicial"
                value={quantidade}
                onChangeText={setQuantidade}
            />

            <Pressable
                style={styles.botaoCadastrar}
                onPress={cadastrarEstoque}
            >
                <Text style={styles.textoBotao}>
                    Cadastrar estoque
                </Text>
            </Pressable>

            <Text style={styles.quantidade}>
                {estoque}
            </Text>

            <Text>unidades em estoque</Text>

            {estoque <= 5 && (
                <Text style={styles.alerta}>
                    Estoque baixo
                </Text>
            )}

            <View style={styles.botoes}>

                <Pressable
                    style={styles.botaoRetirar}
                    onPress={retirar}
                >
                    <Text style={styles.textoBotao}>
                        - Retirar
                    </Text>
                </Pressable>

                <Pressable
                    style={styles.botaoAdicionar}
                    onPress={adicionar}
                >
                    <Text style={styles.textoBotao}>
                        + Adicionar
                    </Text>
                </Pressable>

            </View>

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
        marginBottom: 25,
    },

    input: {
        width: "100%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        textAlign: "center",
        fontSize: 18,
    },

    botaoCadastrar: {
        backgroundColor: "#333",
        padding: 12,
        borderRadius: 8,
        marginBottom: 30,
        width: "100%",
        alignItems: "center",
    },

    quantidade: {
        fontSize: 50,
        fontWeight: "bold",
    },

    alerta: {
        backgroundColor: "#ffcccc",
        color: "#c00000",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },

    botoes: {
        flexDirection: "row",
        gap: 20,
        marginTop: 30,
    },

    botaoAdicionar: {
        backgroundColor: "#28a745",
        padding: 15,
        borderRadius: 8,
    },

    botaoRetirar: {
        backgroundColor: "#dc3545",
        padding: 15,
        borderRadius: 8,
    },

    textoBotao: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },

});