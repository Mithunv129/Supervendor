import { StyleSheet,Text,View,Image} from 'react-native';
import SubContactSummaryBody from '../components/SubContactSummaryBody';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
const {width, height, scale} = Dimensions.get('window');

function SubContactSummary(){
    return(
      <View style={{flex: 1, backgroundColor: '#F3F5F9'}}>
      <View
        style={{
          marginRight: hp((24 / height) * 100),
          marginLeft: hp((24 / height) * 100),
        }}>
       <SubContactSummaryBody />
      </View>
    </View>
    )
}

export default SubContactSummary;