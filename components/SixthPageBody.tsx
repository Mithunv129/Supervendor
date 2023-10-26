import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import SvgImageAssignTeam from '../assets/svgTeamAssign';
import SvgImageNext from '../assets/svgNext';
import SvgImageLock from '../assets/lock';
import SvgImageNewJob from '../assets/svgCard';
import SvgNote from '../assets/SvgNote';
import  SvgNote2 from '../assets/SvgNote';
import {useNavigation} from '@react-navigation/native'

export function SixthPageBody(): JSX.Element {
    const navigation:any=useNavigation();
    const NavigateToNextPage=()=>{
        navigation.navigate('SixthPage')
    }
  const [actions, setAction] = useState([
    { text: 'All available vendors', key: '1', borderColor: '#F3F5F9' },
    { text: 'My preferred vendors', key: '2', borderColor: '#F3F5F9' },
    { text: 'Search for vendors', key: '3', borderColor: '#F3F5F9' },
    { text: 'Invite vendors I know to ARK', key: '4', borderColor: '#F3F5F9' },
  ]);
  const handlePress = (key: string) => {
    // Create a copy of the actions array
    const updatedActions = [...actions];

    // Find the selected item and update its borderColor
    const selectedItem = updatedActions.find((item) => item.key === key);
    if (selectedItem) {
        selectedItem.borderColor = selectedItem.borderColor === '#F3F5F9' ? '#3366FF' : '#F3F5F9'
    }

    // Update the state with the modified actions array
    setAction(updatedActions);
  };
  return (
    <View style={styles.container1}>
      {actions.map(item => {
        // Import the component based on item.name
        return (
          <TouchableOpacity onPress={()=>handlePress(item.key)} key={item.key}>
          <View key={item.key} style={[styles.Box,{ borderColor: item.borderColor}]}>
            <View style={styles.container}>
              <View style={styles.Icon}>
                <Text style={styles.Text}>{item.text}</Text>
              </View> 
            </View>
          </View>
          </TouchableOpacity>
         
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container1:{
        backgroundColor:"#F3F5F9",
        height:'100%'
    },
    container:{
        flexDirection:'row',
    },
  Box: {
    margin:'4%',
    paddingTop:'6%',
    paddingBottom:'6%',
    marginTop:'5%',
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(51, 102, 255, 0.12)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
    paddingLeft:'8%'
  },
  Text:{
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,

  },
});
export default SixthPageBody;