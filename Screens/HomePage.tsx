import { StyleSheet,Text,View,Image} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import HomeBody from '../components/HomeBody'
function Home(){
    return(
        <View style={style.homecontainer}>
          <HomeHeader/>
          <SearchBar/>
          <HomeBody/>
        </View>
    )
}
const style = StyleSheet.create({
  homecontainer:{
    paddingLeft:9.5

  }
})

export default Home;