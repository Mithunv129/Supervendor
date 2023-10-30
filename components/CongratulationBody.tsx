import { JSXElementConstructor } from 'react';
import {Text,StyleSheet,View} from 'react-native'

function congratulationBody(){
    return(
      <View style={style.textview}>
        <Text style={style.text}>Congratulations😊😊</Text>
      </View>
    )
}

const style=StyleSheet.create({
  text:{
    textAlign:'center',
    color:'black',
    fontFamily: 'Manrope', // Font family (ensure you have the font loaded)
    fontSize: 25, // Font size
    fontStyle: 'normal', // Font style
    fontWeight: '400', // Font weight'
  },
  textview:{
    paddingTop:'80%',
  }
  }
)

export default congratulationBody;