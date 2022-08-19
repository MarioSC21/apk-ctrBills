import React, { useState } from "react";
import { StackActions } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ButtonsLogin = ({ navigation }) => {
  const handleButton = () => {
    navigation.navigate("CreateUserLogin");
  };
  const handleButtonLogin = () => {
    navigation.dispatch(
      StackActions.replace('MyHome')
    )
    // navigation.navigate("MyHome");
  };
  return (
    <>
      <View style={styles.containerButton}>
        <Button
          icon="account"
          mode="outline"
          style={styles.button}
          color="white"
          onPress={handleButton}
        >
          Create Account
        </Button>
        <Button
          icon="login"
          mode="outline"
          style={styles.button}
          color="white"
          onPress={handleButtonLogin}
        >
          Login
        </Button>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonGoogle}>
        <Button
          icon="google"
          mode="outline"
          style={styles.button}
          color="white"
        >
          Inicia Sesion con Google
        </Button>
      </View>
      <View style={styles.containerButtonlink}>
        <Button mode="text">
          <Text style={styles.textForget}>Olvidates tu contraseña?</Text>
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: "3%",
    borderColor: "rgba(255,255, 255, 0.4)",
    borderWidth: 1,
    borderRadius: 15,
  },
  buttonGoogle: {
    marginTop: "5%",
    width: "85%",
  },
  divider: {
    height: 1,
    width: "85%",
    backgroundColor: "rgba(255,255, 255, 0.2)",
    marginTop: "5%",
  },
  containerButtonlink: {
    marginTop: "5%",
  },
  textForget: {
    color: "blue",
    fontSize: 12,
  },
});

export default ButtonsLogin;
