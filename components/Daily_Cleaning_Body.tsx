import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import SvgImageAssignTeam from '../assets/svgTeamAssign';
import SvgImageNext from '../assets/svgNext';
import SvgImageLock from '../assets/lock';
import SvgImageNewJob from '../assets/svgCard';
import SvgNote from '../assets/SvgNote';
import  SvgNote2 from '../assets/SvgNote';
import {useNavigation} from '@react-navigation/native'
const componentMap = {
    SvgImageAssignTeam: (props: { size: number }) => (
        <SvgImageAssignTeam {...props} />
      ),
      SvgImageLock: (props: { size: number }) => (
        <SvgImageLock {...props} />
      ),
      SvgImageNewJob: (props: { size: number }) => (
        <SvgImageNewJob {...props} />
      ),
      SvgNote: (props: { size: number }) => (
        <SvgNote {...props} />
      ),
      SvgNote2: (props: { size: number }) => (
        <SvgNote2 {...props} />
      ),


  // Add more components here if needed
};

export function BodyPage2(): JSX.Element {
    const navigation:any=useNavigation();
    const NavigateToNextPage=()=>{
        navigation.navigate('Create_SubContract')
    }
  const [actions, setAction] = useState([
    {name: 'SvgImageLock', text: 'Facility Access', key: '1'},
    {name: 'SvgImageAssignTeam', text: 'Assign Teams', key: '2'},
    {name: 'SvgImageNewJob', text: 'Issue new job card', key: '3'},
    {name: 'SvgNote', text: 'Pre-shift checklist', key: '4'},
    {name: 'SvgNote2', text: 'Subcontract part of the job', key: '5'},
  ]);
  return (
    <View style={styles.container1}>
      {actions.map(item => {
        // Import the component based on item.name
        const SvgComponent = componentMap[item.name];
        return (
          <TouchableOpacity onPress={item.name=='SvgNote2'?NavigateToNextPage: undefined}>
          <View key={item.key} style={styles.Box}>
            <View style={styles.container}>
              <SvgComponent size={200} />
              <View style={styles.Icon}>
                <Text style={styles.Text}>{item.text}</Text>
              </View> 
            </View>
            <View style={styles.Next}>
                <SvgImageNext size={200} />
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
    },
    container:{
        flexDirection:'row',
    },
  Box: {
    margin:'4%',
    paddingTop:'5%',
    paddingBottom:'5%',
    justifyContent:'space-around',
    alignItems:"center",
    marginTop:'5%',
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(51, 102, 255, 0.30)',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(51, 102, 255, 0.12)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  Icon:{
    paddingRight:'8%'
  },
  Text:{
    width: 150,
    color: '#000',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    paddingLeft:'5%',
    paddingTop:'1%'

  },
  Next:{
    marginLeft:'8%',
  },
});
export default BodyPage2;