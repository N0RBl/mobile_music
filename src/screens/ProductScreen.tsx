import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, "Product">;

SplashScreen.preventAutoHideAsync();

export default function ProductScreen({ navigation }: Props) {


  const [loaded, error] = useFonts({
    'Inter-Black': require('../../fonts/MonumentExtended-Regular.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
  <> 
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.logo}>NURO</Text>
        <Image source={require('../../assets/Union_blue.png')}/>
      </View>
      <View style={styles.image}>
        <Image style={styles.bg} source={require('../../assets/bg.png')}/>
      </View>
      
      <Text style={styles.title} >Nuro Headphone</Text>
      <Text style={styles.price} >$1,699</Text>

      <View style={styles.info}>
        <Text style={styles.li}>Brand: <span style={{ color: "#524342", paddingLeft: 100}}>Nuro</span></Text>
        <Text style={styles.li}>Connections: <span style={{ color: "#524342", paddingLeft: 35}}>Wired</span></Text>
        <Text style={styles.li}>Color: <span style={{ color: "#524342", paddingLeft: 110}}>Gray</span></Text>
        <Text style={styles.li}>Form Factor: <span style={{ color: "#524342", paddingLeft: 37}}>On Ear</span></Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  nav:{
    height:15,
    justifyContent: "center",
    flexDirection: 'row',
    gap: 270,
    
  },
  li:{
    color: '#B5B5B5',
    fontFamily: 'Inter-Black',
  },
  image:{

  },
  bg:{
    width: 200,
    height: 360,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },

  title: {
    fontSize: 18,
    fontWeight: "100",
    fontFamily: 'Inter-Black',

  },

  price: {
    fontSize: 14,
    marginBottom: 30,
    color: "#7A9AB8",
    fontFamily: 'Inter-Black',
  },
  logo: { 
    color: "#7A9AB8",
    fontSize: 20,
  },
  info: {
    marginBottom: 40,
  },

  button: {
    borderWidth: 1,
    borderColor: "#7A9AB8",
    padding: 18,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#7A9AB8",
    fontWeight: "100",
    fontSize: 12,
    fontFamily: 'Inter-Black',
  },
});