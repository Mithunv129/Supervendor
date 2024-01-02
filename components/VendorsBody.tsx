// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import SvgImageAssignTeam from '../assets/svgTeamAssign';
// import SvgImageNext from '../assets/svgNext';
// import SvgImageLock from '../assets/lock';
// import SvgImageNewJob from '../assets/svgCard';
// import SvgNote from '../assets/SvgNote';
// import SvgNote2 from '../assets/SvgNote';
// import {useNavigation} from '@react-navigation/native';
// import {Avatar, Button, Card, Title} from 'react-native-paper';
// export function Vendors_Body(): JSX.Element {
//   const navigation: any = useNavigation();
//   const NavigateToNextPage = () => {
//     navigation.navigate('SubContact_Summary');
//   };
//   const [actions, setAction] = useState([
//     {text: 'All available vendors', key: '1', borderColor: '#F3F5F9'},
//     {text: 'My preferred vendors', key: '2', borderColor: '#F3F5F9'},
//     {text: 'Search for vendors', key: '3', borderColor: '#F3F5F9'},
//     {text: 'Invite vendors I know to ARK', key: '4', borderColor: '#F3F5F9'},
//   ]);
//   const handlePress = (key: string) => {
//     const updatedActions = [...actions];

//     // Find the selected item and update its borderColor
//     const selectedItem = updatedActions.find(item => item.key === key);
//     if (selectedItem) {
//       selectedItem.borderColor =
//         selectedItem.borderColor === '#F3F5F9' ? '#3366FF' : '#F3F5F9';
//     }

//     // Update the state with the modified actions array
//     setAction(updatedActions);
//   };
//   return (
//     <View style={styles.container1}>
//       {actions.map(item => {

//         return (
//           <TouchableOpacity
//             onPress={() => handlePress(item.key)}
//             key={item.key}>
//             <View
//               key={item.key}
//               style={[styles.Box, {borderColor: item.borderColor}]}>
//               <View style={styles.container}>
//                 <View style={styles.Icon}>
//                   <Text style={styles.Text}>{item.text}</Text>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//        <View style={styles.ButtonView}>
//         <View style={styles.Button1}>
//           <Button onPress={() => {}} labelStyle={styles.saveAndExit}>
//             save & Exit
//           </Button>
//         </View>
//         <View style={styles.Button2}>
//           <Button onPress={NavigateToNextPage} labelStyle={styles.openForBids}>
//             continue
//           </Button>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container1: {
//     backgroundColor: '#F3F5F9',
//     height: '100%',
//   },
//   container: {
//     flexDirection: 'row',
//   },
//   Box: {
//     margin: '4%',
//     paddingTop: '6%',
//     paddingBottom: '6%',
//     marginTop: '5%',
//     borderRadius: 12,
//     borderWidth: 1,
//     backgroundColor: '#FFF',
//     shadowColor: 'rgba(51, 102, 255, 0.12)',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 1,
//     shadowRadius: 8,
//     elevation: 2,
//     paddingLeft: '8%',
//   },
//   Text: {
//     color: '#101840',
//     fontFamily: 'Manrope',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: '400',
//     lineHeight: 20,
//   },

//   buttonLabel: {
//     color: 'white',
//     fontFamily: 'Lato',
//     fontSize: 19,
//     fontStyle: 'normal',
//     fontWeight: '500',
//     lineHeight: 24,
//     letterSpacing: 0.15,
//   },
//   ButtonView: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//    paddingBottom: '-6%',
//     flex: 3,
//     display: 'flex',
//     alignItems: 'center',

//   },
//   saveAndExit: {
//     color: '#36F',

