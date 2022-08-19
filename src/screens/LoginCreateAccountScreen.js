import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const LoginCreateAccountScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/craete3.jpg")}
      blurRadius={2}
      style={styles.Imagecontainer}
    > 
      <View style={styles.textContainer}>
        <Text style={styles.Text}>Create</Text>
        <Text style={styles.Text}>your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Name"
          placeholder="Name"
          style={styles.input}
          outlineColor="rgba(52, 52, 52, 0.6)"
          activeOutlineColor="#C2784C"
          right={<TextInput.Icon name="account" color="#fff" />}
          theme={{
            colors: {
              placeholder: "white",
              text: "white",
              primary: "white",
              underlineColor: "transparent",
              background: "rgba(40, 43, 63, 0.8)",
            },
            roundness: 15,
          }}
          mode="outlined"
        />
        <TextInput
          label="Email"
          placeholder="Email"
          style={styles.input}
          outlineColor="rgba(52, 52, 52, 0.6)"
          activeOutlineColor="#C2784C"
          right={<TextInput.Icon name="email" color="#fff" />}
          theme={{
            colors: {
              placeholder: "white",
              text: "white",
              primary: "white",
              underlineColor: "transparent",
              background: "rgba(40, 43, 63, 0.8)",
            },
            roundness: 15,
          }}
          mode="outlined"
        />
        <TextInput
          label="Password"
          placeholder="Password"
          style={styles.input}
          outlineColor="rgba(52, 52, 52, 0.6)"
          activeOutlineColor="#C2784C"
          right={<TextInput.Icon name="eye" color="#fff" />}
          theme={{
            colors: {
              placeholder: "white",
              text: "white",
              primary: "white",
              underlineColor: "transparent",
              background: "rgba(40, 43, 63, 0.8)",
            },
            roundness: 15,
          }}
          mode="outlined"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="account"
          mode="contained"
          style={styles.button}
          color="rgba(255, 255, 255, 0.6)"
        >
          Create Account
        </Button>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  Imagecontainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  textContainer: {
    paddingBottom: 30,
  },
  Text: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    letterSpacing: 2,
    marginHorizontal: 55,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: "10%",
  },
  input: {
    width: "75%",
    marginBottom: 10,
  },
  buttonContainer:{
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    padding:4,
    borderWidth: 1,
    borderRadius: 20,
  }
});
export default LoginCreateAccountScreen;
