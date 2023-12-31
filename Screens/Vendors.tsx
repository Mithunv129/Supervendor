// import { StyleSheet,Text,View,Image} from 'react-native';
// import VendorsBody from '../components/VendorsBody';
// function Vendors(){
//     return(
//         <View>
//             <VendorsBody/>
//         </View>
//     )
// }

// export default Vendors;

// import {Text, View, StyleSheet,Dimensions} from 'react-native';
// import SelectLocationHeader from '../components/SelectLocationHeader';
// import SelectLocationBody from '../components/SelectLocationBody';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import { ScrollView } from 'react-native';
// const {width, height, scale} = Dimensions.get('window');

// function SelectLocation() {
//   return (
//     <View style={{flex: 1, backgroundColor: '#F3F5F9'}}>
//       <ScrollView style={{marginRight:wp((24/width)*100),marginLeft:wp((24/width)*100),}}>
//         <View style={styles.header}>
//           <SelectLocationHeader />
//         </View>
//         <View style={styles.body}>
//           <SelectLocationBody />
//         </View>
//       </ScrollView >
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//  header: {
//    flex: 1,
//   //   padding: 24,
//   },
//   body: {
//    // flex: 3.5,
//     //marginBottom:'100%',
//   //  backgroundColor:'red',

//   },
// });

// export default SelectLocation;

import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import VendorsBody from '../components/VendorsBody';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
const {width, height, scale} = Dimensions.get('window');

function Vendors() {
  return (
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
          marginLeft: wp((24 / width) * 100),
          marginRight: wp((24 / width) * 100),
        }}>
        <VendorsBody />
      </View>
      </LinearGradient>
    </View>
  );
}

export default Vendors;
