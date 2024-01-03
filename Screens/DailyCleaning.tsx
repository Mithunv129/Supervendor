// import {StyleSheet, Text, View, Image} from 'react-native';
// import DailyCleaning from '../components/DailyCleaningBody';

// function DailyGeneralCleaning() {
//   return (
//     <View>
//       <DailyCleaning />
//     </View>
//   );
// }

// export default DailyGeneralCleaning;
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import DailyCleaning from '../components/DailyCleaningBody';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height, scale} = Dimensions.get('window');

function DailyGeneralCleaning() {
  return (
   
    <View style={{flex: 1, backgroundColor: '#F3F5F9'}}>
       <LinearGradient
     colors={['#FFEDBF','#FFFFFF','#FFEDBF','#FFFFFF']}
     locations={[0, 0.23, 0.4, .7]}

     start={{ x: 0, y: 0 }}
     end={{ x: 1, y: 1 }}
     style={{ flex: 1 }}
   >
      <View
        style={{
          marginRight: hp((24 / height) * 100),
          marginLeft: hp((24 / height) * 100),
        }}>
        <DailyCleaning />
      </View>
      </LinearGradient>

    </View>

  );
}

export default DailyGeneralCleaning;
