import React from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return( 
  <View>
    <Text style={styles.text}>Hello there!!</Text>
    <Text style={styles.text}>i am a subheading</Text>
    <Button title="go to componentScreen" onPress={()=>navigation.navigate('Component')}/>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

