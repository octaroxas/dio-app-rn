import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems: 'center'
    },
    head: {
        fontSize: 25
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6A5ACD',
        height: 60,
        width: '90%',
        // width: Dimensions.get('screen').width-20,
        borderRadius: 10
    },
    number: {
        fontSize: 20
    }
})
