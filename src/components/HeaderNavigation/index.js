import React from "react";
import { Avatar } from "react-native-paper";
import { View, Platform, Image, StyleSheet } from "react-native";
import { NavigationBar, Border } from "react-native-scrollable-navigation-bar";
import StyledText from "../../style/StyledText";
import theme from "../../theme";
const BackGroundOnda = Platform.select({
  android: () => require("../../../assets/ondas2.png"),
  web: () => require("../../../assets/ondas3.jpg"),
})();

//? IMAGE PERFIL
const AvatarImagePerfil = ({ size }) => (
  <Avatar.Image size={size} source={require("../../../assets/perfil1.jpg")} />
);

//? NABVAR TITLE
export function HeaderNavigationTitle(props) {
  return (
    <NavigationBar
      title={`Hola Mario                      Saldo: S/4,500`}
      titleStyle={{ color: theme.colors.titleHeaderText, marginLeft: 55 }}
      backgroundColor={theme.colors.backgroundHeader}
      leftIcons={[<AvatarImagePerfil size={40} />]}
      {...props}
    />
  );
}

//? NABVAR BACKGROUND
export function HeaderNavigationBarComponent(props) {
  return <NavigationBar backgroundColor={"transparent"} {...props} />;
}

//? HOME BEGINNING
export function HeaderForegroundComponent(props) {
  console.log(props)
  return (
    <View style={{ alignItems: "center", paddingTop: 45 }}>
      <AvatarImagePerfil size={80} />
      <StyledText
        fontSize="title"
        fontWeight="super"
        style={{
          marginTop: 10,
        }}
      >
        Hola Mario
      </StyledText>
    </View>
  );
}
//? HOME TRANSACTION
export function HeaderForegroundTitle({nombre,...props}) {
  return (
    <View style={{ alignItems: "center", paddingTop: 45 }}>
      <StyledText
        style={{
          marginTop: 30,
          fontSize: 58,
          letterSpacing: 2,
          fontWeight: "400",
        }}
      >
        {nombre}
      </StyledText>
    </View>
  );
}


//? IMAGE DE FONDO
export function HeaderBackgroundComponent(props) {
  return <Image source={BackGroundOnda} style={{ height: 800 }} />;
}

//? BORDER BOTTOM NABVAR
export function BorderComponent(props) {
  return <Border backgroundColor={"transparent"} height={1} />;
}

//? DIVIDER BOTTOM NABVAR
export function HeaderBorderComponent(props) {
  return <Border backgroundColor={"transparent"} height={1} />;
}
