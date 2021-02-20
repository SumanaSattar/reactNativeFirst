import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
    return <Text style={styles.text}>i am a Component</Text>

}

const styles = StyleSheet.create({
    text:{
        fontSize :20,
        
    }
})
export default ComponentScreen;