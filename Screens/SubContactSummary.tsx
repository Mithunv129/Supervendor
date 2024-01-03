import { StyleSheet,Text,View,Image} from 'react-native';
import SubContactSummaryBody from '../components/SubContactSummaryBody';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width, height, scale} = Dimensions.get('window');

function SubContactSummary(){
    return(
      <View style={{flex: 1}}>
           <LinearGradient
      colors={['#FFEDBF','#FFFFFF','#FFEDBF','#FFFFFF']}
      locations={[0, 0.2, 0.4, .7]}
 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          marginRight: hp((24 / height) * 100),
          marginLeft: hp((24 / height) * 100),
        }}>
       <SubContactSummaryBody />
      </View>
      </LinearGradient>
    </View>
    )
}

export default SubContactSummary;