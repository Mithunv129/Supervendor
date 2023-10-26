//part2.tsx
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'StayFit Gyms     Downtown',
    description:'Downtown Atlanta',
    image:require('../assets/image1.png'),
  },
  {
    id: 2,
    title: 'StayFit Sandy             Springs',
    description:'Downtown Atlanta',
    image:require('../assets/image2.png'),


  },
  {
    id: 3,
    title: 'StayFit Fulton             County',
    description:'Fulton County, GA',
    image:require('../assets/image3.png'),

  },
  {
    id:4,
    title: 'Superior Path               Labs ',
    description:'Fulton County',
    image:require('../assets/image4.png'),


  },
  {
    id:5,
    title: 'Superior Path               Labs ',
    description:'Fulton County',
    image:require('../assets/image5.png'),


  },
  {
    id: 6,
    title: 'StayFit Fulton             County',
    description:'Fulton County, GA',
    image:require('../assets/image6.png'),


  },
  {
    id: 7,
    title: 'StayFit Gyms     Downtown',
    description:'Downtown Atlanta',
    image:require('../assets/image1.png'),
  },
  {
    id: 8,
    title: 'StayFit Sandy             Springs',
    description:'Downtown Atlanta',
    image:require('../assets/image2.png'),


  },
  {
    id: 9,
    title: 'StayFit Fulton             County',
    description:'Fulton County, GA',
    image:require('../assets/image3.png'),

  },
  {
    id:10,
    title: 'Superior Path               Labs',
    description:'Fulton County',
    image:require('../assets/image4.png'),


  },
  {
    id:11,
    title: 'Superior Path               Labs ',
    description:'Fulton County',
    image:require('../assets/image5.png'),


  },
  {
    id: 12,
    title: 'StayFit Fulton             County',
    description:'Fulton County, GA',
    image:require('../assets/image6.png'),


  },
  

];

type ItemProps = {title: string,description: string,image:any,locations: string[]; // Define locations as a prop
setLocations: (locations: string[]) => void;};

// const Item = ({title , description,image}: ItemProps) => (
//   <View style={styles.item}>
//     <Image source={image}  style={styles.image} />
//     <Text style={styles.title } numberOfLines={2}>{title}</Text>
//     <Text style={styles.description}>{description}</Text>

//   </View>
// );
const Item = ({ title, description, image,locations, setLocations }: ItemProps) => {
  const [count , setCount] = useState(0);
  // const [location , setLocations] = useState([])

  
  const [borderColor, setBorderColor] = useState('#FFF'); // Initial border color
  const navigation = useNavigation();
  const handlePress = () => {
    // Change the border color when clicked
    // setBorderColor('blue'); // Set your desired border color
   
    if (borderColor === 'blue') {
      setBorderColor('#FFF');
      setCount(count - 1);
      setLocations(locations.filter((loc) => loc !== title)); // Remove the location from the array
    } else {
      setBorderColor('blue');
      setCount(count + 1);
      setLocations([...locations, title]); // Add the location to the array
    }
    //navigation.navigate('Select Locations', { count });
    

  };
  console.log(locations)
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.item, { borderColor }]}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FourthPageBody= () => {
    const [isTwoColumns, setIsTwoColumns] = useState(true);
    const [locations, setLocations] = useState<string[]>([]); 


  return (
    <SafeAreaView style={styles.container}>
    {isTwoColumns ? (
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} image={item.image}  locations={locations} 
          setLocations={setLocations} />
        )}

        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
      />
    ) : (
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} image={item.image}  locations={locations} 
          setLocations={setLocations}/>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
      />
    )}
    <View style={styles.button}>
        <Text style={{fontSize:20}} >Add Location</Text>

    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
  //  marginTop: StatusBar.currentHeight || 0,
    marginTop:'-20%',
    padding:'5%',
    height:'100%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    gap:10
  },
  item: {
    width: 175,
    height: 122,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(51, 102, 255, 0.12)', // Set the shadow color
    shadowOffset: { width: 0, height: 4 }, // Set the shadow offset
    shadowOpacity: 1, // Set the shadow opacity (adjust the values as needed),
    borderRadius:10,
    marginLeft:'3%', 
    marginBottom:'25%',
    borderWidth: 1,
    borderColor:"white"



  },
  title: {
    color: '#101840', // Text color
    textAlign: 'center', // Text alignment
    fontFamily: 'Manrope', // Font family (ensure you have the font loaded)
    fontSize: 16, // Font size
    fontStyle: 'normal', // Font style
    fontWeight: '400', // Font weight
    lineHeight: 20, // Line heig
    marginTop:'5%'
  },
  description:{
    color: 'rgba(16, 24, 64, 0.50)', // Text color with rgba
    textAlign: 'center', // Text alignment
    fontFamily: 'Manrope', // Font family (ensure you have the font loaded)
    fontSize: 14, // Font size
    fontStyle: 'normal', // Font style
    fontWeight: '400', // Font weight
    lineHeight: 20, // Line height
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:'5%'
  },
  image:{
    width: 72,
    height: 72,
    marginLeft:'10%',
    marginTop: '-20%',
    overflow: 'hidden',
    borderRadius:210,
  },
flatList: {
    width: '100%',
  },
  flatListContent: {
    paddingVertical: 50, // Adjust the value to control the space between items
   
  },
  button:{
    backgroundColor:'#36F',
    color:'white',
    padding:'5%',
    borderRadius:12,
    textAlign:'center',
    alignItems:'center'
  }
});

export default FourthPageBody;