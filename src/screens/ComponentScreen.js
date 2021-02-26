import React,{useState} from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const ComponentScreen = () => {
    const [counter,setCounter]=useState(0);
    return (
        
    <View>
    <Button title ="Add Color" />
    <Text style={styles.subtext}>i am a subheading</Text>
  </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize :30,
        color : 'red'
    },
    subtext:{
        fontSize:10
    }
        
    
})
export default ComponentScreen;