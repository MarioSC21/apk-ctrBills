import React from "react";
import { LineChart } from "react-native-chart-kit";
import { StyleSheet } from "react-native";
import theme from "../../theme";

export const StyledLineChart = () => {
  const data = {
    labels: [
      "En",
      "Fe",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Oc",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        data: [
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
        ],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFromOpacity: 0, // background gradient1
    backgroundGradientToOpacity: 0, // background gradient2
    fillShadowGradient: "#2a915e", // sombra de abajo
    useShadowColorFromDataset: true, // para que no tenga degradado
    decimalPlaces: 1, // optional, defaults to 2dp decimales
    color: () => theme.colors.titleCardGastos, // color de las barras y lineas
    labelColor: () => theme.colors.titleCardGastos, // color de las etiquetas
    propsForDots: {
      r: "6", // tamano de los puntos
      strokeWidth: "2", // grosor de la linea alrededor del punto
      stroke: theme.colors.numberGastos, // color de la linea alrededor del punto
    },
  };
  return (
    <LineChart
      data={data}
      width={350}
      height={250}
      yAxisLabel="S/"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1, cunatas lineas aparecen
      chartConfig={chartConfig}
      bezier
      style={styles.styleLineChart}
    />
  );
};

const styles = StyleSheet.create({
  styleLineChart: {
    marginVertical: 0,
    borderRadius: 16,
  },
});
