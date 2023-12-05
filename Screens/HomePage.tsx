import { StyleSheet,Text,View,Image} from 'react-native';
import Home_Header from '../components/Home_Header';
import SearchBar from '../components/SearchBar';
import Home_Body from '../components/Home_Body'
function Home(){
    return(
        <View>
          <Home_Header/>
          <SearchBar/>
          <Home_Body/>
        </View>
    )
}

export default Home;