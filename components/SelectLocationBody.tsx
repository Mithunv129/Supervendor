import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '../assets/CheckBox';
import TickedCheckBox from '../assets/TickedCheckBox'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
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
    title: 'Sandy  Springs',
    description: 'Downtown Atlanta',
    image: require('../assets/image2.png'),
  },
  {
    id: 3,
    title: 'StayFit Fulton County Superior',
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
    title: 'StayFit Fulton County Superior',
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
    title: 'Sandy  Springs',
    description: 'Downtown Atlanta',
    image: require('../assets/image2.png'),
  },
  {
    id: 9,
    title: 'StayFit Fulton County Superior',
    description: 'Fulton County, GA',
    image: require('../assets/image3.png'),
  },
  {
    id: 10,
    title: 'Superior Path Labs',
    description: 'Fulton County',
    image: require('../assets/image4.png'),
  },
  {
    id: 11,
    title: 'Superior Path Labs',
    description: 'Fulton County',
    image: require('../assets/image5.png'),
  },
  {
    id: 12,
    title: 'StayFit Fulton County Superior',
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
  setCount,
}: ItemProps) => {
  const [borderColor, setBorderColor] = useState('#FFF');
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    if (borderColor === '#D9A521') {
      setBorderColor('#FFF');
      setCount(count - 1);
      setLocations(locations.filter(loc => loc !== title));
    } else {
      setBorderColor('#D9A521');
      setCount(count + 1);
      setLocations([...locations, title]);
    }
    setIsChecked(!isChecked);

  };
  console.log(count);
  const renderTitleLines = (title: string) => {
    const words = title.split(' ');
    const firstLine = words.slice(0, 2).join(' ');
    const secondLine = words.slice(2).join(' ');
    
    if(title.length>=20)
    {
      return(

        <Text style={styles.title} >
          {title.split(' ').slice(0, 2).join(' ') + '\n' + title.split(' ').slice(2).join(' ')}

</Text>

      )

    }
    else{
    return (
     
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
       
     
    );
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <View style={[styles.item, {borderColor}]}>
        <View>
          <Image source={image} style={styles.image} />
        </View>
        <View style={{marginLeft: 16,width:200}}>
          <Text style={styles.title} numberOfLines={2}>
            {/* {title} */}
            {renderTitleLines(title)}
            
            {/* {title.split(' ').slice(0, 2).join(' ') + '\n' + title.split(' ').slice(2).join('')} */}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={{marginLeft:"10%",}}>
          {isChecked ? (
            //  true
            <TickedCheckBox />  
                    ) : (
          //false

            <CheckBox />
          )}
        </View>

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

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        marginLeft: wp((160 / width) * 100),
      },
      headerTitle: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: wp((16 / width) * 100),
          }}>
          <Text
            style={{
              color: '#0F1532',
              //fontFamily: 'Manrope',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 28,
              letterSpacing: 0.15,
            }}>
            Select Locations ({count}/10)
          </Text>
        </View>
      ),
    });
  }, [count, navigation]);

  return (
    <SafeAreaView style={styles.container}>
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
      

      <TouchableOpacity onPress={NavigateToNextPage} style={styles.button}>
        <Text style={styles.buttontext}>Add locations</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    marginTop: '-20%',
    // padding: '5%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
  },
  item: {
    //width: 312,
    height: 100,
    backgroundColor: '#FFF',
   
    borderRadius: 16,
    //marginLeft: '3%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    //paddingTop: 16,
    paddingLeft: 16,
    //justifyContent:'center',
    alignItems:'center',
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 5,
  },
  title: {
    color: '#0F1532',
    fontFamily: 'Manrope',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0.15,

    // marginTop: '5%',
  },
  description: {
    marginTop: 8,
    color: 'rgba(16, 24, 64, 0.50)',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,

    //paddingTop: '5%',
  },
  image: {
    width: 66,
    height: 66,
    // marginLeft: '10%',
     marginTop: '2%',
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
    backgroundColor: '#0B30B2',
   // padding: '2%',
    borderRadius: 12,
    shadowColor: '#3A2A00',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    
    elevation: 5,
    marginBottom:"-6%",
    paddingTop:"5%",
   
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Manrope',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.2,
    
  },
});

export default Select_Location_Body;
