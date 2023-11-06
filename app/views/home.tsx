
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import { Link } from "expo-router";
import { TouchableOpacity } from 'react-native';
import { router, useRouter } from "expo-router";
import HabiliCard from "../components/habiliCard";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import type {StatusBarStyle} from 'react-native';

const onPress = () => Linking.canOpenURL("views/cat1").then(() => {
  Linking.openURL("views/cat1");
});

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.stuffBox}>
        <Text style={{color:"#530f59", fontSize:60, fontWeight: 'bold'}}>Fabi<Text style={{color:"#fcd333",fontSize:60, fontWeight: 'bold'}}>App</Text></Text>
      </View>
      <View style={styles.habilityBox}>
          <View style={{height:"22%", justifyContent:"flex-start", width:"100%", paddingHorizontal:40}}>
            <Text style={{fontSize:30, color:"#530f59", fontWeight: 'bold'}}>Categorias</Text>
          </View>          
          <View style={{height:"78%", alignContent:"center"}}>            
              <HabiliCard />
            {/* <SafeAreaView>
              <ScrollView>
              </ScrollView>
            </SafeAreaView> */}
            {/* <TouchableOpacity style={{height:"70%", width:"25%"}} activeOpacity={0.5} onPress={()=> router.push("views/cat1")}>
              <View style={styles.autoKnowledgeBox}>
                <Text>Autoconocimiento</Text>
              </View>             
              <Text>Autoconocimiento</Text>
            </TouchableOpacity>                              
            <View style={{marginHorizontal:20, height:"70%", width:"25%"}}>
              <Image style={{width: "100%", height: "100%"}} source={require('../assets/imgCategory/proposito-n.png')} />
            </View>
            <View style={{height:"70%", width:"25%"}}>
              <Image style={{width: "100%", height: "100%"}} source={require('../assets/imgCategory/proyecto-n.png')} />
            </View> */}
          </View>
      </View>
      <View style={styles.schedulerBox}>
        <Text>schedulerBox</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#D5A2CB',
    fontWeight: 'bold',
  },
  stuffBox: {
    backgroundColor: '#D5A2CB',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  habilityBox: {
    backgroundColor: '#D5A2CB',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
  },
  autoKnowledgeBox: {
    backgroundColor: '#ffffff79',
    alignItems: 'center',
    justifyContent: 'center',
  },
  schedulerBox: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: '45%',
    backgroundColor: '#ffffff79',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

