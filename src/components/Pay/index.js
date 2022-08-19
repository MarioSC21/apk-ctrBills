import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StyledText from "../../style/StyledText";
import theme from "../../theme";

function Pay(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTarget}>
        <StyledText align="center" fontSize="small" fontWeight="normal">
          Saldo Actual
        </StyledText>
        <StyledText
          align="center"
          fontSize="number"
          fontWeight="bold"
          style={{
            marginTop: 43,
          }}
        >
          S/4,500
        </StyledText>
      </View>
      <View style={styles.containerTarget}>
        <StyledText align="center" fontSize="small" fontWeight="normal">
          Hasta ahora se ha gastado
        </StyledText>
        <StyledText
          align="center"
          fontSize="number"
          fontWeight="bold"
          style={{
            color: theme.colors.numberGastos,
            marginTop: 23,
          }}
        >
          S/650
        </StyledText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTarget: {
    height: 200,
    width: 172,
    margin: 10,
    backgroundColor: theme.colors.titleHeaderText,
    marginTop: -110,
    borderRadius: 50,
    padding: 23,
  },
});
export default Pay;
