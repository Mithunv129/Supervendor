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
import {Avatar, Button, Card, Title} from 'react-native-paper';
import CheckBox from 'react-native-check-box';
import Plus from '../assets/Plus';
import Check1 from '../assets/Check1';
import Check2 from '../assets/check2';
import Pencil from '../assets/Pencil';

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
  const [fetchedData, setFetchedData] = useState([]); // Store the fetched data
  const [lastElements, setLastElements] = useState([]); // Store the fetched last elements as an array

  const apiUrl = 'https://2f83-122-186-163-190.ngrok.io/users';

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log('Response:', response);

        const data = response.data;
        console.log('Fetched Data:', typeof data[data.length - 1].name);
        setFetchedData(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
    return () => {};
  }, []); // The empty dependency array ensures the effect runs only once
  //    console.log(fetchedData);
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
      <View style={style.card}>
        <View style={style.content}>
          <Text style={style.checkboxText}> Single Subcontract</Text>
          <Pencil style={style.pencil} />
        </View>
        <View style={style.divider1}></View>
        <View style={style.content1}>
          <Text style={style.facilitiestext}>Facilities</Text>
          <View style={style.facilitiesContainer}>
            {

            }
            {
              lastElement.length > 0 ? (
                lastElement.map((data, index) => (
                  <View key={index}>
                    <Text style={style.facilitiesText}>{data}</Text>
                  </View>
                ))
              ) : (
                <Text>No locations found</Text>
              )
            }
          </View>
          <View>
            <Text style={style.subcontract}>Subcontract name</Text>
            <View style={style.subcontractText}>
              {/* <TextInput
                style={style.Input}
                underlineColorAndroid="transparent"
                onChangeText={text => setSubcontractName(text)}
              /> */}
              <Text style={{color: 'black'}}>{subname}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.card1}>
        <View style={style.MultiCon}>
          <View style={style.selectVendorsView}>
            <Text style={style.selectVendorsText}>Selected vendors</Text>
            <Pencil />
          </View>
          <View>
            <Text style={style.MultiConText}>
              All available vendors in the marketplace
            </Text>
          </View>
        </View>
      </View>
      <View style={style.ButtonView}>
        <View style={style.Button1}>
          <Button onPress={() => {}} labelStyle={style.saveAndExit}>
            save & Exit
          </Button>
        </View>
        <View style={style.Button2}>
          <Button onPress={NavigateToNextPage} labelStyle={style.openForBids}>
            open for bids
          </Button>
        </View>
      </View>
      {/* <Button onPress={() => console.log('Fetched Data:', fetchedData)} labelStyle={style.saveAndExit}>
  Log Fetched Data
</Button> */}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9',
    height: '100%',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    margin: '4%',
    marginTop: '5%',
    width: '92%',
    height: '38%',
    borderRadius: 10,
  },
  selectVendorsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  facilitiesText: {
    color: 'black',
  },
  facilitiesContainer: {
    marginTop: 10,
  },
  selectVendorsText: {
    color: 'black',
  },
  facilitiestext: {
    color: '#474D66', // Use the color value directly
    fontFamily: 'Manrope',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20, // Assuming you are using a numeric value in React Native
    letterSpacing: 0.4,
  },
  card1: {
    backgroundColor: '#FFF',
    margin: '4%',
    marginTop: '5%',
    width: '92%',
    height: '10 %',
    borderRadius: 10,
  },

  checkboxText: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    marginTop: '2%',
    paddingLeft: '3%',
  },
  content: {
    marginLeft: '1%',
    marginTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pencil: {
    marginRight: '4%',
    marginTop: '1%',
  },
  divider1: {
    paddingTop: 32,
    borderBottomWidth: 5,
    borderBottomColor: '#EEE',
  },
  Button: {
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    padding: '5%',
    borderColor: '#EEEEEE',
  },
  content1: {
    paddingTop: '5%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  bText: {
    color: '#36F',
    fontFamily: 'Manrope',
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.25,
    paddingLeft: '4%',
    paddingTop: '1%',
  },
  subcontract: {
    color: '#474D66',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.4,
    paddingTop: '10%',
  },
  Input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    alignSelf: 'stretch',
  },
  subcontractText: {
    paddingTop: '2%',
  },
  MultiCon: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '5%',
    flexDirection: 'column',
  },
  MultiConText: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    paddingTop: '2%',
    paddingLeft: '3%',
    marginTop: '2%',
    marginLeft: '-3%',
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '4%',
    flex: 0.9,
    display: 'flex',
    alignItems: 'center',
  },
  saveAndExit: {
    color: '#36F',

    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  openForBids: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  Button1: {
    width: 160,
    height: 60,
    borderColor: '#36F',
    borderWidth: 1,
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginTop: '52%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  Button2: {
    width: 160,
    height: 60,
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: '#36F',
    borderRadius: 12,
    marginTop: '52%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
});
export default SubContact_Summary_Body;
