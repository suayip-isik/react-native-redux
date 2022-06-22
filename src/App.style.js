import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    textLine: {
        color: 'black',
        fontSize: 16,
        textDecorationLine: "line-through"
    },
    button: {
        paddingHorizontal: '3%',
        marginLeft: '2%',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 22,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        padding: 0,
        paddingLeft: 5,
        borderRadius: 4,
        borderColor: '#e0e0e0',
        fontSize: 22,
    },
    addView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '2%',
        marginVertical: '3%',
        paddingTop: '5%'
    },
});