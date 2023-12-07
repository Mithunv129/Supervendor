import { StyleSheet,Text,View,Image} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SearchBar';
import HomeBody from '../components/HomeBody'
function Home(){
    return(
        <View>
          <HomeHeader/>
          <SearchBar/>
          <HomeBody/>
        </View>
    )
}

export default Home;