import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { router, useRouter } from "expo-router";
import { ScrollView } from 'react-native-gesture-handler';

export default function HabiliCard() {
    return (
        <View>            
            <ScrollView horizontal={true} style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=> router.push("views/cat1")}>
                    <View style={[styles.card]}>
                        <Text>Cat 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.5} onPress={()=> router.push("views/cat1")}>
                    <View style={[styles.card]}>
                        <Text>Cat 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.5} onPress={()=> router.push("views/cat1")}>
                    <View style={[styles.card]}>
                        <Text>Cat 3</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        borderRadius: 4,
        margin:8,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff79',
        elevation: 4,
    },
})