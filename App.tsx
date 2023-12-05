import {StyleSheet, Text, View, Image} from 'react-native';
import HomePage from './Screens/HomePage';
import Daily_Cleaning from './Screens/Daily_Cleaning';
import Create_SubContract from './Screens/Create_SubContract';
import Select_Location from './Screens/Select_Location';
import SubContract_Details from './Screens/SubContract_Details';
import Vendors from './Screens/Vendors';
import SubContact_Summary from './Screens/SubContact_Summary';
import Congratulation from './Screens/Congratulation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SvgChat from './assets/SvgChat';

const Stack = createNativeStackNavigator();
const Create_Subcontract_Header = () => {
  return (
    <View>
      <Text style={style.headerRightContainer1}>1/3</Text>
    </View>
  );
};
const Vendors_Header = () => {
  return (
    <View>
      <Text style={style.headerRightContainer1}>2/3</Text>
    </View>
  );
};
const Subcontract_Summary_Header = () => {
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
          component={Daily_Cleaning}
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
                <SvgChat />
              </View>
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Create_SubContract"
          component={Create_SubContract}
          options={{
            title: 'Create Subcontract',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => Create_Subcontract_Header(),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Select_Location"
          component={Select_Location}
          options={{
            title: 'Select Location',
          }}
        />
        <Stack.Screen
          name="SubContract_Details"
          component={SubContract_Details}
          options={{
            title: 'Create Subcontract',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => Create_Subcontract_Header(),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Vendors"
          component={Vendors}
          options={{
            title: 'Vendors',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => Vendors_Header(),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="SubContact_Summary"
          component={SubContact_Summary}
          options={{
            title: 'Subcontract Summary',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => Subcontract_Summary_Header(),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="congratulationPage"
          component={Congratulation }
          options={{
            headerShown: false, // Hide the header for the "home" screen
          }}
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
    marginRight: '4%',
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
