import React from "react";
import { Avatar, ProgressBar, TouchableRipple } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import StyledText from "../../style/StyledText";
import theme from "../../theme";

function CategoryPay() {
  const category = [
    {
      id: 1,
      name: "Ingresos",
      price: "S/1000",
      icon: "home",
    },
  ];
  return (
    <>
      {category.map((item, index) => (
        <View key={item.id}>
          <View style={styles.containerProgress}>
            <Avatar.Icon
              size={60}
              icon={item.icon}
              style={{ backgroundColor: "transparent" }}
            />
            <View style={styles.progressBarView}>
              <ProgressBar
                progress={0.6}
                color={theme.colors.titleCardGastos}
                style={styles.progressBar}
              />
              <StyledText
                fontSize="progres"
                fontWeight="bold"
                style={styles.styleTexts}
              >
                {item.name}
              </StyledText>
              <StyledText
                fontSize="progres"
                fontWeight="bold"
                style={styles.StyledNumber}
              >
                {item.price}
              </StyledText>
            </View>
            <Avatar.Icon
              size={35}
              icon="chevron-right"
              style={{ backgroundColor: "transparent" }}
            />
          </View>
        </View>
      ))}
    </>
  );
}
function CardLargeDetail({style}) {
  const cardLargeStyles = [
    styles.cardContainer,
    style
  ]
  return (
    <View style={styles.container}>
      <TouchableRipple
        style={cardLargeStyles}
        onPress={() => console.log("Pressed")}
        borderless={true}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.backgroundContainer}>
          <CategoryPay />
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    height: 73,
    width: 360,
    borderRadius: 30,
    marginBottom: 7,
    padding: 2,
  },
  backgroundContainer: {
    backgroundColor: theme.colors.titleHeaderText,
  },
  containerProgress: {
    height: 72,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarView: {
    width: 260,
    marginTop: 12,
    borderRadius: 10,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  progressBar: {
    height: 20,
    width: 260,
    borderRadius: 10,
    zIndex: -1,
    marginLeft: -5,
  },
  styleTexts: {
    zIndex: 1,
    marginLeft: -410,
    marginTop: -50,
  },
  StyledNumber: {
    zIndex: 1,
    marginTop: -50,
  },
});
export default CardLargeDetail;
