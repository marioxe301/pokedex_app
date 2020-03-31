import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

const LandingPage = ({navigation}) =>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home');
        },2000)
    })

    return(
        <ImageBackground source={{uri: 'https://i.pinimg.com/originals/9f/b4/22/9fb422482ab6be8c64a12184d4088d90.jpg'}} style={styles.container} />
    );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
    }
});

export default LandingPage;