import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Tick from '../assets/Tick';
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
    {
      text: 'All available vendors',
      key: '1',
      borderColor: '#F3F5F9',
      selected: false,
    },
    {
      text: 'My preferred vendors',
      key: '2',
      borderColor: '#F3F5F9',
      selected: false,
    },
    {
      text: 'Search for vendors',
      key: '3',
      borderColor: '#F3F5F9',
      selected: false,
    },
    {
      text: 'Invite vendors I know to ARK',
      key: '4',
      borderColor: '#F3F5F9',
      selected: false,
    },
  ]);
  const handlePress = (key: string) => {
    const updatedActions = [...actions];

    const selectedItem = updatedActions.find(item => item.key === key);
    if (selectedItem) {
      selectedItem.borderColor =
        selectedItem.borderColor === '#D9A521' ? '#FFF' : '#D9A521';
      selectedItem.selected = !selectedItem.selected;
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
            key={item.key}
            activeOpacity={1}>
            <View
              key={item.key}
              style={[styles.Box, {borderColor: item.borderColor}]}>
              <Text style={styles.Text}>{item.text}</Text>
              {item.selected && (
                <Text
                  style={{
                    position: 'absolute',
                    right: 10,
                    color: 'black',
                    paddingTop: '5%',
                  }}>
                  <Tick />
                </Text>
              )}
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
              Save & Exit
            </Button>
          </View>
          <View style={styles.Button2}>
            <Button
              onPress={NavigateToNextPage}
              labelStyle={styles.openForBids}>
              {/* <Button  labelStyle={styles.openForBids}> */}
              Continue
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
   // backgroundColor: '#F3F5F9',
    height: hp(100),
  },

  Box: {
    paddingTop: hp((18 / height) * 100),
    paddingBottom: hp((20 / height) * 100),
    marginTop: hp((16 / height) * 100),
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingLeft: wp((20 / width) * 100),
    shadowColor: '#3A2A00',
    shadowOffset: {width: 0, height: 16},
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },
  Text: {
    color: '#101840',
   // fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },

  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveAndExit: {
    color: '#0B30B2',

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
    paddingTop: hp((2 / height) * 100),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  Button1: {
    width: wp(40),
    height: hp(7),
    borderColor: '#0B30B2',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingTop: hp((6 / height) * 100),
    paddingBottom: hp((6 / height) * 100),
  },
  Button2: {
    width: wp(40),
    height: hp(7),

    backgroundColor: '#0B30B2',
    borderRadius: 12,
    paddingTop: hp((6 / height) * 100),
    paddingBottom: hp((6 / height) * 100),
    elevation:4,
    shadowOffset: { width: 5, height: 3 },
  shadowColor: 'black', 
  shadowOpacity: 0.5, 
  shadowRadius: 5,
    
  },
});
export default Vendors_Body;
