import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

/* Mon premier component */
const Button = (props) => {
  return (
    <TouchableHighlight
      style={{ backgroundColor: "#2D0DF3" }}
      activeOpacity={0.6}
      underlayColor="#705AFB"
      onPress={props.action}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 51,
  },

  buttonText: {
    textAlign: "center",
    marginTop: 15,
    color: "white",
    textTransform: "uppercase",
  },
});
export default Button;
