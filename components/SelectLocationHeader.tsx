import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import SearchImage from '../assets/SearchImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');


function Select_Location_Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Which location would you like to subcontract to other vendors{' '}
      </Text>
      <View style={styles.container2}>
      <Input
        placeholder="Search location"
        rightIcon={<SearchImage />}
        inputContainerStyle={{borderBottomWidth: 0}}
        containerStyle={styles.inputContainer}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 312,
    paddingLeft: 1,
    flexDirection: 'column',
  },
  container2:{
    marginTop: hp((20 / height) * 100),
  },

  part1container: {
    marginTop: '8%',
    width: '124.2%',
    marginLeft: '-3%',
  },
  input: {
    borderRadius: 16,
    // borderWidth:1,
    height: '120%',
    // borderColor:'rgba(51, 102, 255, 0.5);',
    paddingHorizontal: 10,
    paddingTop: 13,
    paddingBottom: 13,
    // backgroundColor:'#FFF',
    width: 312,
    backgroundColor: '', 
    shadowColor: 'rgba(84, 75, 42, 0.20)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 4,


    fontFamily: 'Manrope',
    fontSize:18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.15,
    opacity:0.5,
  },
  text: {
    color: '#101840',
    fontFamily: 'Manrope',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.15,
  },
  placeholder: {
    color: '#484E68',
   
    
  },
  
  inputContainer: {
    borderRadius: 16,
    paddingTop: '1.4%',
    borderWidth: 1,
    height: hp(7),
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    width:hp(41.6),
    
  },
});

export default Select_Location_Header;
