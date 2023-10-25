import { StyleSheet,Text,View,Image} from 'react-native';
import SvgComponent from '../assets/SvgImage'

function Homeheader(){
    return(
        <View style={style.container1}>
          <View style={style.header}>
            <Image source={require('../assets/icon4.png')} style={style.image}/>
            <Text style={style.container}>ARK</Text>
            <View style={style.bellcss}>
               <Image source={require('../assets/Bell.png')} style={style.bell}/>
            </View>
          </View>
        </View>
    )
}

const style=StyleSheet.create({
  container1:{
    //flex:1,
    //flexDirection:'row',
    
    //alignItems: 'center'
  },
    header:{
      flex:1,
      marginLeft:20,
      marginTop:35,
      flexDirection:'row',
      alignItems:'center',
      
    },
    image:{
        width: 36,
        height: 24,
    },
    container:{
      width: 56,
      height: 28,
      color:"#000",
      marginLeft:5,
      fontFamily:'Futura PT',
      fontSize:24,
      fontWeight:'500',
      fontStyle:'normal',
      lineHeight:28,
      letterSpacing:0.15,
     
    },
    bell:{
      width: 23,
      height: 23,
     
    },
    bellcss:{
      paddingTop:8,
      width: 40,
      height: 40,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: 'rgba(51, 102, 255, 0.30)',
      elevation: 8, 
      borderRadius:30,
      alignItems:'center',
      marginLeft:208
    }

})
export default Homeheader;

