import { StyleSheet,Text,View,Image,Dimensions} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card} from 'react-native-paper';
import ShareButton from '../assets/ShareButton'
const { width, height } = Dimensions.get('window');
function Home_Body(){
    const navigation:any = useNavigation();
    const NavigateToNextPage=()=>{
        navigation.navigate('Daily_Cleaning')
    }
    return(
        <Card style={style.card} >
           <Card.Title
                title={
                    <Text style={style.title}>Job awarded!</Text>
                }
                style={style.titleContainer}
            />
            <ShareButton style={style.share}/>
            <View style={style.gifContainer}>
                    <Image source={require('../assets/celebrategif.png')} style={style.gif} />
                </View>
            <Card.Content >
                <View style={style.textcontainer1}>
                    <Text style={style.daily}>Daily general cleaning at</Text>
                </View>
                <View style={style.textlocation}>
                    <Text style={style.location}>12 Locations</Text>
                </View>

            </Card.Content>
            <View style={style.divider}></View>  
            <Card.Content >
                <View style={style.date}>
                    <Text style={style.startd}>Start Date</Text>
                    <Text style={style.starte}>End Date</Text>
                </View>
                <View style={style.month}>
                    <Text style={style.sep}>Sep 22, 2022</Text>
                    <Text style={style.oct}>Oct 20,2022</Text>
                    <View style={style.size}>
                        <View style={style.sizeS} >
                            <Text style={style.s}>S</Text>
                        </View>
                        <View style={style.sizeM}>
                            <Text style={style.m}>M</Text>
                        </View>
                        <View style={style.sizeL}>
                            <Text style={style.l}>L</Text>
                        </View>
                    </View>  
                </View>
            </Card.Content>
            <View style={style.divider1}></View> 
            <Card.Content>
                <View style={style.bidcontainer}>
                    <Image source={require('../assets/bid.png')} style={style.bid} />
                    <Text style={style.dollar}>$ 94,225.00</Text>
                </View>
            </Card.Content> 
            <View style={style.divider1}></View> 
            <Card.Content>
               <View style={style.but}>
                  <View style={style.but1container}>
                    <Button style={style.but1} labelStyle={{ color: '#36F' }}><Text style={style.but1Text}>View details</Text></Button>
                  </View>
                  <View style={style.but2container}>
                    <Button style={style.but2} labelStyle={{ color: '#FFF' }} onPress={NavigateToNextPage}><Text style={style.but2Text}>Let's get started</Text></Button>
                  </View>
               </View>
            </Card.Content>
              
            
        </Card> 
        
    
    )
}
const style=StyleSheet.create({
    card:{
        backgroundColor:"white",
         marginLeft:'5%',
         paddingLeft:'1.8%',
        marginTop:height*0.06,
        width:'86.9%',
        alignItems:"center",
        justifyContent:"center",
        
        height:450
    },
    titleContainer: {
        paddingTop: 22, 
        paddingLeft:113,
        paddingRight:109
      },
    title:{
        color: '#1CA49C',      
        textAlign:'center',
        fontFamily: 'Manrope', 
        fontSize: 18,          
        fontStyle: 'normal',  
        fontWeight: '900',   
        lineHeight: 20,   
       
    },
    gif:{
        width:53,
        height:53,
    },
    gifContainer:{
        //alignItems:'center',
        paddingTop:height*0.04,
        paddingLeft:'43%',
        paddingRight:122
        
    },
    daily:{
        color: '#101840',
        fontFamily: 'Manrope',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 20,
        textAlignVertical: 'center',
        width:200,
        height:20
        
    },
    textcontainer1:{
        //alignItems:'center',
        paddingLeft:width*0.14,
       paddingRight:41,
        paddingTop:18
    },
    location:{
        color: '#101840',
        fontFamily: 'Manrope',
        fontSize: 13, 
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20, 
        textAlign: 'center', 
    },
    textlocation:{
        paddingLeft:89,
        paddingRight:90,
        paddingTop:12
    },
    divider:{
        paddingTop:17,
        marginLeft:'-1.6%',
        marginRight:'0.5%',

        borderBottomWidth:2,
        borderBottomColor:'#EEE'
    },
    startd:{
         color: '#7A7A7A',
         fontFamily: 'Manrope',
         fontSize: 13,
         //fontStyle: 'normal',
         fontWeight: '500',
         lineHeight: 20,
         paddingLeft:9,
        
    },
    starte:{
         color: '#7A7A7A',
         fontFamily: 'Manrope',
         fontSize: 13,
         //fontStyle: 'normal',
         fontWeight: '500',
         lineHeight: 20,
         paddingLeft:39,
         
     
    },
    date:{
        flexDirection:'row',
        paddingTop:16,
        marginLeft:-5
    },
    month:{
      flexDirection:'row',
      marginLeft:-5
      
    },
    sep:{
         color: '#101840',
         fontFamily: 'Manrope',
         fontSize: 13,
         fontStyle: 'normal',
         fontWeight: '700',
         lineHeight: 20,
         paddingLeft:9,

    },
    oct:{
        color: '#101840',
        fontFamily: 'Manrope',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 20,
        paddingLeft:20,
    },
    s:{
       borderRadius: 4,
       borderWidth: 1.5,
       borderColor: '#E5ECFF',
       backgroundColor: '#FFF', 
       color: '#101840',
       fontFamily: 'Manrope',
       fontSize: 10,
       fontStyle: 'normal',
       fontWeight: '400',
       lineHeight: 20,
       textAlign: 'center',
       width: 20,
       height: 19,
       paddingTop:-1
    },
    m:{
       borderRadius: 4,
       backgroundColor: '#E5ECFF',
       color: '#101840',
       fontFamily: 'Manrope',
       fontSize: 10,
       fontStyle: 'normal',
       fontWeight: '700',
       lineHeight: 20,
       textAlign: 'center', 
       width: 22,
       height: 22,
    },
    l:{
       borderRadius: 4,
       borderWidth: 1.5,
       borderColor: '#E5ECFF',
       backgroundColor: '#FFF', 
       color: '#101840',
       fontFamily: 'Manrope',
       fontSize: 10,
       fontStyle: 'normal',
       fontWeight: '400',
       lineHeight: 20,
       textAlign: 'center',
    //    width: 25,
    //    height: 24,
       width: 26,
       height: 25,
       paddingTop:2
       
    },
    size:{
        flexDirection:'row',
        paddingLeft:50,
        alignSelf: 'flex-end',
       
    },
    sizeM:{
       paddingLeft:7,
       marginTop:-3,
    },
    sizeL:{
       paddingLeft:5,
       marginTop:-9,
       padding:3
    },
    sizeS:{
        paddingLeft:10
     },
     divider1:{
        paddingTop:15,
        borderBottomWidth:2,
        marginLeft:'-1.6%',
        marginRight:'0.5%',
        borderBottomColor:'#EEE',
    },
    bidcontainer:{
        paddingLeft:80,
        paddingTop:10,
        flexDirection:'row',
    },
    bid:{
        width: 25,
        height: 25
    },
    dollar:{
        color: '#20B2AA',
        fontFamily: 'Manrope',
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.25,
        paddingTop:5,
        paddingLeft:5
    },
    but:{
        flexDirection:'row',
        alignContent:'center',
        display:'flex',
        paddingTop:20,

    },
    but1:{
        borderRadius: 12, 
        borderWidth: 1, 
        borderColor: '#36F', 
        backgroundColor: '#FFF', 
        width: 150, 
        height: 42,
    },
    but2:{
        borderRadius: 12, 
        borderWidth: 1, 
        borderColor: '#36F', 
        backgroundColor: '#36F', 
        width: 150,
        height: 42,
    },
    but2container:{
        paddingLeft:16,
    },
    but1container:{
        paddingLeft:-2
    },
    but2Text:{
        fontWeight:'600',
        lineHeight: 20, // Line height
        letterSpacing: 0.2,
        fontSize:15, 
    },
    but1Text:{
        fontWeight:'600',
        lineHeight: 20, // Line height
        letterSpacing: 0.2,
        fontSize:15,
    },
    share:{
        marginLeft:313,
        marginTop:-33

    }
})
export default Home_Body;