import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

import musicBackground from "../../assets/music.png";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ImageBackground
      source={musicBackground} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>NURO</Text>

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

  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },

  logo: {
    color: "#7A9AB8",
    fontSize: 20,
    marginTop: 40,
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