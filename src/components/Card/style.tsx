import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: '80%',
        borderRadius: 1,
        padding: 30,
        margin:10,
        backgroundColor: '#f1f1f1',
        justifyContent:"center",
    },
    cardHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardContent: {
        fontSize: 14,
        display:'flex',
        flexDirection: 'column'
    }
})