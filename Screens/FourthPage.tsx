import {Text,View,StyleSheet} from 'react-native';
import FourthPageHeader from '../components/FourthPageHeader';
import FourthPageBody from '../components/FourthPageBody';

function FourthPage(){
    return(
        <>
   <View style = {styles.header}>
       <FourthPageHeader />
   </View>
   <View style = {styles.body} >
        <FourthPageBody/>
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

export default FourthPage;