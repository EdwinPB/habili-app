
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import { router, useRouter } from "expo-router";
import { TouchableOpacity } from 'react-native'

const cat1 = () => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.stuffBox}>
                <Text style={{color:"#530f59", fontSize:60, fontWeight: 'bold'}}>Auto<Text style={{color:"#fcd333",fontSize:60, fontWeight: 'bold'}}>1</Text></Text>
                
                <TouchableOpacity  activeOpacity={0.5} onPress={()=> router.back()}>
                  <Text > Atras </Text>
                </TouchableOpacity>
            </View>
            
            <StatusBar style="auto"  />
        </View>
    );
}

export default cat1;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#d4a4ca',
    fontWeight: 'bold',
  },
  stuffBox: {
    backgroundColor: '#d4a4ca',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
  },
  habilityBox: {
    backgroundColor: '#d4a4ca',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
  },
  schedulerBox: {
    height: '40%',
    backgroundColor: '#ffffff79',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

