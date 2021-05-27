import React from "react";
import {
  TouchableHighlight,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";

const TopBar = (props) => {
  return (
    <View style={styles.view}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {props.iconBack != null ? (
          <TouchableHighlight
            onPress={() => {
              props.nav.goBack();
            }}
            underlayColor="#FFFFF"
          >
            <Icon isIconBack={props.iconBack} />
          </TouchableHighlight>
        ) : null}

        <Text style={styles.title}>{props.title}</Text>
        {
        (props.iconAdd != null ? 
          <TouchableHighlight
            onPress={() => {
              props.nav.navigate("AddPicture");
            }}
            underlayColor="#FFFFF"
          >
            <Icon isIconBack={props.iconAdd} />
          </TouchableHighlight>
         : null)}
      </View>
    </View>
  );
};
const Icon = (props) => {
  return (
    <Image
      style={styles.image}
      source={
        props.isIconBack
          ? require("./images/Add.png")
          : require("./images/Back.png")
      }
    />
  );
};

const styles = StyleSheet.create({
  view: {
    height: 81,
    paddingTop: 26,
    backgroundColor: "#0E8BFF",
  },

  icon: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    width: 245,
    height: 50,
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
});

export default TopBar;
