import axios from 'axios';
import {JSXElementConstructor, useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import SuccessTick from '../assets/SuccesTick';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height, scale} = Dimensions.get('window');

function CongratulationBody() {
  const navigation: any = useNavigation();
  const NavigateToNextPage = () => {
    navigation.navigate('Home');
  };
  const [fetchedData, setFetchedData] = useState([]);

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

  const subname: string =
    fetchedData.length > 0
      ? fetchedData[fetchedData.length - 1].subcontractname
      : '';

  return (
    <View style={style.textview}>
      <View
        style={{
          backgroundColor: '#FFEDBF',
          height: 250,
          marginTop: 68,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={style.TickImage}>
          <SuccessTick />
        </View>
        <View style={{marginTop: 28}}>
          <Text style={style.successText}>Success</Text>

          <Text style={style.text}>
            Daily general cleaning-{'\n'}
            {subname}
          </Text>
          <Text style={style.subtext}>are now open for bids!!</Text>
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
          <Button
            onPress={() => {
              NavigateToNextPage();
            }}
            labelStyle={style.buttonLabel}>
            Back to Home
          </Button>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Manrope',
    fontSize: hp(2.5),
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 28,
  },
  TickImage: {
    height: 74,
    width: 74,
    backgroundColor: '#148740',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -85,
  },
  successText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Manrope',
    fontSize: hp(2.5),
    fontStyle: 'normal',
    fontWeight: '700',
    //marginTop:57,
  },
  textview: {
    //paddingTop:'80%',
    backgroundColor: '#F3F5F9',
    height: hp(100),
  },
  subtext: {
    textAlign: 'center',
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  },
  ButtonView: {
    backgroundColor: '#0B30B2',
    borderRadius: 16,
    paddingTop: hp((12 / height) * 100),
    paddingBottom: hp((12 / height) * 100),
    paddingRight: wp((24 / width) * 100),
    paddingLeft: wp((24 / width) * 100),
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    
    elevation: 5,
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

export default CongratulationBody;
