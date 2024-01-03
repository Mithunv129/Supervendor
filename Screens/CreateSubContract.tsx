// import {Text, View, StyleSheet} from 'react-native';
// import CreateSubContractBody from '../components/CreateSubContractBody';

// function CreateSubContract() {
//   return (
//     <View>
//       <CreateSubContractBody />
//     </View>
//   );
// }

// export default CreateSubContract;

import {Text, View, StyleSheet,Dimensions} from 'react-native';
import CreateSubContractBody from '../components/CreateSubContractBody';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
const {width, height, scale} = Dimensions.get('window');


function CreateSubContract() {
  return (
    <View style={{flex:1}}>
           <LinearGradient
     colors={['#FFEDBF','#FFFFFF','#FFEDBF','#FFFFFF']}
     locations={[0, 0.23, 0.4, .7]}

     start={{ x: 0, y: 0 }}
     end={{ x: 1, y: 1 }}
     style={{ flex: 1 }}
   >
       <View style={{marginLeft:wp((24/width)*100),marginRight:wp((24/width)*100)}}>
      <CreateSubContractBody />
    </View>
    </LinearGradient>
    </View>
   
  );
}

export default CreateSubContract;
