import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function App() {

    const [dado1, setDado1] = useState(0);
    const [dado2, setDado2] = useState(0);
    const [maior, setMaior] = useState(0);

    function jogar() {
        let d1 = Math.floor(Math.random() * 6) + 1;
        let d2 = Math.floor(Math.random() * 6) + 1;

        setDado1(d1);
        setDado2(d2);

        if (d1 + d2 > maior) {
            setMaior(d1 + d2);
        }
    }

    return (
        <View>

            <Text>Jogo de Dados</Text>

            <Text>Dado 1: {dado1}</Text>
            <Text>Dado 2: {dado2}</Text>

            <Text>Soma: {dado1 + dado2}</Text>

            <Button
                title="Jogar"
                onPress={jogar}
            />

            <Text>
                {dado1 === dado2 && dado1 !== 0
                    ? "Você tirou uma dupla!"
                    : dado1 + dado2 > 8
                        ? "Pontuação alta!"
                        : dado1 !== 0
                            ? "Tente novamente!"
                            : ""}
            </Text>

            <Text>Maior soma: {maior}</Text>

        </View>
    );
}