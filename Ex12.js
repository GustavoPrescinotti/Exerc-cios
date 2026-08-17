import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function App() {

    const [temaEscuro, setTemaEscuro] = useState(false);
    const [corPrincipal, setCorPrincipal] = useState("#2196F3");

    const corFundo = temaEscuro ? "#121212" : "#F2F2F2";
    const corTexto = temaEscuro ? "#FFFFFF" : "#000000";
    const corCard = temaEscuro ? "#242424" : "#FFFFFF";

    return (
        <View style={[
            styles.container,
            { backgroundColor: corFundo }
        ]}>

            <View style={[
                styles.card,
                { backgroundColor: corCard }
            ]}>

                <Text style={[
                    styles.titulo,
                    { color: corTexto }
                ]}>
                    Personalização de Tema
                </Text>

                <Text style={[
                    styles.texto,
                    { color: corTexto }
                ]}>
                    Escolha o tema:
                </Text>

                <Pressable
                    style={[
                        styles.botao,
                        { backgroundColor: corPrincipal }
                    ]}
                    onPress={() => setTemaEscuro(!temaEscuro)}
                >
                    <Text style={styles.textoBotao}>
                        {temaEscuro ? "Usar Tema Claro" : "Usar Tema Escuro"}
                    </Text>
                </Pressable>


                <Text style={[
                    styles.texto,
                    { color: corTexto }
                ]}>
                    Escolha a cor principal:
                </Text>


                <View style={styles.cores}>

                    <Pressable
                        style={[
                            styles.botaoCor,
                            { backgroundColor: "#2196F3" }
                        ]}
                        onPress={() => setCorPrincipal("#2196F3")}
                    >
                        <Text style={styles.textoBotao}>Azul</Text>
                    </Pressable>


                    <Pressable
                        style={[
                            styles.botaoCor,
                            { backgroundColor: "#F44336" }
                        ]}
                        onPress={() => setCorPrincipal("#F44336")}
                    >
                        <Text style={styles.textoBotao}>Vermelho</Text>
                    </Pressable>


                    <Pressable
                        style={[
                            styles.botaoCor,
                            { backgroundColor: "#4CAF50" }
                        ]}
                        onPress={() => setCorPrincipal("#4CAF50")}
                    >
                        <Text style={styles.textoBotao}>Verde</Text>
                    </Pressable>

                </View>


                <Pressable
                    style={[
                        styles.botaoExemplo,
                        { backgroundColor: corPrincipal }
                    ]}
                >
                    <Text style={styles.textoBotao}>
                        Botão Principal
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
        padding: 20,
    },

    card: {
        width: "100%",
        padding: 25,
        borderRadius: 15,
        elevation: 5,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },

    texto: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10,
    },

    botao: {
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    cores: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },

    botaoCor: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },

    botaoExemplo: {
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    textoBotao: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },

});