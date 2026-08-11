import { Text, StyleSheet, View, Button } from "react-native";
import { useState } from "react";

export default function App() {

    const [produto1, setProduto1] = useState(0);
    const [produto2, setProduto2] = useState(0);
    const [produto3, setProduto3] = useState(0);

    const preco1 = 3;
    const preco2 = 10;
    const preco3 = 2;

    let quantidadeTotal = produto1 + produto2 + produto3;

    let valorTotal =
        produto1 * preco1 +
        produto2 * preco2 +
        produto3 * preco3;

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Carrinho de Compras</Text>

            <View style={styles.produto}>
                <Text style={styles.nome}>Produto 1</Text>
                <Text>Preço: R$ 3,00</Text>

                <View style={styles.botoes}>
                    <Button
                        title="-"
                        onPress={() => {
                            if (produto1 > 0) {
                                setProduto1(produto1 - 1);
                            }
                        }}
                    />

                    <Text style={styles.quantidade}>{produto1}</Text>

                    <Button
                        title="+"
                        onPress={() => setProduto1(produto1 + 1)}
                    />
                </View>
            </View>

            <View style={styles.produto}>
                <Text style={styles.nome}>Produto 2</Text>
                <Text>Preço: R$ 10,00</Text>

                <View style={styles.botoes}>
                    <Button
                        title="-"
                        onPress={() => {
                            if (produto2 > 0) {
                                setProduto2(produto2 - 1);
                            }
                        }}
                    />

                    <Text style={styles.quantidade}>{produto2}</Text>

                    <Button
                        title="+"
                        onPress={() => setProduto2(produto2 + 1)}
                    />
                </View>
            </View>

            <View style={styles.produto}>
                <Text style={styles.nome}>Produto 3</Text>
                <Text>Preço: R$ 2,00</Text>

                <View style={styles.botoes}>
                    <Button
                        title="-"
                        onPress={() => {
                            if (produto3 > 0) {
                                setProduto3(produto3 - 1);
                            }
                        }}
                    />

                    <Text style={styles.quantidade}>{produto3}</Text>
                    <Button
                        title="+"
                        onPress={() => setProduto3(produto3 + 1)}
                    />
                </View>
            </View>

            <Text style={styles.resultado}>
                Quantidade total: {quantidadeTotal}
            </Text>

            <Text style={styles.resultado}>
                Valor total: R$ {valorTotal.toFixed(2)}
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
        gap: 15,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },

    produto: {
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        gap: 10,
    },

    nome: {
        fontSize: 20,
        fontWeight: "bold",
    },

    botoes: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },

    quantidade: {
        fontSize: 20,
        fontWeight: "bold",
    },

    resultado: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },

});