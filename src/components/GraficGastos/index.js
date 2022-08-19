import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../../style/StyledText";
import theme from "../../theme";

function GraficoGastos({
  title,
  subtitle = "",
  align,
  style,
  children,
  ...restOfProps
}) {
  const titleStyles = [
    styles.title,
    align === "center" && styles.alignCenter,
    align === "left" && styles.alignLeft,
    align === "right" && styles.alignRight,
  ];
  const containerStyles = [
    styles.container,
    style
  ]
  return (
    <View style={containerStyles}>
      <View style={styles.cardContainer}>
        <StyledText
          fontSize="cardTitle"
          fontWeight="super"
          color="gris"
          style={titleStyles}
          {...restOfProps}
        >
          {title}
        </StyledText>
        {subtitle !== '' && 
          <StyledText fontWeight="normal" color="gris" style={titleStyles}>
            {subtitle}
          </StyledText>
        }
        <View style={{ marginTop: 20, marginLeft: -25 }}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 390,
    justifyContent: "center",
    alignItems: "center",
    // marginTop:-160
  },
  cardContainer: {
    backgroundColor: theme.colors.titleHeaderText,
    height: 350,
    width: 350,
    margin: 7,
    borderRadius: 40,
    padding: 25,
  },
  title: {
    letterSpacing: 1,
  },
  alignCenter: {
    textAlign: "center",
  },
  alignLeft: {
    textAlign: "left",
  },
  alignRight: {
    textAlign: "right",
  },
});
export default GraficoGastos;
