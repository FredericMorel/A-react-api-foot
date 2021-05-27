import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import GlobalStyles from '../globalStyleSheet';
import BlockPicture from '../blockPicture';
import TopBar from '../topBar';
import DATA from "../Data";


const ListPicture=(props)=>{

        return (
            <View style={GlobalStyles.view}>
                <TopBar
                    title = {"Votre Galerie"}
                    iconBack={null}
                    iconAdd={true}
                    nav={props.navigation}
                />
                <View style={styles.listBlock}>
                    {generatePictureBlock(DATA.pictureList.data, props.navigation)}
                </View>
                

            </View>
        )

}
function generatePictureBlock(data, nav){
    return (
        data.map(
            (item,k)=>
            <BlockPicture key={k} image={item.image} nav={nav} action={"ViewPicture"} image={item.image} />
        )
    )
}

const styles=StyleSheet.create({
    listBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap:'wrap',
        paddingTop: 30
    }
})
export default ListPicture