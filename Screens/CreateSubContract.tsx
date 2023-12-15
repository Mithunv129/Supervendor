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
const {width, height, scale} = Dimensions.get('window');


function CreateSubContract() {
  return (
    <View style={{backgroundColor:"#F3F5F9",flex:1}}>
       <View style={{marginLeft:wp((24/width)*100),marginRight:wp((24/width)*100)}}>
      <CreateSubContractBody />
    </View>
    </View>
   
  );
}

export default CreateSubContract;
