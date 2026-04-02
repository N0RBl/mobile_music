import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.logo}>NURO</Text>
        <Image source={require('../../assets/Union_blue.png')}/>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.bg} source={require('../../assets/bg.png')}/>
      </View>
      
      <Text style={styles.title}>Nuro Headphone</Text>
      <Text style={styles.price}>$1,699</Text>

      <View style={styles.info}>
        <View style={styles.infoRow}>
          <Text style={styles.li}>Brand:</Text>
          <Text style={[styles.li, styles.liValue]}>Nuro</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.li}>Connections:</Text>
          <Text style={[styles.li, styles.liValue]}>Wired</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.li}>Color:</Text>
          <Text style={[styles.li, styles.liValue]}>Gray</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.li}>Form Factor:</Text>
          <Text style={[styles.li, styles.liValue]}>On Ear</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 15,
    justifyContent: "center",
    flexDirection: 'row',
    gap: 270,
    marginBottom: 20,
  },
  logo: { 
    color: "#7A9AB8",
    fontSize: 12,
    fontFamily: 'Inter-Black',
    
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: 200,
    height: 360,
    resizeMode: 'contain',
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
    marginTop: 20,
  },
  price: {
    fontSize: 14,
    marginBottom: 30,
    color: "#7A9AB8",
    fontFamily: 'Inter-Black',
  },
  info: {
    marginBottom: 40,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%',
  },
  li: {
    color: '#B5B5B5',
    fontFamily: 'Inter-Black',
    fontSize: 12,
  },
  liValue: {
    color: "#524342",
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