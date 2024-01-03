import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import HomeBody from '../components/HomeBody';
const {width, height, scale} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F5F9'}}>
       <LinearGradient
     colors={['#FFEDBF','#FFFFFF','#FFEDBF','#FFFFFF']}
     locations={[0, 0.23, 0.4, .85]}

     start={{ x: 0, y: 0 }}
     end={{ x: 1, y: 1 }}
     style={{ flex: 1 }}
   >
      <View style={style.homecontainer}>
        <HomeHeader />
        <SearchBar />
        <HomeBody />
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  homecontainer: {
    marginLeft: wp((24 / width) * 100),
    marginRight: wp((24 / width) * 100),
    marginTop: hp((28 / height) * 100),
    //backgroundColor: '#F3F5F9',
    flex: 1,
  },
});

export default Home;
