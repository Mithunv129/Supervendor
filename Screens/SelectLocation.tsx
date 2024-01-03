import {Text,View,StyleSheet} from 'react-native';
import SelectLocationHeader from '../components/SelectLocationHeader';
import SelectLocationBody from '../components/SelectLocationBody';

function SelectLocation(){
    return(
        <>
   <View style = {styles.header}>
       <SelectLocationHeader />
   </View>
   <View style = {styles.body} >
        <SelectLocationBody/>
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
        marginLeft:24,
        marginRight:24,

        //marginBottom:'100%',
        
      }
  
  
    }
)

export default SelectLocation;