import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuro Headphone</Text>
      <Text style={styles.price}>$1,699</Text>

      <View style={styles.info}>
        <Text>Brand: Nuro</Text>
        <Text>Connections: Wired</Text>
        <Text>Color: Gray</Text>
        <Text>Form Factor: On Ear</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
  },

  price: {
    fontSize: 18,
    marginBottom: 30,
    color: "#7A9AB8",
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
    fontWeight: "600",
  },
});