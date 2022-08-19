import React from "react";
import { Avatar, Button, ProgressBar, Divider } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import StyledText from "../../style/StyledText";
import theme from "../../theme";

function CategoryPay() {
  const category = [
    {
      id: 1,
      name: "hogar",
      price: "S/100",
      icon: "home",
    },
    {
      id: 2,
      name: "comida",
      price: "S/60",
      icon: "food",
    },
    {
      id: 3,
      name: "transporte",
      price: "S/20",
      icon: "car",
    },
  ];
  return (
    <>
      {category.map((item,index) => (
        <View key={item.id}>
          <View style={styles.containerProgress}>
            <Avatar.Icon
              size={50}
              icon={item.icon}
              style={{ backgroundColor: "transparent" }}
            />
            <View style={styles.progressBarView}>
              <ProgressBar
                progress={0.6}
                color={theme.colors.categoryPayment[index]}
                style={styles.progressBar}
              />
              <StyledText
                fontSize="progres"
                fontWeight="normal"
                style={{
                  zIndex: 1,
                  marginLeft: -358,
                }}
              >
                {item.name}
              </StyledText>
              <StyledText
                fontSize="progres"
                fontWeight="bold"
                style={{
                  zIndex: 1,
                }}
              >
                {item.price}
              </StyledText>
            </View>
          </View>
          <Divider style={styles.divider} />
        </View>
      ))}
    </>
  );
}

function ProgresGastos(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <StyledText
          fontSize="cardTitle"
          fontWeight="super"
          color="gris"
          style={{
            letterSpacing: 1,
          }}
        >
          Gastos
        </StyledText>
        <View style={{ marginTop: 20 }}>
          <CategoryPay />
          <View style={{ alignItems: "center" }}>
            <Button
              icon="plus"
              mode="contained"
              dark={true}
              color={theme.colors.rgbaGris}
              style={{ width: 180, borderRadius: 50 }}
              onPress={() => console.log("Pressed")}
            >
              Mostrar mas
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 390,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: theme.colors.titleHeaderText,
    height: 350,
    width: 350,
    margin: 7,
    borderRadius: 40,
    padding: 25,
  },
  containerProgress: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarView: {
    height: 45,
    width: 240,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  progressBar: {
    height: 45,
    width: 240,
    borderRadius: 10,
    zIndex: -1,
    marginLeft: -5,
  },
  divider: {
    height: 0.5,
    marginTop: -10,
    marginBottom: 10,
    backgroundColor: theme.colors.titleCardGastos,
  },
});
export default ProgresGastos;
