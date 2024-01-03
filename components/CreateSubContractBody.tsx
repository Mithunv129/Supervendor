import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import CheckBox from 'react-native-check-box';
import Plus from '../assets/Plus';
import Check1 from '../assets/Check1';
import Check2 from '../assets/check2';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height, scale} = Dimensions.get('window');

function CreateSubContractBody() {
  const navigation: any = useNavigation();
  const NavigateToNextPage = () => {
    navigation.navigate('Select_Location');
  };
  const [isChecked, setisChecked] = useState(false);
  const [subcontractName, setSubcontractName] = useState('');
  const toggleisChecked = () => {
    setisChecked(!isChecked);
  };
  return (
    <View style={style.container}>
      <View style={style.card}>
        <View style={style.content}>
          <Check1 />
          <Text style={style.checkboxText}>Create Subcontract</Text>
        </View>
        <View style={style.divider1}></View>
        <View style={style.content1}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={NavigateToNextPage}>
            <View style={style.Button}>
              <Plus />
              <Text style={style.bText}>Add locations</Text>
            </View>
          </TouchableHighlight>
          <View>
            <Text style={style.subcontract}>Subcontract name</Text>
            <View style={style.subcontractText}>
              <TextInput
                style={style.Input}
                underlineColorAndroid="transparent"
                onChangeText={text => setSubcontractName(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={style.card1}>
        <View style={style.MultiCon}>
          <Check2 />
          <Text style={style.MultiConText}>Create multiple subcontracts</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: hp((100 / height) * 100),
        }}>
        <View style={style.ButtonView}>
          <Button onPress={() => {}} labelStyle={style.buttonLabel}>
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
   // backgroundColor: '#F3F5F9',
    height: hp(100),
    
  },
  card: {
    backgroundColor: '#FFF',
    marginTop: hp((24 / height) * 100),
    paddingBottom: hp((36 / height) * 100),
    borderRadius: 16,
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },
  card1: {
    backgroundColor: '#FFF',
    paddingLeft: wp((19 / width) * 100),
    marginTop: hp((24 / height) * 100),
    height: hp(8),
    borderRadius: 16,
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },
  ButtonView: {
    backgroundColor: '#0B30B2',
    borderRadius: 16,
    paddingTop: hp((12 / height) * 100),
    paddingBottom: hp((12 / height) * 100),
    paddingRight: wp((24 / width) * 100),
    paddingLeft: wp((24 / width) * 100),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },

  checkboxText: {
    color: '#101840',
    //fontFamily: 'Manrope',
    fontSize: hp(2.1),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    marginTop: hp((3 / height) * 100),
    marginLeft: wp((8 / width) * 100),
  },
  content: {
    marginLeft: '4%',
    paddingTop: hp((20 / height) * 100),
    paddingBottom: hp((24 / height) * 100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider1: {
    borderBottomWidth: 5,
    borderBottomColor: '#EEE',
  },
  Button: {
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    padding: wp((13 / width) * 100),
    borderColor: '#EEEEEE',
  },
  content1: {
    paddingTop: hp((32 / height) * 100),
    paddingLeft: wp((20 / width) * 100),
    paddingRight: wp((20 / width) * 100),
  },
  bText: {
    color: '#0B30B2',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.25,
    marginLeft: wp((8 / width) * 100),
    marginTop: hp((3 / height) * 100),
  },
  subcontract: {
    color: '#474D66',
    fontFamily: 'Manrope',
    fontSize: hp(1.8),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.4,
    opacity: 0.8,
    marginTop: hp((24 / height) * 100),
  },
  Input: {
    borderColor: '#EEE',
    height: hp((53 / height) * 100),
    paddingLeft: wp((12 / width) * 100),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp((4 / height) * 100),
    alignSelf: 'stretch',

   // fontFamily:"manrope",
    color: '#0F1532',
    fontSize:hp(1.9),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.25,
  borderRadius: 12,
    borderWidth: 1,
  },
  subcontractText: {
    paddingTop: '2%',
  },
  MultiCon: {
    paddingTop: hp((20 / height) * 100),
    flexDirection: 'row',
  },
  MultiConText: {
    color: '#101840',
   // fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    paddingTop: hp((6 / height) * 100),
    marginLeft: wp((6 / width) * 100),
  },

  buttonLabel: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: hp(2.3),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
export default CreateSubContractBody;
