import { StyleSheet,Text,View,Image, Dimensions} from 'react-native';
import CongratulationBody from '../components/CongratulationBody';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  const {width, height, scale} = Dimensions.get('window');
  
  
function CongratulationPage(){
    return(
        <View style={{backgroundColor:"#F3F5F9",flex:1}}>
            <View style={{marginLeft:wp((24/width)*100),marginRight:wp((24/width)*100)}}>
               <CongratulationBody/>
            </View>
        </View>
    )
}

export default CongratulationPage;