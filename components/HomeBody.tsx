import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Avatar, Button, Card} from 'react-native-paper';
import ShareButton from '../assets/ShareButton';
const {width, height, scale} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Home_Body() {
  const navigation: any = useNavigation();
  const NavigateToNextPage = () => {
    navigation.navigate('Daily_Cleaning');
  };
  return (
    <View style={style.card}>
      <View style={style.titlewrapper}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Job awarded!</Text>
        </View>

        <View>
          <ShareButton style={style.share} />
        </View>

        <View style={style.gifContainer}>
          <Image
            source={require('../assets/celebrategif.png')}
            style={style.gif}
          />
        </View>

        <View>
          <View style={style.textcontainer1}>
            <Text style={style.daily}>Daily general cleaning at</Text>
          </View>
          <View style={style.textlocation}>
            <Text style={style.location}>12 Locations</Text>
          </View>
        </View>
      </View>
      <View style={style.divider}></View>

      <View style={style.datewrapper}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={style.startd}>Start Date</Text>
            <Text style={style.sep}>Sep 22, 2022</Text>
          </View>
          <View>
            <Text style={style.starte}>End Date</Text>
            <Text style={style.oct}>Oct 20,2022</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp((8 / height) * 100),
              gap: wp((4 / width) * 100),
            }}>
            <View style={style.sizeS}>
              <Text style={style.s}>S</Text>
            </View>
            <View style={style.sizeM}>
              <Text style={style.m}>M</Text>
            </View>
            <View style={style.sizeL}>
              <Text style={style.l}>L</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.divider1}></View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          paddingTop: hp((16 / height) * 100),
          paddingBottom: hp((16 / height) * 100),
          paddingRight: wp((16 / width) * 100),
          paddingLeft: wp((16 / width) * 100),
        }}>
        <View style={style.bidcontainer}>
          <Image source={require('../assets/bid.png')} style={style.bid} />
        </View>
        <View>
          <Text style={style.dollar}>$ 94,225.00</Text>
        </View>
      </View>

      <View style={style.divider1}></View>
      <View>
        <View style={style.but}>
          <View style={style.but1container}>
            <Button style={style.but1} labelStyle={{color: '#36F'}}>
              <Text style={style.but1Text}>View details</Text>
            </Button>
          </View>
          <View style={style.but2container}>
            <Button
              style={style.but2}
              labelStyle={{color: '#FFF'}}
              onPress={NavigateToNextPage}>
              <Text style={style.but2Text}>Let's get started</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 14,
    position: 'relative',
    marginTop: hp((16 / height) * 100),
  },
  but: {
    flexDirection: 'row',
    alignContent: 'center',
    display: 'flex',
    gap: 4,
    justifyContent: 'space-between',
    paddingTop: hp((16 / height) * 100),
    paddingBottom: hp((16 / height) * 100),
    paddingRight: wp((16 / width) * 100),
    paddingLeft: wp((19 / width) * 100),
  },
  but1: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#36F',
    backgroundColor: '#FFF',
    paddingTop:hp((4 / height) * 100),
    paddingBottom: hp((4 / height) * 100),
    paddingLeft: wp((18 / width) * 100),
    paddingRight: wp((18 / width) * 100),
  },
  but2: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#36F',
    backgroundColor: '#36F',
    paddingTop:hp((4 / height) * 100),
    paddingBottom: hp((4 / height) * 100),
    paddingLeft: wp((18 / width) * 100),
    paddingRight: wp((18 / width) * 100),
  },
  but2Text: {
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.2,
    fontSize: 15,
  },
  but1Text: {
    fontWeight: '500',
    lineHeight: 20, // Line height
    letterSpacing: 0.2,
    fontSize: 15,
  },
  bidcontainer: {
    marginTop: hp((-8 / height) * 100),
  },
  bid: {
    width: 28,
    height: 28,
  },
  dollar: {
    color: '#20B2AA',
    fontFamily: 'Manrope',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.25,
  },

  titlewrapper: {
    paddingTop: hp((16 / height) * 100),
    paddingBottom: hp((16 / height) * 100),
    paddingRight: wp((16 / width) * 100),
    paddingLeft: wp((16 / width) * 100),
  },
  titleContainer: {
    marginTop: hp((16 / height) * 100),
  },
  title: {
    color: '#1CA49C',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontSize: hp('2%'),
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 20,
  },
  share: {
    position: 'absolute',
    right: wp((8 / width) * 100),
    top: -hp((16 / height) * 100),
  },
  gif: {
    width: 53,
    height: 53,
  },
  gifContainer: {
    alignItems: 'center',
    marginTop: hp((32 / height) * 100),
  },
  daily: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 20,
    textAlignVertical: 'center',
  },
  textcontainer1: {
    alignItems: 'center',
    marginTop: hp((28 / height) * 100),
  },
  location: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
  },
  textlocation: {
    marginTop: hp((12 / height) * 100),
  },
  divider: {
    marginTop: hp((16 / height) * 100),

    borderBottomWidth: 2,
    borderBottomColor: '#EEE',
  },
  datewrapper: {
    paddingTop: hp((16 / height) * 100),
    paddingBottom: hp((16 / height) * 100),
    paddingRight: wp((16 / width) * 100),
    paddingLeft: wp((19 / width) * 100),
  },
  startd: {
    color: '#7A7A7A',
    fontFamily: 'Manrope',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  starte: {
    color: '#7A7A7A',
    fontFamily: 'Manrope',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  date: {
    flexDirection: 'row',
  },
  month: {
    flexDirection: 'row',
  },
  sep: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  oct: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  s: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: -2,
  },
  m: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  l: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },

  sizeM: {
    borderRadius: 4,
    backgroundColor: '#E5ECFF',
    textAlign: 'center',
    width: 22,
    height: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: hp((7 / height) * 100),
  },
  sizeL: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E5ECFF',
    backgroundColor: '#FFF',
    width: 26,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp((4 / height) * 100),
  },
  sizeS: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E5ECFF',
    backgroundColor: '#FFF',
    width: 20,
    height: 19,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp((10 / height) * 100),
    paddingBottom: 1,
    textAlignVertical: 'center',
  },
  divider1: {
    borderBottomWidth: 2,

    borderBottomColor: '#EEE',
  },
});
export default Home_Body;
