import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import musicBackground from "../../assets/music.png";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }: Props) {

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
    <ImageBackground
      source={musicBackground} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>NURO</Text>
        <View>
          <Text style={styles.txt}>KITCHEN<span style={{ color: "#7A9AB8",}}></span></Text>
          <Text style={styles.txt}>HOME<span style={{ color: "#7A9AB8",}}></span></Text>
          <Text style={styles.txt}><span style={{ color: "#7A9AB8",}}>-ELECTRONICS</span> </Text>
          <Text style={styles.txt}><span style={{ color: "#7A9AB8",}}></span>SPORT</Text>
          <Text style={styles.txt}><span style={{ color: "#7A9AB8",}}></span>EXHIBITIONS</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Music")}
        >
          <Text style={styles.buttonText}>SIGN UP WITH EMAIL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  txt: {
    color: '#C5CFD8',
    fontFamily: 'Inter-Black',
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },

  logo: {
    color: "#7A9AB8",
    fontSize: 18,
    marginTop: 40,
    fontFamily: 'Inter-Black',
  },

  button: {
    backgroundColor: "#7A9AB8",
    padding: 18,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 40,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});