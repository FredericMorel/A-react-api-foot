import React , {useState,useEffect} from "react";
import {
  TouchableHighlight,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GlobalStyles from "../globalStyleSheet";
import TopBar from "../topBar";
import MyButton from '../button';
import * as ImagePicker from 'expo-image-picker';





const AddPicture = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={GlobalStyles.view}>
      <TopBar
        title={"Ajouter votre picture"}
        iconBack={false}
        iconAdd={null}
        nav={props.navigation}
      />
      <ScrollView>

        <TouchableHighlight onPress={pickImage}>
          <Image style={{width: 391, height: 232}} source={(image==null? require("../images/AddPicture.jpg"):{uri:image})}/>
        </TouchableHighlight>

        <TextInput style={styles.inputTitle} placeholder={"titre de l'image"}/>
        <View style={styles.textarea}>
            <TextInput style={styles.inputDescription}
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={10}
              placeholder= {"Description"} 
            
            />

        </View>
         <MyButton name="Ajouter Image"/>
      </ScrollView>
    </View>
  );
};

const styles= StyleSheet.create({
  inputTitle: {
    height:47,
    borderWidth:1,
    marginTop: 27,
    marginBottom: 34
  },
  inputDescription:{
    borderWidth: 1,
    textAlignVertical: 'top',

  },
  textarea: {
    flex:1,
    height: 150,
    marginBottom: 50,
    justifyContent: 'flex-start'
  }
})

export default AddPicture;
