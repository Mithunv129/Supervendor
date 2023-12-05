import {Text,View,StyleSheet} from 'react-native';
import Select_Location_Header from '../components/Select_Location_Header';
import Select_Location_Body from '../components/Select_Location_Body';

function Select_Location(){
    return(
        <>
   <View style = {styles.header}>
       <Select_Location_Header />
   </View>
   <View style = {styles.body} >
        <Select_Location_Body/>
   </View>
  
   </>
    )
}
const styles = StyleSheet.create(
    {
      header:{
         flex:1,
        padding :24,
      },
      body:{
        flex:3.5,
        //marginBottom:'100%',
        
      }
  
  
    }
)

export default Select_Location;