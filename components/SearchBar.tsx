import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import SearchImage from '../assets/SearchImage';

const { width, height } = Dimensions.get('window');

function Search() {
  return (
    <View style={style.container}>
      <Input
        placeholder="Search..."
        rightIcon={
          <SearchImage style={style.search} />
        }
        inputContainerStyle={{ borderBottomWidth: 0 }}
        containerStyle={style.inputContainer}
        inputStyle={style.input}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    margin: width * 0.08,
    marginTop: height * 0.07,
    marginLeft:"5%"
  },
  inputContainer: {
    borderRadius: 14,
    padding:"1.5%",
    borderWidth: 1,
    height: 60,
    borderColor: 'rgba(51, 102, 255, 0.5)',
    backgroundColor: '#FFF',
  },
  input: {
    paddingHorizontal: 10,
  },
  search: {},
});

export default Search;
