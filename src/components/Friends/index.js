import React from "react";
import { Avatar, Button, Divider, TouchableRipple } from "react-native-paper";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import StyledText from "../../style/StyledText";
import theme from "../../theme";

function ButonAdd() {
  return (
    <View>
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        borderless={true}
        rippleColor={theme.colors.rgbaSecondary}
        style={styles.buttonIconPlus}
      >
        <Avatar.Icon
          size={75}
          color={theme.colors.rgbaPrimary}
          icon="plus"
          style={{ backgroundColor: "transparent" }}
        />
      </TouchableRipple>
      <StyledText align="center" color="primary">
        Add
      </StyledText>
    </View>
  );
}

function AvatarImagePerson({user}) {
  // console.log(user[0].perfiles);
  return (
    <>
      {/* perfiles */}
      {user[0].perfiles.map(perfil => (
        <View
          style={{
            margin: 7,
          }}
          key={perfil.id}
        >
          <Avatar.Image
            size={75}
            color={theme.colors.rgbaPrimary}
            source={perfil.avatar}
            style={styles.avatarImage}
          />
          <StyledText color='primary' align='center' style={{marginTop: 6 }}>{perfil.nombre}</StyledText>
        </View>
      ))}
    </>
  );
}

function Friends(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <StyledText
          align="center"
          fontSize="small"
          fontWeight="super"
          color="dark"
          style={{
            marginRight: 40,
          }}
        >
          Familia
        </StyledText>
        <Button
          mode="text"
          color={theme.colors.secondary}
          icon="chevron-right"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => console.log("Pressed")}
        >
          <Text>Ver detalles de gasto</Text>
        </Button>
      </View>
      <Divider style={styles.divider} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <ButonAdd />
        <AvatarImagePerson user={props.user}/>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 0.6,
    width: "95%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.titleHeaderText,
  },
  buttonIconPlus: {
    height: 75,
    width: 75,
    margin: 7,
    borderRadius: 28,
    borderStyle: "dashed",
    justifyContent: "center",
    borderColor: theme.colors.rgbaPrimary,
    borderWidth: 2,
    alignItems: "center",
  },
  avatarImage: {
    backgroundColor: "transparent",
  },
});
export default Friends;