//     fontFamily: 'Lato',
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 24,
//     letterSpacing: 0.15,
//   },
//   openForBids: {
//     color: 'white',
//     fontFamily: 'Lato',
//     fontSize: 19,
//     fontStyle: 'normal',
//     fontWeight: '500',
//     lineHeight: 24,
//     letterSpacing: 0.15,
//   },
//   Button1: {
//     width: 160,
//     height: 60,
//     borderColor: '#36F',
//     borderWidth: 1,
//     marginLeft: '4%',
//     marginRight: '4%',
//     backgroundColor: '#FFF',
//     borderRadius: 12,
//     marginTop: '52%',
//     paddingTop: '2%',
//     paddingBottom: '2%',
//   },
//   Button2: {
//     width: 160,
//     height: 60,
//     marginLeft: '4%',
//     marginRight: '4%',
//     backgroundColor: '#36F',
//     borderRadius: 12,
//     marginTop: '52%',
//     paddingTop: '2%',
//     paddingBottom: '2%',
//   },
// });
// export default Vendors_Body;
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SvgImageAssignTeam from '../assets/svgTeamAssign';
import SvgImageNext from '../assets/svgNext';
import SvgImageLock from '../assets/lock';
import SvgImageNewJob from '../assets/svgCard';
import SvgNote from '../assets/SvgNote';
import SvgNote2 from '../assets/SvgNote';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height, scale} = Dimensions.get('window');

export function Vendors_Body(): JSX.Element {
  const navigation: any = useNavigation();
  const NavigateToNextPage = () => {
    navigation.navigate('SubContact_Summary');
  };
  const [actions, setAction] = useState([
    {text: 'All available vendors', key: '1', borderColor: '#F3F5F9'},
    {text: 'My preferred vendors', key: '2', borderColor: '#F3F5F9'},
    {text: 'Search for vendors', key: '3', borderColor: '#F3F5F9'},
    {text: 'Invite vendors I know to ARK', key: '4', borderColor: '#F3F5F9'},
  ]);
  const handlePress = (key: string) => {
    const updatedActions = [...actions];

    const selectedItem = updatedActions.find(item => item.key === key);
    if (selectedItem) {
      selectedItem.borderColor =
        selectedItem.borderColor === '#F3F5F9' ? '#3366FF' : '#F3F5F9';
    }

    setAction(updatedActions);
  };
  return (
    <View style={styles.container1}>
      <View style={{marginTop: hp((20 / height) * 100)}}>
        <Text
          style={{
            color: '#101840',
            fontFamily: 'Manrope',
            fontSize: hp(2.1),
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 22,
          }}>
          How would you like to select vendors to {'\n'}bid for the job ?{' '}
        </Text>
      </View>

      {actions.map(item => {
        return (
          <TouchableOpacity
            onPress={() => handlePress(item.key)}
            key={item.key}>
            <View
              key={item.key}
              style={[styles.Box, {borderColor: item.borderColor}]}>
              <Text style={styles.Text}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: hp((100 / height) * 100),
        }}>
        <View style={styles.ButtonView}>
          <View style={styles.Button1}>
            <Button onPress={() => {}} labelStyle={styles.saveAndExit}>
              save & Exit
            </Button>
          </View>
          <View style={styles.Button2}>
            <Button
              onPress={NavigateToNextPage}
              labelStyle={styles.openForBids}>
              {/* <Button  labelStyle={styles.openForBids}> */}
              continue
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#F3F5F9',
    height: hp(100),
    // height: '100%',
  },
  // container: {
  //   flexDirection: 'row',
  // },
  Box: {
    // margin: '4%',
    paddingTop: hp((18 / height) * 100),
    paddingBottom: hp((20 / height) * 100),
    marginTop: hp((16 / height) * 100),
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(51, 102, 255, 0.12)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
    paddingLeft: wp((20 / width) * 100),
  },
  Text: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },

  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    // paddingBottom: '-6%',
    // flex: 3,
    //display: 'flex',
    // alignItems: 'center',
  },
  saveAndExit: {
    color: '#36F',

    fontFamily: 'Lato',
    fontSize: hp(2),
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  openForBids: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  Button1: {
    width: wp(40),
    height: hp(7),
    borderColor: '#36F',
    borderWidth: 1,
    // marginLeft: '4%',
    // marginRight: '4%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    // marginTop: '52%',
    paddingTop: hp((6 / height) * 100),
    paddingBottom: hp((6 / height) * 100),
  },
  Button2: {
    width: wp(40),
    height: hp(7),
    // marginLeft: '4%',
    // marginRight: '4%',
    backgroundColor: '#36F',
    borderRadius: 12,
    // marginTop: '52%',
    paddingTop: hp((6 / height) * 100),
    paddingBottom: hp((6 / height) * 100),
  },
});
export default Vendors_Body;
