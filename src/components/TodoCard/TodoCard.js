import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./TodoCard.style";

const TodoCard = ({ title, style, onPress, deleteButtonOnPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.titleButtonContainer} onPress={onPress} >
                <Text style={style}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={deleteButtonOnPress}>
                <Text style={styles.buttonText}>Sil</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TodoCard;