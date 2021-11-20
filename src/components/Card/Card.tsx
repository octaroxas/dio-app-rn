import React from "react";
import {Text, View, SafeAreaView } from "react-native";
import { styles } from './style'
import { Feather } from '@expo/vector-icons'

export default function Card({header,...rest}) {
    return (
        
            <View style={styles.card}>
                <View>
                    <Text style={styles.cardHeader}>
                        {header}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardContent}>
                        {rest.children}
                    </Text>
                </View>
            </View>
        
    )
}
