import { StyleSheet,Text,View,Image} from 'react-native';
import SubContractDetailsBody from '../components/SubContractDetailsBody';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
const {width, height, scale} = Dimensions.get('window');

function SubContractDetails(){
  return (
    <View style={{backgroundColor:"#F3F5F9",flex:1}}>
       <View style={{marginLeft:wp((24/width)*100),marginRight:wp((24/width)*100)}}>
      < SubContractDetailsBody/>
    </View>
    </View>
   
  );
}

export default SubContractDetails;