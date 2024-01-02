// import React, {useEffect, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Image,
//   Dimensions
// } from 'react-native';
// import axios from 'axios';
// const {width, height, scale} = Dimensions.get('window');
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// const DATA = [
//   {
//     id: 1,
//     title: 'StayFit Gyms  Downtown',
//     description: 'Downtown Atlanta',
//     image: require('../assets/image1.png'),
//   },
//   {
//     id: 2,
//     title: 'StayFit Sandy  Springs',
//     description: 'Downtown Atlanta',
//     image: require('../assets/image2.png'),
//   },
//   {
//     id: 3,
//     title: 'StayFit Fulton County',
//     description: 'Fulton County, GA',
//     image: require('../assets/image3.png'),
//   },
//   {
//     id: 4,
//     title: 'Superior Path Labs ',
//     description: 'Fulton County',
//     image: require('../assets/image4.png'),
//   },
//   {
//     id: 5,
//     title: 'Superior Path Labs ',
//     description: 'Fulton County',
//     image: require('../assets/image5.png'),
//   },
//   {
//     id: 6,
//     title: 'StayFit Fulton County',
//     description: 'Fulton County, GA',
//     image: require('../assets/image6.png'),
//   },
//   {
//     id: 7,
//     title: 'StayFit Gyms Downtown',
//     description: 'Downtown Atlanta',
//     image: require('../assets/image1.png'),
//   },
//   {
//     id: 8,
//     title: 'StayFit Sandy  Springs',
//     description: 'Downtown Atlanta',
//     image: require('../assets/image2.png'),
//   },
//   {
//     id: 9,
//     title: 'StayFit Fulton County ',
//     description: 'Fulton County, GA',
//     image: require('../assets/image3.png'),
//   },
//   {
//     id: 10,
//     title: 'Superior Path  Labs',
//     description: 'Fulton County',
//     image: require('../assets/image4.png'),
//   },
//   {
//     id: 11,
//     title: 'Superior Path  Labs  ',
//     description: 'Fulton County',
//     image: require('../assets/image5.png'),
//   },
//   {
//     id: 12,
//     title: 'StayFit Fulton County',
//     description: 'Fulton County, GA',
//     image: require('../assets/image6.png'),
//   },
// ];

// type ItemProps = {
//   title: string;
//   description: string;
//   image: any;
//   locations: string[]; 
//   setLocations: (locations: string[]) => void;
//   count: number;
//   setCount: (count: number) => void;
// };

// const Item = ({
//   title,
//   description,
//   image,
//   locations,
//   setLocations,
//   count,
//   setCount
// }: ItemProps) => {
//   const [borderColor, setBorderColor] = useState('#FFF'); 
//   const handlePress = () => {
//   if (borderColor === 'blue') {
//       setBorderColor('#FFF');
//       setCount(count - 1);
//       setLocations(locations.filter(loc => loc !== title)); 
//     } else {
//       setBorderColor('blue');
//       setCount(count + 1);
//       setLocations([...locations, title]); 
//     }
//   };
//   console.log(count);
//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <View style={[styles.item, {borderColor}]}>
//         <Image source={image} style={styles.image} />
//         <Text style={styles.title} numberOfLines={2}>
//           {title}
//         </Text>
//         <Text style={styles.description}>{description}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const Select_Location_Body = () => {
//   const navigation: any = useNavigation();

//   const [isTwoColumns, setIsTwoColumns] = useState(true);
//   const [locations, setLocations] = useState<string[]>([]);
//   const [count, setCount] = useState(0);
//   const NavigateToNextPage = () => {
//     navigation.navigate('SubContract_Details', {locations});
//   };
//   //  const API_BASE_URL =  'https://b7a1-2409-40f2-1039-c12e-d1bf-8c78-2b9c-f87f.ngrok.io';

