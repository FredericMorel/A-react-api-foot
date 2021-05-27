import React from "react";
import { StyleSheet, Text, View, TouchableHighlight,Image } from "react-native";


const BlockPicture = (props) => {

  return (
    <TouchableHighlight style={styles.view}
        onPress={()=>{
          props.nav.navigate(props.action,props.image)}}
        underLayColor='#FFFFFF'
        >
      <View>
            <Image style={styles.image} source={{uri:props.image}} />
      </View>
    </TouchableHighlight>
  );
};

const styles=StyleSheet.create({ 
    image: {
        width: 75,
        height:75,
    },
    view : {
        width: 75,
        height: 75,
        margin: 5,
    }

})

export default BlockPicture