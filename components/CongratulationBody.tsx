import axios from 'axios';
import { JSXElementConstructor, useEffect, useState } from 'react';
import {Text,StyleSheet,View} from 'react-native'
import {Avatar, Button, Card, Title} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const {width, height, scale} = Dimensions.get('window');

function CongratulationBody(){
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

    return(
      <View style={style.textview}>
        <Text style={style.text}>Daily general cleaning_{subname}</Text>
        <Text style={style.subtext}>are now open for bids!!</Text>
        <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: hp((100/ height) * 100),
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
    )
}

const style=StyleSheet.create({
  text:{
    textAlign:'center',
    color:'black',
    fontFamily: 'Manrope', 
    fontSize: hp(2.5),
    fontStyle: 'normal', 
    fontWeight: '400', 
  },
  textview:{
    paddingTop:'80%',
      backgroundColor: '#F3F5F9',
      height:hp(100),
    
  },
  subtext:{
    textAlign:'center',
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22
  },
  ButtonView: {
    backgroundColor: '#36F',
    borderRadius: 10,
    paddingTop: hp((12 / height) * 100),
    paddingBottom: hp((12 / height) * 100),
    paddingRight: wp((24 / width) * 100),
    paddingLeft: wp((24 / width) * 100),
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
  }
)

export default CongratulationBody;