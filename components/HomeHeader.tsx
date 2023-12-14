import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import SvgComponent from '../assets/SvgImage';
const {width, height} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Home_Header() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image source={require('../assets/icon4.png')} style={style.image} />
        <Text style={style.container}>ARK</Text>
      </View>

      <View style={style.bellcss}>
        <Image source={require('../assets/Bell.png')} style={style.bell} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    width: 38,
    height: 25,
  },
  container: {
    width: 56,
    height: 28,
    color: '#000',
    marginLeft: wp((8 / width) * 100),
    fontFamily: 'Futura PT',
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  bell: {
    width: 23,
    height: 23,
  },
  bellcss: {
    paddingTop: hp((7 / height) * 100),
    margin: 0,

    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'rgba(51, 102, 255, 0.30)',
    elevation: 8,
    borderRadius: 30,
    alignItems: 'center',
  },
});
export default Home_Header;
