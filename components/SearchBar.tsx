import { StyleSheet,Text,View,Image, TextInput,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SvgComponent from '../assets/SvgImage';
import { Input } from 'react-native-elements';
function Search(){
    return(
        <View style={style.container}>
        <Input style={style.input}
          placeholder="Search..."
          rightIcon={
            <AntDesign name="search1" size={10}/>
          }
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
    )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex:1,
        margin:10,
        marginTop:65
    },
    input:{
      borderRadius:14,
      borderWidth:1,
      height:52,
      borderColor:'rgba(51, 102, 255, 0.5);',
      paddingHorizontal: 10,
      backgroundColor:'#FFF'
    },
   
})
export default Search;