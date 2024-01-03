import {Text,View,StyleSheet} from 'react-native';
import SelectLocationHeader from '../components/SelectLocationHeader';
import SelectLocationBody from '../components/SelectLocationBody';
import LinearGradient from 'react-native-linear-gradient';

function SelectLocation(){
    return(
      <LinearGradient
      colors={['#FFEDBF','#FFFFFF','#FFEDBF','#FFFFFF']}
      locations={[0, 0.23, 0.4, .9]}
 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
        <>
   <View style = {styles.header}>
       <SelectLocationHeader />
   </View>
   <View style = {styles.body} >
        <SelectLocationBody/>
   </View>
  
   </>
   </LinearGradient>
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