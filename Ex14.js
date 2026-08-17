import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {

    const [tamanho, setTamanho] = useState("");
    const [valor, setValor] = useState(0);
    const [borda, setBorda] = useState(false);
    const [refri, setRefri] = useState(false);

    return (
        <View>

            <Text>Pedido de Pizza</Text>

            <Button
                title="Pequena - R$ 20"
                onPress={() => {
                    setTamanho("Pequena");
                    setValor(20);
                }}
            />

            <Button
                title="Média - R$ 30"
                onPress={() => {
                    setTamanho("Média");
                    setValor(30);
                }}
            />

            <Button
                title="Grande - R$ 40"
                onPress={() => {
                    setTamanho("Grande");
                    setValor(40);
                }}
            />

            <Button
                title="Borda recheada + R$ 5"
                onPress={() => setBorda(!borda)}
            />

            <Button
                title="Refrigerante + R$ 8"
                onPress={() => setRefri(!refri)}
            />

            <Text>Resumo do Pedido</Text>

            <Text>Pizza: {tamanho}</Text>

            <Text>
                Borda: {borda ? "Sim" : "Não"}
            </Text>

            <Text>
                Refrigerante: {refri ? "Sim" : "Não"}
            </Text>

            <Text>
                Total: R$ {valor + (borda ? 5 : 0) + (refri ? 8 : 0)}
            </Text>

        </View>
    );
}