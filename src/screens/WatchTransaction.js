import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import { Container } from "react-native-scrollable-navigation-bar";
import {
  HeaderNavigationTitle,
  HeaderBackgroundComponent,
  HeaderNavigationBarComponent,
  HeaderForegroundTitle,
  BorderComponent,
  HeaderBorderComponent,
} from "../components/HeaderNavigation";
import CardLargeDetail from "../components/CardLargeDetail";
import GraficoGastos from "../components/GraficGastos";
import { StylePieChart } from "../components/Charts/PieChart";

const WatchTransaction = (props) => {
  const category = [
    {
      id: 1,
      name: "Ingresos",
      price: "S/1000",
      icon: "home",
    },
  ];
  return (
    <View style={{ height: "100%", width: "100%", margin: "auto" }}>
      <Container
        headerHeight={400}
        HeaderForegroundComponent={()=><HeaderForegroundTitle nombre='Presupuesto'/>}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        HeaderNavigationBarComponent={HeaderNavigationBarComponent}
        NavigationBarComponent={HeaderNavigationTitle}
        contentContainerStyle={{ backgroundColor: "white" }}
        borderHeight={10}
        BorderComponent={BorderComponent}
        HeaderBorderComponent={HeaderBorderComponent}
        fadeOut={true}
      >
        <CardLargeDetail style={styles.CardLargeDetailStyle}/>
        <GraficoGastos title='Gastos : S/3500' align='center' style={styles.cardGraficStyle}>
          <StylePieChart/>
        </GraficoGastos>
        <CardLargeDetail/>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 35,
  },
  InputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  CardLargeDetailStyle:{
    marginTop:-360
  },
  cardGraficStyle:{
    marginTop:-150
  }
});
export default WatchTransaction;
