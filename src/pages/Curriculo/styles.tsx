import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f7f7f7',
        paddingTop: 100,
    },
    header: {
        justifyContent:'center',
        alignItems:'center'
    },
    name: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 25
    },
    profileImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    socialContainer: {
        marginTop: 20,
        marginBottom: 20,
        width:'80%',
        display:"flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})