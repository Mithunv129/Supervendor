import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import SearchImage from '../assets/SearchImage';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

function Search() {
  return (
    <View style={style.container}>
      <Input
        placeholder="Search"
        rightIcon={<SearchImage />}
        inputContainerStyle={{borderBottomWidth: 0}}
        containerStyle={style.inputContainer}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: hp((28 / height) * 100),
    
  },
  inputContainer: {
    borderRadius: 14,
    padding: '1.4%',
    borderWidth: 1,
    height: hp(7),
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
    
    
  },
});

export default Search;
