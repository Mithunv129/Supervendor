import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import { Input } from 'react-native-elements';



function Select_Location_Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which location would you like to subcontract to other vendors </Text>
      <View  style={styles.part1container}>
        <Input style={styles.input}
          placeholder="Search..."
         
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   width:312,
   paddingLeft:1,
   flexDirection: 'column',},


   part1container:{
    marginTop:'5%',
    width:'124.2%',
    marginLeft:'-3%',
    

  
  },
  input:{
    borderRadius:16,
    borderWidth:1,
    height:'120%',
    borderColor:'rgba(51, 102, 255, 0.5);',
    paddingHorizontal: 10,
    backgroundColor:'#FFF',
    width:312,
   
   
  },
  text: {
    color: '#101840', // Text color
    fontFamily: 'Manrope', // Font family
    fontSize: 20, // Font size
    fontStyle: 'normal', // Font style
    fontWeight: '400', // Font weight
    lineHeight: 22, // Line height (in points or adjust as needed)
  },
});

export default  Select_Location_Header ;
