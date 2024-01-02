import { JSXElementConstructor } from 'react';
import {Text,StyleSheet,View} from 'react-native'

function CongratulationBody(){
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
    fontFamily: 'Manrope', 
    fontSize: 25,
    fontStyle: 'normal', 
    fontWeight: '400', 
  },
  textview:{
    paddingTop:'80%',
  }
  }
)

export default CongratulationBody;