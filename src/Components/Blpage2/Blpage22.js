import React from "react";
import { SafeAreaView ,View,Text,StatusBar , Image , StyleSheet} from "react-native";
import styled from "styled-components/native";


const Title = styled.Text`
    font-size:24px;
    font-weight:900;
    text-align:center;
`;

const Header = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:10px;
    min-height:130px;
`;

const Buttons= styled.View`
    width:90%;
    min-height:45px;
    background-color:#EEA734;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin:auto;
    border-radius:10px;
    margin-top:5px;
    margin-bottom:5px;
`;






function Blpage22(){
    return(
        <>
        <SafeAreaView style={{marginTop:StatusBar.currentHeight,flex:1}}>
            <Header>
            <View>
                <Image source={require('../../assests/logo.png')} style={{width:60,height:60}}/>
            </View>
            <View>
                <Title>Zessti</Title>
                <Title>Food Service</Title>
            </View>
            </Header>
            <View style={{flex:1}}>
                <View style={styles.imgcon}>
                    <Image source={require('../../assests/blpage1.png')} style={{flex:1,width:"100%",height:"100%",resizeMode:"contain"}}/>
                </View>
                <View style={{flex:0.35, display:'flex' ,flexDirection:'column' ,alignItems:'center' ,justifyContent:'center',backgroundColor:'white'}}>
                        <Title style={{textTransform:'capitalize'}}>Choose your food</Title>
                        <Text style={{textAlign:'center' ,color:'#868686',fontSize:14}}>Easily find your type of food craving and you’ll get delivery in wide range.</Text>
                        <View style={{display:'flex',flexDirection:'row' ,alignItems:'center',justifyContent:'center',gap:10,marginTop:10}}>
                            <View style={{width:12.5,height:8 ,backgroundColor:'#868686',borderRadius:10}}></View>
                            <View style={{width:20,height:8 ,backgroundColor:'#22A45D',borderRadius:10}}></View>
                            <View style={{width:12.5,height:8 ,backgroundColor:'#868686',borderRadius:10}}></View>
                        </View>
                </View>
                <View>
                    <Buttons>
                        <Text style={{color:'white',fontSize:17}}>Get Started</Text>
                    </Buttons>
                    <Buttons>
                        <Text style={{color:'white',fontSize:17}}>Skip</Text>
                    </Buttons>
                </View>
            </View>
            
        </SafeAreaView>
        </>
    );
}

export default Blpage22;

const styles = StyleSheet.create({
    imgcon:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});