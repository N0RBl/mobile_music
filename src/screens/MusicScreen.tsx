import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Music">;

export default function MusicScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MUSIC</Text>

      <View style={styles.card}>
        <Text style={styles.icon}>🎵</Text>
      </View>

      <Text style={styles.song}>More Than My Hometown</Text>
      <Text style={styles.artist}>Morgan Wallen</Text>

      <TouchableOpacity
        style={styles.playButton}
        onPress={() => navigation.navigate("Product")}
      >
        <Text style={{ fontSize: 22 }}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A9AB8",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 40,
  },

  card: {
    width: 160,
    height: 200,
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
    fontSize: 18,
  },

  artist: {
    color: "#dce4ec",
    marginBottom: 40,
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