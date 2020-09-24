import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = props => {

    return (
        <TouchableOpacity style={styles.button} onPress={props.pressed}>
            <Text style={styles.btnText}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 3,
        color: "white",
        alignItems: 'center',
        justifyContent: "center",
        width: '25%',
        backgroundColor: '#c19642',
        paddingVertical: 30,
        marginHorizontal: 3,
        marginVertical: 5,
    },
    btnText: {
        color: 'white',
    }
})

export default Button;