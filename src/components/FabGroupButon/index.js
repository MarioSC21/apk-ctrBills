import React, { useEffect, useState } from "react";
import { FAB} from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "../../theme";

const FabGroupButton = () => {
  const [open, setOpen] = useState(false);

  const onStateChange = () => setOpen(!open);

  return (
    <FAB.Group
      open={open}
      icon={open ? "piggy-bank" : "plus"}
      fabStyle={{ backgroundColor: theme.colors.numberGastos}}
      style={styles.fab}
      actions={[
        {
          icon: "bank-minus",
          label: "agregar gasto",
          color:theme.colors.backgroundOnda,
          style: { backgroundColor: theme.colors.titleHeaderText },
          labelTextColor: theme.colors.titleHeaderText,
          labelStyle: { backgroundColor: theme.colors.titleCardGastos },
          onPress: () => console.log("Pressed email"),
        },
        {
          icon: "bank-plus",
          label: "agregar ingreso",
          style: { backgroundColor: theme.colors.titleHeaderText },
          color:theme.colors.categoryPayment[1],
          labelTextColor: theme.colors.titleHeaderText,
          labelStyle: { backgroundColor: theme.colors.titleCardGastos },
          onPress: () => console.log("Pressed notifications"),
        },
      ]}
      onStateChange={onStateChange}       
    />
  );
};
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default FabGroupButton;