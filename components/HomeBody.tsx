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
          <ShareButton style={style.sharebutton} />
        </View>

        <View style={style.gifContainer}>
          <Image
            source={require('../assets/celebrategif.png')}
            style={style.gifImage}
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
            <Text style={style.startDateContainer}>Start Date</Text>
            <Text style={style.startDateText}>Sep 22, 2022</Text>
          </View>
          <View>
            <Text style={style.endDateContainer}>End Date</Text>
            <Text style={style.startDateText}>Oct 20,2022</Text>
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
            <View style={style.smallContainer}>
              <Text style={style.small}>S</Text>
            </View>
            <View style={style.mediumContainer}>
              <Text style={style.medium}>M</Text>
            </View>
            <View style={style.largeContainer}>
              <Text style={style.large}>L</Text>
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
        <View style={style.bidContainer}>
          <Image source={require('../assets/bid.png')} style={style.bidImage} />
        </View>
        <View>
          <Text style={style.dollar}>$ 94,225.00</Text>
        </View>
      </View>

      <View style={style.divider1}></View>
      <View>
        <View style={style.buttonContainer}>
          <View>
            <Button style={style.buttonOne} labelStyle={{color: '#36F'}}>
              <Text style={style.buttonOneText}>View details</Text>
            </Button>
          </View>
          <View>
            <Button
              style={style.buttonTwo}
              labelStyle={{color: '#FFF'}}
              onPress={NavigateToNextPage}>
              <Text style={style.buttonTwoText}>Let's get started</Text>
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
  buttonContainer: {
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
  buttonOne: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#36F',
    backgroundColor: '#FFF',
    paddingTop:hp((4 / height) * 100),
    paddingBottom: hp((4 / height) * 100),
    paddingLeft: wp((24 / width) * 100),
    paddingRight: wp((24 / width) * 100),
  },
  buttonTwo: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#36F',
    backgroundColor: '#36F',
    paddingTop:hp((4 / height) * 100),
    paddingBottom: hp((4 / height) * 100),
    paddingLeft: wp((12 / width) * 100),
    paddingRight: wp((12 / width) * 100),
  },
  buttonTwoText: {
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: "Lato",
    letterSpacing: 0.2,
    fontSize: hp(1.8),
  },
  buttonOneText: {
    fontWeight: '500',
    fontFamily: "Lato",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontSize: hp(1.8),
  },
  bidContainer: {
    marginTop: hp((-8 / height) * 100),
  },
  bidImage: {
    width: hp(3),
    height:hp(3),
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
    fontSize: hp(2),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  sharebutton: {
    position: 'absolute',
    right: wp((8 / width) * 100),
    top: -hp((16 / height) * 100),

  },
  gifImage: {
    width:  hp(7),
    height:  hp(7),
  },
  gifContainer: {
    alignItems: 'center',
    marginTop: hp((32 / height) * 100),
  },
  daily: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(2),
    fontStyle: 'normal',
   // fontWeight: 'bold',
   fontWeight:"700",
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
    fontSize: hp(1.7),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
  },
  textlocation: {
    marginTop: hp((12 / height) * 100),
  },
  divider: {
    marginTop: hp((10 / height) * 100),

    borderBottomWidth: 2,
    borderBottomColor: '#EEE',
  },
  datewrapper: {
    paddingTop: hp((16 / height) * 100),
    paddingBottom: hp((16 / height) * 100),
    paddingRight: wp((16 / width) * 100),
    paddingLeft: wp((19 / width) * 100),
  },
  startDateContainer: {
    color: '#7A7A7A',
    fontFamily: 'Manrope',
    fontSize: hp(1.6),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  endDateContainer: {
    color: '#7A7A7A',
    fontFamily: 'Manrope',
    fontSize: hp(1.6),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  date: {
    flexDirection: 'row',
  },
  month: {
    flexDirection: 'row',
  },
  startDateText: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(1.6),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  endDateText: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(1.6),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  small: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: hp(1.3),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: -2,
  },
  medium: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize:  hp(1.3),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  large: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize:  hp(1.3),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },

  mediumContainer: {
    borderRadius: 4,
    backgroundColor: '#E5ECFF',
    textAlign: 'center',
    width:  hp(2.7),
    height:  hp(2.7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: hp((7 / height) * 100),
  },
  largeContainer: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E5ECFF',
    backgroundColor: '#FFF',
    width:  hp(3),
    height:  hp(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp((4 / height) * 100),
  },
  smallContainer: {
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E5ECFF',
    backgroundColor: '#FFF',
    width:  hp(2.5),
    height:  hp(2.5),
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
