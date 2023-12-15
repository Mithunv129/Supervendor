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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height, scale} = Dimensions.get('window');

function DailyGeneralCleaning() {
  return (
    <View style={{flex: 1, backgroundColor: '#F3F5F9'}}>
      <View
        style={{
          marginRight: hp((24 / height) * 100),
          marginLeft: hp((24 / height) * 100),
        }}>
        <DailyCleaning />
      </View>
    </View>
  );
}

export default DailyGeneralCleaning;
