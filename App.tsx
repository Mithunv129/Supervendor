import { StyleSheet,Text,View,Image} from 'react-native';
import Home from './Screens/home';
import SecondPage from './Screens/SecondPage';
import ThirdPage from './Screens/ThirdPage';
import FourthPage from './Screens/FourthPage';
import FifthPage from './Screens/FifthPage';
import SixthPage from './Screens/SixthPageBody';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SvgChat from './assets/SvgChat';


const Stack=createNativeStackNavigator();
const customheader=()=>{
  return(
    <View>
      <Text style={style.headerRightContainer1}>1/3</Text>
    </View>
  )
}
const customheader2=()=>{
  return(
    <View>
      <Text style={style.headerRightContainer1}>2/3</Text>
    </View>
  )
}
function App(){
  
  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home}
                options={{
                  headerShown: false, // Hide the header for the "home" screen
                }}
                />
                <Stack.Screen name="SecondPage" component={SecondPage}
                 options={{
                  title: 'Daily general clea...',
                  headerStyle: {
                    backgroundColor: '#F3F5F9',
                  },
                  headerTitleStyle: {
                    fontSize: 22,
                  },
                  headerRight: () => (
                    <View style={style.headerRightContainer}>
                        <SvgChat/>
                    </View>
                  ),
                  headerShadowVisible: false
                }}
                />
                 <Stack.Screen name="ThirdPage" component={ThirdPage}
                 options={{
                  title:'Create Subcontract',
                  headerStyle: {
                    backgroundColor: '#F3F5F9',
                  },
                  headerTitleStyle: {
                    fontSize: 22,
                  },
                  headerRight:()=>customheader(),
                  headerShadowVisible: false
                 }}
                 />
                  <Stack.Screen name="FourthPage" component={FourthPage}
                  options={{
                    title:'Select Location'
                  }}
                  />
                  <Stack.Screen name="FifthPage" component={FifthPage}
                   options={{
                    title:'Create Subcontract',
                    headerStyle: {
                      backgroundColor: '#F3F5F9',
                    },
                    headerTitleStyle: {
                      fontSize: 22,
                    },
                    headerRight:()=>customheader(),
                    headerShadowVisible: false
                   }}
                  />
                  <Stack.Screen name="SixthPage" component={SixthPage}
                   options={{
                    title:'Vendors',
                    headerStyle: {
                      backgroundColor: '#F3F5F9',
                    },
                    headerTitleStyle: {
                      fontSize: 22,
                    },
                    headerRight:()=>customheader2(),
                    headerShadowVisible: false
                   }}
                  />
                  
            </Stack.Navigator>
    </NavigationContainer>
  );
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F3F5F9"
  },
  headerRightContainer:{
    marginRight:'4%',
    marginTop:'3%'
  },
  headerRightContainer1:{
    marginRight:'4%',
    marginTop:'3%',
    color:'#000000',
    fontFamily: 'Manrope',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 28
  }
})
export default App;
