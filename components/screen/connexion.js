import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import MyButton from "../button/";
import GlobalStyles from "../globalStyleSheet";
import API from "../ApiRequest";

const connexion = (props) => {
  return (
    <View style={GlobalStyles.view}>
      <Text style={styles.title}>Bienvenue </Text>

      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder={"Votre login"} />

        <TextInput style={styles.input} placeholder={"Votre mot de passe"} />
      </View>

      <MyButton
        name={"se connecter"}
        action={() => {
          props.navigation.navigate("ListPicture");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    marginTop: 134,
  },
  inputView: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    marginBottom: 44,
    height: 51,
  },
});

export default connexion;
