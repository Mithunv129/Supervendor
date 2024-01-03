import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';
const {width, height, scale} = Dimensions.get('window');
import {Avatar, Button, Card, Title} from 'react-native-paper';
import Plus from '../assets/Plus';
import Check1 from '../assets/Check1';
import Check2 from '../assets/check2';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
import DeleteIcon from '../assets/DeleteIcon'
import PencilIcon from '../assets/PencilIcon'
import PlusSymbol from '../assets/Plus';
function SubContract_Details_Body() {
  const navigation: any = useNavigation();
  const route = useRoute();
  const NavigateToNextPage = () => {
    navigation.navigate('Vendors');
  };
  const locations: [] = route.params?.locations || [];

  const [isChecked, setisChecked] = useState(false);
  const [subcontractName, setSubcontractName] = useState('');
  const toggleisChecked = () => {
    setisChecked(!isChecked);
  };
  console.log(locations);
  const YourComponent = () => {
    const [subcontractName, setSubcontractName] = useState('');
  };
  console.log(subcontractName);
  const API_BASE_URL = 'https://supervendorbackend-production.up.railway.app';

  axios.defaults.baseURL = API_BASE_URL;
  async function handleAddLocation() {
    const loc = locations.toString();
    const subcontract = subcontractName;
    try {
      const json = JSON.stringify({
        name: loc,
        subcontractname: subcontract,
      });
      
      const response = await axios.post(API_BASE_URL + '/users', json, {
        headers: {Accept: '*/*', 'Content-Type': 'application/json'},
      });
      console.log('Locations added:', response.data);
    } catch (error) {
      console.error('Error adding locations:', JSON.stringify(error));
    }
  }
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <ScrollView style={{flexGrow: 1, display: 'flex'}}>
        <View style={style.container}>  
        <View style={style.content}>
              <Text style={style.checkboxText}>Subcontract 1</Text>
              <DeleteIcon/>
              
        </View> 
        
        <View style={style.card}>
            <View style={style.content1}>
             <View style={style.FacilityContainer}>
              <Text style={style.content1Text}>Facilities</Text>
              <PencilIcon/>
             </View>
              <View style={style.locationsContainer}>
                {locations.length > 0 ? (
                  locations.map((location, index) => (
                    <View key={index}>
                      <Text style={style.locationText}>{location}</Text>
                    </View>
                  ))
                ) : (
                  <Text>No locations found</Text>
                )}
              </View>
              <View>
                <Text style={style.subcontract}>Subcontract name</Text>
                <View style={style.subcontractText}>
                  {/* <TextInput
                    style={style.Input}
                    underlineColorAndroid="transparent"
                    onChangeText={text => setSubcontractName(text)}
                  /> */}
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
              <Text style={style.MultiConText}>
                 Add new contract
              </Text>
            </View>
          </View>
          <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: hp((100 / height) * 100),
        }}>
        <View style={style.ButtonView}>
          <View style={style.Button1}>
            <Button onPress={() => {}} labelStyle={style.saveAndExit}>
              Save & Exit
            </Button>
          </View>
          <View style={style.Button2}>
            <Button
              onPress={NavigateToNextPage}
              labelStyle={style.openForBids}>
              {/* <Button  labelStyle={styles.openForBids}> */}
              Continue
            </Button>
          </View>
        </View>
      </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  container: {
   // backgroundColor: '#F3F5F9',
    height: hp(100),
  },
  card: {
    backgroundColor: '#FFF',
    marginTop: hp((-4 / height) * 100),
    paddingBottom: hp((36 / height) * 100),
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },
  card1: {
    backgroundColor: '#FFF',
    paddingLeft: wp((19 / width) * 100),
    marginTop: hp((24 / height) * 100),
    height: hp(8),
    borderRadius: 16,
    borderWidth:1,
    borderColor:"#36F",
    borderStyle:"dashed",
    elevation: 5,
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,

  },

  checkboxText: {
    color: '#101840',
    //fontFamily: 'Manrope',
    fontSize: hp(2.1),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    marginTop: hp((17/ height) * 100),
  },
  content: {
    marginLeft: '1%',
    paddingTop: hp((20 / height) * 100),
    paddingBottom: hp((24 / height) * 100),
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  FacilityContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  Button: {
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    padding: wp((13 / width) * 100),
    borderColor: '#EEEEEE',
  },
  content1: {
    paddingTop: hp((16 / height) * 100),
    paddingLeft: wp((20 / width) * 100),
    paddingRight: wp((20 / width) * 100),
  },
  bText: {
    color: '#36F',
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
    color:'#292F4D',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.4,
    opacity: 0.8,
    marginTop: hp((24 / height) * 100),
  },
  Input: {
  //   borderRadius: 14,
  //   borderWidth: 1,
  //   borderColor: '#EEE',
  //   height: hp((53 / height) * 100),
  //   paddingLeft: wp((12 / width) * 100),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginVertical: hp((4 / height) * 100),
  //   alignSelf: 'stretch',
  //  // color: '#0F1532',
  //   // fontSize:hp(1.9),
  //   // fontStyle: 'normal',
  //   // fontWeight: '500',
  //   // lineHeight: 22,
  //   // letterSpacing: 0.25,
  borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    height: hp((53 / height) * 100),
    paddingLeft: wp((12 / width) * 100),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp((4 / height) * 100),
    alignSelf: 'stretch',
    color: 'black',
  },
  subcontractText: {
     paddingTop: '2%',
  },
  MultiCon: {
    paddingTop: hp((20 / height) * 100),
    flexDirection: 'row',
    justifyContent:'center',
    paddingRight:'10%',
   
  },
  MultiConText: {
    color: '#36F',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
    paddingTop: hp((6 / height) * 100),
    marginLeft: wp((6 / width) * 100),
    letterSpacing: 0.2,

  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',


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
  content1Text: {
    color:'#292F4D',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.4,
    opacity: 0.8,
    
  },
  locationsContainer: {
    marginTop: hp((10 / height) * 100),
  },
  locationText: {
    color: '#292F4D',
   //  fontFamily: 'Manrope',
    fontSize:hp(1.9),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.25,
  },
  Button1: {
    width: wp(40),
    height: hp(7),
    borderColor: '#36F',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingTop: hp((6 / height) * 100),
    paddingBottom: hp((6 / height) * 100),
  },
  Button2: {
    width: wp(40),
    height: hp(7),
   
    backgroundColor: '#36F',
    borderRadius: 12,
    paddingTop: hp((6 / height) * 100),
    paddingBottom: hp((6 / height) * 100),
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
    paddingTop:hp((2 / height) * 100),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
export default SubContract_Details_Body;
