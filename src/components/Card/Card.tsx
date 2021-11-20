import React from "react";
import {Text, View, SafeAreaView } from "react-native";
import { styles } from './style'

export default function Card({header,children}: any) {
    return (
        
            <View style={styles.card}>
                <View>
                    <Text style={styles.cardHeader}>
                        {header}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardContent}>
                        {children}
                    </Text>
                </View>
            </View>
        
    )
}
