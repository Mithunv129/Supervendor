import { StyleSheet,Text,View,Image} from 'react-native';
import SubContractDetailsBody from '../components/SubContractDetailsBody';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
const {width, height, scale} = Dimensions.get('window');

function SubContractDetails(){
  return (
    <View style={{backgroundColor:"#F3F5F9",flex:1}}>
         <LinearGradient
      colors={['#FFEDBF','#FFFFFF','#FFEDBF','#FFFFFF']}
      locations={[0, 0.2, 0.4, .7]}
 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
       <View style={{marginLeft:wp((24/width)*100),marginRight:wp((24/width)*100)}}>
     
    
      < SubContractDetailsBody/>
      
    </View>
    </LinearGradient>
    
    </View>
   
  );
}

export default SubContractDetails;