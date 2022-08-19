import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button} from "react-native-paper";
import TextInputLogin from "../components/TexInputLogin";
import ButtonsLogin from "../components/ButtonsLogin";

const LoginInitiationScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require("../../assets/img.gif")}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Good <Text style={styles.textDecoration}>Morning</Text>
        </Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInputLogin />
        <ButtonsLogin navigation={navigation}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  textContainer: {
    flexBasis: "18%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    letterSpacing: 4,
  },
  textDecoration: {
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
    paddingBottom: 4,
    borderBottomColor: "#C2788E",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: "2%",
    marginVertical: "3%",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default LoginInitiationScreen;
