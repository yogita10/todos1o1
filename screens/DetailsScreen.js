import React from 'react'
import {View, Text,Button,Stylesheet} from 'react-native'


const DetailsScreen = ({navigation}) =>{
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
        title="Go to details screen...again" 
        onPress={()=> navigation.push("Details")}
        />
        <Button
        title="Go to Home" 
        onPress={()=> navigation.navigate("Home")}
        />
        <Button
        title="Go Back" 
        onPress={()=> navigation.goBack()}
        />
        
      </View>
    )
  }


export default DetailsScreen;

