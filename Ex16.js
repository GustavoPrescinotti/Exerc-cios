import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {

    const [nome, setNome] = useState("");
    const [nota, setNota] = useState(0);

    const [quantidade, setQuantidade] = useState(0);
    const [soma, setSoma] = useState(0);

    function avaliar() {
        setQuantidade(quantidade + 1);
        setSoma(soma + nota);
    }

    return (
        <View>

            <Text>Avaliação de Atendimento</Text>

            <TextInput
                placeholder="Digite seu nome"
                onChangeText={setNome}
            />

            <Text>Escolha uma nota:</Text>

            <Button title="1" onPress={() => setNota(1)} />
            <Button title="2" onPress={() => setNota(2)} />
            <Button title="3" onPress={() => setNota(3)} />
            <Button title="4" onPress={() => setNota(4)} />
            <Button title="5" onPress={() => setNota(5)} />

            <Text>Nota escolhida: {nota}</Text>

            <Button title="Avaliar" onPress={avaliar} />

            <Text>
                {nota === 5
                    ? "Excelente!"
                    : nota === 4
                        ? "Muito bom!"
                        : nota === 3
                            ? "Bom!"
                            : nota === 2
                                ? "Ruim!"
                                : nota === 1
                                    ? "Muito ruim!"
                                    : ""}
            </Text>

            <Text>Total de avaliações: {quantidade}</Text>

            <Text>
                Média: {quantidade > 0 ? (soma / quantidade).toFixed(1) : 0}
            </Text>

        </View>
    );
}