//   //   axios.defaults.baseURL = API_BASE_URL;
//   //   async function handleAddLocation() {
//   //     const loc = locations.toString();
//   //     try {
//   //       const json = JSON.stringify({
//   //         name: loc
//   //       });
//   //       const response = await axios.post(API_BASE_URL + '/users', json, { headers: {"Accept": "*/*", "Content-Type": "application/json"}});
//   //       console.log('Locations added:', response.data);
//   //     } catch (error) {
//   //       console.error('Error adding locations:', JSON.stringify(error));
//   //     }
//   //   }
//   useEffect(() => {
//     navigation.setOptions({
//       // headerTitle: `Select Locations (${count})`,
//       headerTitleStyle: {
//         marginLeft: wp((160 / width) * 100)
//       },
//       headerTitle: () => (
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
//           <Text style={{ fontSize: 22 ,color:'black'}}>Select Locations ({count})</Text>
//         </View>
//       ),
//     });
//   }, [count,navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//       {isTwoColumns ? (
//         <FlatList
//           data={DATA}
//           renderItem={({item}) => (
//             <Item
//               title={item.title}
//               description={item.description}
//               image={item.image}
//               locations={locations}
//               setLocations={setLocations}
//               count={count}
//               setCount={setCount}               
//             />
//           )}
//           keyExtractor={item => item.id.toString()}
//           numColumns={2}
//           style={styles.flatList}
//           contentContainerStyle={styles.flatListContent}
//         />
//       ) : (
//         <FlatList
//           data={DATA}
//           renderItem={({item}) => (
//             <Item
//               title={item.title}
//               description={item.description}
//               image={item.image}
//               locations={locations}
//               setLocations={setLocations}
//               count={count}
//               setCount={setCount} 
//             />
//           )}
//           keyExtractor={item => item.id.toString()}
//           numColumns={1}
//           style={styles.flatList}
//           contentContainerStyle={styles.flatListContent}
//         />
//       )}
//       <TouchableOpacity onPress={NavigateToNextPage} style={styles.button}>
//         <Text style={styles.buttontext}>Add locations</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: '-20%',
//     padding: '5%',
//     height: '100%',
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     gap: 10,
//   },
//   item: {
//     width: 175,
//     height: 125,
//     backgroundColor: '#FFF',
//     shadowColor: 'rgba(51, 102, 255, 0.12)', 
//     shadowOffset: {width: 0, height: 4}, 
//     shadowOpacity: 1, 
//     borderRadius: 10,
//     marginLeft: '3%',
//     marginBottom: '25%',
//     borderWidth: 1,
//     borderColor: 'white',
//   },
//   title: {
//     color: '#101840', 
//     textAlign: 'center', 
//     fontFamily: 'Manrope', 
//     fontSize: 17,
//     fontStyle: 'normal', 
//     fontWeight: '400', 
//     lineHeight: 20, 
//     marginTop: '5%',
//   },
//   description: {
//     color: 'rgba(16, 24, 64, 0.50)', 
//     textAlign: 'center',
//     fontFamily: 'Manrope', 
//     fontSize: 15, 
//     fontStyle: 'normal', 
//     fontWeight: '400', 
//     lineHeight: 20, 
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: '5%',
//   },
//   image: {
//     width: 72,
//     height: 72,
//     marginLeft: '10%',
//     marginTop: '-20%',
//     overflow: 'hidden',
//     borderRadius: 210,
//   },
//   flatList: {
//     width: '100%',
//   },
//   flatListContent: {
//     paddingVertical: 50, 
//   },
//   button: {
//     backgroundColor: '#36F',
//     padding: '5%',
//     borderRadius: 12,
//   },
//   buttontext: {
//     color: 'white',
//     textAlign: 'center',
//     alignItems: 'center',
//     fontSize: 20,
//   },
// });

// export default Select_Location_Body;
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import axios from 'axios';
const {width, height, scale} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DATA = [
  {
    id: 1,
    title: 'StayFit Gyms  Downtown',
    description: 'Downtown Atlanta',
    image: require('../assets/image1.png'),
  },
  {
    id: 2,
    title: 'StayFit Sandy  Springs',
    description: 'Downtown Atlanta',
    image: require('../assets/image2.png'),
  },
  {
    id: 3,
    title: 'StayFit Fulton County',
    description: 'Fulton County, GA',
    image: require('../assets/image3.png'),
  },
  {
    id: 4,
    title: 'Superior Path Labs ',
    description: 'Fulton County',
    image: require('../assets/image4.png'),
  },
  {
    id: 5,
    title: 'Superior Path Labs ',
    description: 'Fulton County',
    image: require('../assets/image5.png'),
  },
  {
    id: 6,
    title: 'StayFit Fulton County',
    description: 'Fulton County, GA',
    image: require('../assets/image6.png'),
  },
  {
    id: 7,
    title: 'StayFit Gyms Downtown',
    description: 'Downtown Atlanta',
    image: require('../assets/image1.png'),
  },
  {
    id: 8,
    title: 'StayFit Sandy  Springs',
    description: 'Downtown Atlanta',
    image: require('../assets/image2.png'),
  },
  {
    id: 9,
    title: 'StayFit Fulton County ',
    description: 'Fulton County, GA',
    image: require('../assets/image3.png'),
  },
  {
    id: 10,
    title: 'Superior Path  Labs',
    description: 'Fulton County',
    image: require('../assets/image4.png'),
  },
  {
    id: 11,
    title: 'Superior Path  Labs  ',
    description: 'Fulton County',
    image: require('../assets/image5.png'),
  },
  {
    id: 12,
    title: 'StayFit Fulton County',
    description: 'Fulton County, GA',
    image: require('../assets/image6.png'),
  },
];

