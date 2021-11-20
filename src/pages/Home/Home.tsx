import React, {useState} from "react";
import { Text, View, TouchableOpacity, SafeAreaView} from "react-native";
import { styles } from "./styles/styles";

export default function Home() {

    const randNUmber = () => {
        let n = Number(Math.random()*10) 
        n = Number(n.toFixed(0))
        setNum(n)
    }    
    const [num, setNum] = useState(0)

    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.head}>
                    Gerando Números Randomicos
                </Text>
                <Text style={styles.number}>
                    Numero Gerado {num}
                </Text>
            <TouchableOpacity style={styles.button} onPress={randNUmber} >
                <Text>Gerar numero</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
