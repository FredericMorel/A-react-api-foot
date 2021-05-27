import React from "react";
import {
  TouchableHighlight,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GlobalStyles from "../globalStyleSheet";
import TopBar from "../topBar";

const ViewPicture = (props) => {
  return (
    <View style={GlobalStyles.view}>
      <TopBar
        title= {"Votre picture"}
        iconBack={false}
        iconAdd={null}
        nav={props.navigation}
      />
      <Image style={{ height: 500 }} source={{ uri: props.route.params }} />
    </View>
  );
};

export default ViewPicture;
