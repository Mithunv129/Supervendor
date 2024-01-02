import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import HomePage from './Screens/HomePage';
import DailyCleaning from './Screens/DailyCleaning';
import CreateSubContract from './Screens/CreateSubContract';
import SelectLocation from './Screens/SelectLocation';
import SubContractDetails from './Screens/SubContractDetails';
import Vendors from './Screens/Vendors';
import SubContactSummary from './Screens/SubContactSummary';
import Congratulation from './Screens/congratulation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SvgChat from './assets/SvgChat';
import BackArrow from './assets/BackArrow';
const {width, height, scale} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();
const CreateSubcontractHeader = () => {
  return (
    <View>
      <Text style={style.headerRightContainer1}>1/3</Text>
    </View>
  );
};
const VendorsHeader = () => {
  return (
    <View>
      <Text style={style.headerRightContainer1}>2/3</Text>
    </View>
  );
};
const SubcontractSummaryHeader = () => {
  return (
    <View>
      <Text style={style.headerRightContainer1}>3/3</Text>
    </View>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false, // Hide the header for the "home" screen
          }}
        />
        <Stack.Screen
          name="Daily_Cleaning"
          component={DailyCleaning}
          options={({ navigation }) => ({
            title: 'Daily general clea...',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
                <Text style={{ fontSize: 20 ,color:'#101840',fontWeight:600,lineHeight:28}}>Daily general clea...</Text>
              </View>
            ),
            headerTitleStyle: {
              fontSize: 22,
            },

            headerRight: () => (
              <View
                style={[
                  style.headerRightContainer,
                  {marginRight: wp((10 / width) * 100)},
                ]}>
                <SvgChat />
              </View>
            ),
            headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            
            headerBackVisible: false,
           
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Create_SubContract"
          component={CreateSubContract}
          options={({ navigation }) => ({
            title: 'Create Subcontract',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
                {/* <Text style={{ fontSize: 22 ,color:'black'}}>Create Subcontract</Text> */}
                <Text style={{ fontSize: 20 ,color:'#101840',fontWeight:600,lineHeight:28}}>Create Subcontract</Text>

              </View>
            ),
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => CreateSubcontractHeader(),
            headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            
            headerBackVisible: false,
           
            headerShadowVisible: false,           })}
        />
        <Stack.Screen
          name="Select_Location"
          component={SelectLocation}
          options={({ navigation }) => ({
            headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="SubContract_Details"
          component={SubContractDetails}
          options={({ navigation }) => ({
            title: 'Create Subcontract',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
                <Text style={{fontSize: 20 ,color:'#101840',fontWeight:600,lineHeight:28}}>Create Subcontract</Text>
              </View>
            ),
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => CreateSubcontractHeader(),
             headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Vendors"
          component={Vendors}
          options={({ navigation }) => ({
            title: 'Vendors',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
                <Text style={{fontSize: 20 ,color:'#101840',fontWeight:600,lineHeight:28}}>Vendors</Text>
              </View>
            ),
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => VendorsHeader(),
            headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="SubContact_Summary"
          component={SubContactSummary}
          options={({ navigation }) => ({
            title: 'Subcontract Summary',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
                <Text style={{ fontSize: 20 ,color:'#101840',fontWeight:600,lineHeight:28}}>Subcontract Summary</Text>
              </View>
            ),
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => SubcontractSummaryHeader(),
            headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
        
          name="congratulationPage"
          component={Congratulation}
          options={({ navigation }) => ({
            title: 'Success',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((115 / width) * 100) }}>
                <Text style={{  fontSize: 20 ,color:'#101840',fontWeight:600,lineHeight:28}}>Success</Text>
              </View>
            ),
            headerTitleStyle: {
              fontSize: 22,
            },
            headerLeft: ({ onPress, ...props }) => (
              <BackArrow
                marginLeft={wp((8 / width) * 100)}
                onPress={() => {

                  navigation.goBack();
                }}
              />
            ),
            headerBackVisible: false,
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
  },
  headerRightContainer: {
    marginRight: '3%',
    marginTop: '3%',
  },
  headerRightContainer1: {
    marginRight: '4%',
    marginTop: '3%',
    color: '#000000',
    fontFamily: 'Manrope',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 28,
  },
});
export default App;
