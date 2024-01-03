
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
//import SvgNote2 from '../assets/SvgNote';
import SubContractImage from '../assets/HandShake'
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height, scale} = Dimensions.get('window');

const componentMap = {
  SvgImageAssignTeam: (props: {size: number}) => (
    <SvgImageAssignTeam {...props} />
  ),
  SvgImageLock: (props: {size: number}) => <SvgImageLock {...props} />,
  SvgImageNewJob: (props: {size: number}) => <SvgImageNewJob {...props} />,
  SvgNote: (props: {size: number}) => <SvgNote {...props} />,
  SubContractImage: (props: {size: number}) => <SubContractImage {...props} />,

 
};

export function DailyCleaning(): JSX.Element {
  const navigation: any = useNavigation();
  const NavigateToNextPage = () => {
    navigation.navigate('Create_SubContract');
  };
  const [actions, setAction] = useState([
    {name: 'SvgImageLock', text: 'Facility Access', key: '1'},
    {name: 'SvgImageAssignTeam', text: 'Assign Teams', key: '2'},
    {name: 'SvgImageNewJob', text: 'Issue new job card', key: '3'},
    {name: 'SvgNote', text: 'Pre-shift checklist', key: '4'},
    {name: 'SubContractImage', text: 'Subcontract part of the job', key: '5'},
  ]);
  return (
    <View style={styles.container}>
      {actions.map(item => {
        const SvgComponent = componentMap[item.name];
        return (
          <TouchableOpacity
            onPress={item.name == 'SubContractImage' ? NavigateToNextPage : undefined} activeOpacity={2}>
            <View key={item.key} style={styles.actionContainer}>
              <View style={styles.rowContainer}>
                <SvgComponent size={200} />
                <View>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </View>
              <View style={styles.nextIcon}>
                <SvgImageNext size={200} />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFEDBF',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  actionContainer: {
    paddingTop: hp((17.58 / height) * 100),
    paddingBottom: hp((18.42 / height) * 100),
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#FFF',
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },

  text: {
   width: wp(50),
 
    paddingLeft: wp((16 / width) * 100),
    color: '#0F1532',
    //fontFamily: 'Manrope',
    fontSize: hp(1.75),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0.25,
  },
  nextIcon: {
    marginLeft: hp((20 / height) * 100),
  },
});
export default DailyCleaning;
