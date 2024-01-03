import {useState, useEffect} from 'react';
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
import CheckBox from 'react-native-check-box';
import Plus from '../assets/Plus';
import Check1 from '../assets/Check1';
import Check2 from '../assets/check2';
import Pencil from '../assets/Pencil';
import PencilIcon from '../assets/PencilIcon';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Image} from 'react-native-svg';

function SubContact_Summary_Body() {
  const navigation: any = useNavigation();
  const NavigateToNextPage = () => {
    navigation.navigate('congratulationPage');
  };
  const [isChecked, setisChecked] = useState(false);
  const [subcontractName, setSubcontractName] = useState('');
  const toggleisChecked = () => {
    setisChecked(!isChecked);
  };
  const [fetchedData, setFetchedData] = useState([]);
  const [lastElements, setLastElements] = useState([]);

  const apiUrl = 'https://supervendorbackend-production.up.railway.app/users';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log('Response:', response);

        const data = response.data;
        console.log('Fetched Data:', typeof data[data.length - 1].name);
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return () => {};
  }, []);
      //console.log(fetchedData);
  const lastElement: [] =
    fetchedData.length > 0
      ? fetchedData[fetchedData.length - 1].name.toString().split(',')
      : '';
  //setLastElements(fetchedData);
  console.log(typeof lastElement);
  const subname: string =
    fetchedData.length > 0
      ? fetchedData[fetchedData.length - 1].subcontractname
      : '';

  return (
    <View style={style.container}>
      <View style={style.subcontent}>
        <Text style={style.checkboxText}>Subcontract(s)</Text>
        <PencilIcon />
      </View>
      <View style={style.card}>
        <View style={style.content}>
          <Text style={style.checkboxText}>Subcontract</Text>
        </View>
        <View style={style.content1}>
          <Text style={style.facilitiestext}>Facilities</Text>
          <View style={style.facilitiesContainer}>
            {}
            {lastElement.length > 0 ? (
              lastElement.map((data, index) => (
                <View key={index}>
                  <Text style={style.facilitiesText}>{data}</Text>
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
              <Text
                style={{
                  color: 'red',
                  fontSize: hp(1.9),
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 22,
                  letterSpacing: 0.25,
                }}>
                {subname}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.selectVendorsView}>
        <Text style={style.selectVendorsText}>Selected vendors</Text>
        <PencilIcon />
      </View>
      <View style={style.card1}>
        <View style={style.MultiCon}>
          <Text style={style.MultiConText}>
            All available vendors in the marketplace
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: hp((60 / height) * 100),
        }}>
        <View style={style.ButtonView}>
          <View style={style.Button1}>
            <Button onPress={() => {}} labelStyle={style.saveAndExit}>
              Save & Exit
            </Button>
          </View>
          <View style={style.Button2}>
            <Button onPress={NavigateToNextPage} labelStyle={style.openForBids}>
              {/* <Button  labelStyle={styles.openForBids}> */}
              Continue
            </Button>
          </View>
        </View>
      </View>
      <Button
        onPress={() => console.log('Fetched Data:', fetchedData)}
        labelStyle={style.saveAndExit}>
        Log Fetched Data
      </Button>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9',
    height: hp(100),
  },
  card: {
    backgroundColor: '#FFF',
    // margin:'4%',
    marginTop: hp((2 / height) * 100),
    // width:'92%',
    // height:'47%',
    paddingBottom: hp((36 / height) * 100),
    borderRadius: 16,
  },
  selectVendorsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp((25 / height) * 100),
  },
  facilitiesText: {
    color: '#292F4D',
    //  fontFamily: 'Manrope',
    fontSize: hp(1.9),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.25,
  },
  facilitiesContainer: {
    // marginTop: 10,
    marginTop: hp((10 / height) * 100),
  },
  selectVendorsText: {
    color: '#474D66',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.4,
    opacity: 0.8,
    paddingLeft: 2,
  },
  facilitiestext: {
    color: '#474D66',
    fontFamily: 'Manrope',
    fontSize: hp(1.7),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  card1: {
    backgroundColor: '#FFF',
    paddingLeft: wp((19 / width) * 100),
    marginTop: hp((17 / height) * 100),
    height: hp(8),
    borderRadius: 16,
  },

  checkboxText: {
    color: '#101840',
    // fontFamily: 'Manrope',
    fontSize: hp(2.1),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    marginTop: hp((3 / height) * 100),
    paddingLeft: wp((16 / width) * 100),
    paddingRight: wp((20 / width) * 100),
  },
  content: {
    marginLeft: '.5%',
    paddingTop: hp((20 / height) * 100),
    paddingBottom: hp((24 / height) * 100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subcontent: {
    marginLeft: '-3%',
    paddingTop: hp((20 / height) * 100),
    paddingBottom: hp((24 / height) * 100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pencil: {
    marginRight: wp((16 / width) * 100),
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
    paddingTop: hp((-2 / height) * 100),
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
    color: '#292F4D',
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
    flexDirection: 'column',
  },
  MultiConText: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(1.8),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    paddingTop: hp((6 / height) * 100),
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    paddingTop: hp((2 / height) * 100),

    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
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
});
export default SubContact_Summary_Body;