type ItemProps = {
  title: string;
  description: string;
  image: any;
  locations: string[]; 
  setLocations: (locations: string[]) => void;
  count: number;
  setCount: (count: number) => void;
};

const Item = ({
  title,
  description,
  image,
  locations,
  setLocations,
  count,
  setCount
}: ItemProps) => {
  const [borderColor, setBorderColor] = useState('#FFF'); 
  const handlePress = () => {
  if (borderColor === 'blue') {
      setBorderColor('#FFF');
      setCount(count - 1);
      setLocations(locations.filter(loc => loc !== title)); 
    } else {
      setBorderColor('blue');
      setCount(count + 1);
      setLocations([...locations, title]); 
    }
  };
  console.log(count);
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.item, {borderColor}]}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {/* {title} */}
          {title.split(' ').slice(0, 2).join(' ') + '\n' + title.split(' ').slice(2).join(' ')}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Select_Location_Body = () => {
  const navigation: any = useNavigation();

  const [isTwoColumns, setIsTwoColumns] = useState(true);
  const [locations, setLocations] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const NavigateToNextPage = () => {
    navigation.navigate('SubContract_Details', {locations});
  };
  //  const API_BASE_URL =  'https://b7a1-2409-40f2-1039-c12e-d1bf-8c78-2b9c-f87f.ngrok.io';

  //   axios.defaults.baseURL = API_BASE_URL;
  //   async function handleAddLocation() {
  //     const loc = locations.toString();
  //     try {
  //       const json = JSON.stringify({
  //         name: loc
  //       });
  //       const response = await axios.post(API_BASE_URL + '/users', json, { headers: {"Accept": "*/*", "Content-Type": "application/json"}});
  //       console.log('Locations added:', response.data);
  //     } catch (error) {
  //       console.error('Error adding locations:', JSON.stringify(error));
  //     }
  //   }
  useEffect(() => {
    navigation.setOptions({
      // headerTitle: `Select Locations (${count})`,
      headerTitleStyle: {
        marginLeft: wp((160 / width) * 100)
      },
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp((16 / width) * 100) }}>
          <Text style={{ fontSize: 22 ,color:'black'}}>Select Locations ({count})</Text>
        </View>
      ),
    });
  }, [count,navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {isTwoColumns ? (
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              title={item.title}
              description={item.description}
              image={item.image}
              locations={locations}
              setLocations={setLocations}
              count={count}
              setCount={setCount}               
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              title={item.title}
              description={item.description}
              image={item.image}
              locations={locations}
              setLocations={setLocations}
              count={count}
              setCount={setCount} 
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />
      )}
      <TouchableOpacity onPress={NavigateToNextPage} style={styles.button}>
        <Text style={styles.buttontext}>Add locations</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '-20%',
    padding: '5%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
  },
  item: {
    width: 175,
    height: 125,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(51, 102, 255, 0.12)', 
    shadowOffset: {width: 0, height: 4}, 
    shadowOpacity: 1, 
    borderRadius: 10,
    marginLeft: '3%',
    marginBottom: '25%',
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    color: '#101840', 
    textAlign: 'center', 
    fontFamily: 'Manrope', 
    fontSize: 17,
    fontStyle: 'normal', 
    fontWeight: '400', 
    lineHeight: 20, 
    marginTop: '5%',
  },
  description: {
    color: 'rgba(16, 24, 64, 0.50)', 
    textAlign: 'center',
    fontFamily: 'Manrope', 
    fontSize: 15, 
    fontStyle: 'normal', 
    fontWeight: '400', 
    lineHeight: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
  },
  image: {
    width: 72,
    height: 72,
    marginLeft: '10%',
    marginTop: '-20%',
    overflow: 'hidden',
    borderRadius: 210,
  },
  flatList: {
    width: '100%',
  },
  flatListContent: {
    paddingVertical: 50, 
  },
  button: {
    backgroundColor: '#36F',
    padding: '5%',
    borderRadius: 12,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
});

export default Select_Location_Body;
