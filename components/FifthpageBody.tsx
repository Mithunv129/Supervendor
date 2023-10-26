import {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity,ScrollView,TextInput,TouchableHighlight} from 'react-native';
import { Avatar, Button, Card,Title} from 'react-native-paper';
import CheckBox from 'react-native-check-box';
import Plus from '../assets/Plus'
import Check1 from '../assets/Check1';
import Check2 from '../assets/check2';
import {useNavigation,useRoute} from '@react-navigation/native'



function FifthPageBody(){
    const navigation:any=useNavigation();
    const route=useRoute();
    const NavigateToNextPage=()=>{
        navigation.navigate('SixthPage')
    } 
    const locations:[] = route.params?.locations || []; 
    const [isChecked,setisChecked]=useState(false);
    const [subcontractName, setSubcontractName] = useState('');
    const toggleisChecked=()=>{
        setisChecked(!isChecked);
    }
    console.log(locations)
    return(
        <View style={style.container}>
            <View style={style.card}>
                <View style={style.content}>
                 <Check1/>
                 <Text style={style. checkboxText}>Create Subcontract</Text>
                </View>
                <View style={style.divider1}></View> 
                <View style={style.content1}>
                    <Text style={style.content1Text}>Facilities</Text>
                   <View style={style.locationsContainer}>
                      {locations.length > 0 ? (
                          locations.map((location, index) => (
                             <View key={index}>
                               <Text style={style.locationText}>{location}</Text>
                             </View>
                       ))
                       ) : (
                         <Text>No locations found</Text>
                       )}
                    </View>
                <View>
                    <Text style={style.subcontract}>Subcontract name</Text>
                    <View style={style.subcontractText}>
                    <TextInput
                    style={style.Input}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => setSubcontractName(text)}
                    />
                    </View>
                   
                 </View>
                 
               </View> 
            </View>
            <View style={style.card1}>
                <View style={style.MultiCon}>
                    <Check2/>
                    <Text style={style.MultiConText}>Create multiple subcontracts</Text>
                </View>
            </View>
            <View style={style.ButtonView}>
                <Button onPress={NavigateToNextPage}
                    labelStyle={style.buttonLabel}
                >
                    Continue
                </Button>
            </View>
        </View >
        
        
    )
}
 const style=StyleSheet.create({
     container:{
        backgroundColor:"#F3F5F9",
        height:'100%',
        width:'100%',
     },
     card:{
        backgroundColor:'#FFF',
        margin:'4%',
        marginTop:'5%',
        width:'92%',
        height:'47%',
        borderRadius:10
        
     },
     card1:{
        backgroundColor:'#FFF',
        margin:'4%',
        marginTop:'5%',
        width:'92%',
        height:'8%',
        borderRadius:10
        
     },
     
     checkboxText:{
        color: '#101840',
        fontFamily: 'Manrope',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        marginTop:'2%',
        paddingLeft:'3%'

     },
     content:{
        marginLeft:'4%',
        marginTop:'7%',
        flexDirection:'row'
     },
     divider1:{
        paddingTop:32,
        borderBottomWidth:5,
        borderBottomColor:'#EEE',
    },
    Button:{
        borderRadius: 12,
        borderWidth: 1,
        flexDirection:'row',
        padding:'5%',
        borderColor:'#EEEEEE',
    },
    content1:{
        paddingTop:'5%',
        paddingLeft:'4%',
        paddingRight:'4%'
    },
    bText:{
        color: '#36F',
        fontFamily: 'Manrope',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22, 
        letterSpacing: 0.25,
        paddingLeft:'4%',
        paddingTop:'1%'
    },
    subcontract:{
        color:'#474D66', 
        fontFamily: 'Manrope',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20, 
        letterSpacing: 0.4,
        paddingTop:'10%' ,
        
    },
    Input:{
        borderRadius:12,
        borderWidth:1,
        borderColor:'#EEE',
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8, 
        alignSelf: 'stretch',
        
    },
    subcontractText:{
        paddingTop:'2%',
    },
    MultiCon:{
        paddingLeft:'4%',
        paddingRight:'4%',
        paddingTop:'5%',
        flexDirection:'row'
    },
    MultiConText:{
        color: '#101840',
        fontFamily: 'Manrope',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 20,
        paddingTop:'2%',
        paddingLeft:'3%'
    },
    ButtonView:{
        marginLeft:'4%',
        marginRight:'4%',
        backgroundColor:'#36F',
        borderRadius:10,
        marginTop:'52%',
        paddingTop:'2%',
        paddingBottom:'2%'
    },
    buttonLabel:{
        color:'white',
        fontFamily: 'Lato',
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.15,
    },
    content1Text:{
        color: '#474D66', // Set the color
        fontFamily: 'Manrope', // Set the font family
        fontSize: 16, // Set the font size
        fontStyle: 'normal', // Set the font style
        fontWeight: '400', // Set the font weight
        lineHeight: 20, // Set the line height (you might need to adjust this)
        letterSpacing: 0.4,
    },
    locationsContainer: {
        marginTop: 10,
      },
    locationText: {
        color: '#101840',
        fontFamily: 'Manrope',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
         letterSpacing: 0.25,
    },
 })
export default FifthPageBody;