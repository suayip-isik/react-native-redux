import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        //marginVertical: '5%',
        //paddingVertical: '5%',
        //paddingHorizontal: '5%',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        marginHorizontal: '2%',
        marginVertical: '2%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleButtonContainer: {
        paddingLeft: '5%',
        flex: 1,
        paddingVertical: '5%'
    },
    deleteButton: {
        //borderWidth: 1,
        //borderColor: 'lightgray',
        backgroundColor: '#bdbdbd',
        marginRight: '5%',
        borderRadius: 11,
    },
    buttonText: {
        padding: 15,
        color: 'red',
    },
});