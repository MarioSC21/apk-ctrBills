import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import { View } from "react-native";
import { Container } from "react-native-scrollable-navigation-bar";

//? Components
import Pay from "../components/Pay";
import Friends from "../components/Friends";
import ProgresGastos from "../components/ProgresGastos";
import GraficoGastos from "../components/GraficGastos";
import {
  HeaderNavigationTitle,
  HeaderBackgroundComponent,
  HeaderNavigationBarComponent,
  HeaderForegroundComponent,
  BorderComponent,
  HeaderBorderComponent,
} from "../components/HeaderNavigation";
import { StyledLineChart } from "../components/Charts/LineChart";
import FabGroupButton from "../components/FabGroupButon";
import user from "../database/datosPrueba";

const HomeScreen = () => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  // useEffect(() => {
  //   getUsers().then((us) => setUsers(us));
  // }, [users]);

  return (
    <View style={{ height: "100%", width: "100%", margin: "auto" }}>
      <Container
        headerHeight={300}
        HeaderForegroundComponent={HeaderForegroundComponent}
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        HeaderNavigationBarComponent={HeaderNavigationBarComponent}
        NavigationBarComponent={HeaderNavigationTitle}
        contentContainerStyle={{ backgroundColor: "white" }}
        borderHeight={10}
        BorderComponent={BorderComponent}
        HeaderBorderComponent={HeaderBorderComponent}
        fadeOut={true}
      >
        <Pay />
        <Friends user={user} />
        <ProgresGastos />
        <GraficoGastos title='Balance' subtitle="Gatos por mes generados">
          <StyledLineChart />
        </GraficoGastos>
      </Container>
      <FabGroupButton />
    </View>
  );
};


export default HomeScreen;
