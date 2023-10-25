import { StyleSheet,Text,View,Image} from 'react-native';
import Homeheader from '../components/homeheader';
import Search from '../components/SearchBar';
import Body from '../components/Body'
function Home(){
    return(
        <View>
          <Homeheader/>
          <Search/>
          <Body/>
        </View>
    )
}

export default Home;