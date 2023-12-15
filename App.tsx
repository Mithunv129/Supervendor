import {StyleSheet, Text, View, Image} from 'react-native';
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
          component={CreateSubContract}
          options={{
            title: 'Create Subcontract',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => CreateSubcontractHeader(),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Select_Location"
          component={SelectLocation}
          options={{
            title: 'Select Location',
          }}
        />
        <Stack.Screen
          name="SubContract_Details"
          component={SubContractDetails}
          options={{
            title: 'Create Subcontract',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => CreateSubcontractHeader(),
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
            headerRight: () => VendorsHeader(),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="SubContact_Summary"
          component={SubContactSummary}
          options={{
            title: 'Subcontract Summary',
            headerStyle: {
              backgroundColor: '#F3F5F9',
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => SubcontractSummaryHeader(),
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
