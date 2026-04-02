import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

type Props = NativeStackScreenProps<RootStackParamList, "Music">;

SplashScreen.preventAutoHideAsync();

export default function MusicScreen({ navigation }: Props) {
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
      <View style={styles.nav}>
        <Image source={require('../../assets/bar.png')}/>
        <Image source={require('../../assets/ava.png')}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>MUSIC</Text>
        <View style={styles.card_max}>
          <Image source={require('../../assets/swip-left.png')}/>
          <View style={styles.card}>
            <Image source={require('../../assets/music-icon.png')}/>
          </View>
          <Image source={require('../../assets/swip-right.png')}/>
        </View>
        <Text style={styles.song}>More Than My Hometown</Text>
        <Text style={styles.artist}>Morgan Wallen</Text>
        <Text style={styles.artist2}>MORGAN WALLEN</Text>
        <View style={styles.time}>
          <Text style={styles.time2}>01:04</Text>
          <View style={styles.polosa}>
            <View style={styles.polosa2}></View>
          </View>
          <Text style={styles.time2}>02:28</Text>
        </View>

        <View style={styles.players}>
          <Image source={require('../../assets/Union.png')}/>
          <Image source={require('../../assets/skip-track-2.png')}/>
          <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("Product")}>
            <Image source={require('../../assets/play-icon.png')}/>
          </TouchableOpacity>
          <Image source={require('../../assets/skip-track-1.png')}/>
          <Image source={require('../../assets/Union-1.png')}/>
        </View>
      </View>
      <View style={styles.footer}>
        <Image source={require('../../assets/bar2.png')}/>
        <View style={styles.like}>
          <Image source={require('../../assets/like.png')}/>
          <Text style={styles.like_text}>More Than My Hometown</Text>
        </View>
        <Image source={require('../../assets/setting.png')}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  polosa2: {
    width: 50,
    height: 5,
    backgroundColor: '#BDD2E4',
    borderRadius: 200,
  },
  polosa: {
    width: 150,
    height: 5,
    backgroundColor: '#ffffff',
    borderRadius: 200,
  },
  like_text: {
    color: '#90ACC6',
    fontFamily: 'Inter-Black',
    fontSize: 10,
  },
  time: {
    padding: 5,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    height: 20,
    paddingBottom: 50,
  },
  time2: {
    color: "#fff",
    fontSize: 12,
    fontFamily: 'Inter-Black',
  },
  like: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    gap: 10,
  },
  footer: {
    borderTopRightRadius: 100,
    backgroundColor: "#ffffff",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    gap: 40,
  },
  nav: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9EB8D0",
    flexDirection: 'row',
    padding: 5,
    gap: 300,
  },
  card_max: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 80,
  },
  players: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#9EB8D0",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Inter-Black',
  },
  card: {
    width: 141,
    height: 222,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  icon: {
    fontSize: 40,
  },
  song: {
    color: "#fff",
    fontSize: 12,
    fontFamily: 'Inter-Black',
  },
  artist: {
    color: "#dce4ec",
    marginBottom: 20,
    fontFamily: 'Inter-Black',
    fontSize: 12,
  },
  artist2: {
    color: "#BDD2E4",
    marginBottom: 20,
    fontFamily: 'Inter-Black',
    fontSize: 11,
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});