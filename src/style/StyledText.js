import React from "react"
import { Text, StyleSheet } from "react-native"
import theme from "../theme"

const styles =StyleSheet.create({
  text:{
    fontSize:theme.fontSizes.body,
    color: theme.colors.textSecondary,
  },
  primary:{
    color:theme.colors.textPrimary,
  },
  secondary:{
    color:theme.colors.titleHeaderText,
  },
  dark:{
    color:theme.colors.textPrimary,
  },
  gris:{
    color:theme.colors.titleCardGastos,
  },
  center:{
    textAlign:'center',
  },
  centerFlex:{
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  normal:{
    fontWeight:theme.fontWeights.normal,
  },
  super:{
    fontWeight:theme.fontWeights.super,
  },
  bold:{
    fontWeight:'bold',
  },
  textSizeTitle:{
    fontSize:theme.fontSizes.textTitlePrimary
  },
  textProgressBar:{
    fontSize:theme.fontSizes.subheadingProgressBar,
  },
  textNumber:{
    fontSize:theme.fontSizes.number
  },
  titleCard:{
    fontSize:theme.fontSizes.titleCard
  },
  textSizeSmall:{
    fontSize:18
  }
})

const StyledText = ({color,align,center,fontWeight,fontSize,children,style,...restOfProps}) => {
  const texStyles = [
    styles.text,
    color === 'primary' && styles.primary,
    color === 'secondary' && styles.secondary,
    color === 'dark' && styles.dark,
    color === 'gris' && styles.gris,
    align === 'center' && styles.center,//undifined
    center && styles.centerFlex,
    fontWeight === 'normal' && styles.normal,
    fontWeight === 'super' && styles.super,
    fontWeight === 'bold' && styles.bold,
    fontSize === 'title' && styles.textSizeTitle,
    fontSize === 'cardTitle' && styles.titleCard,
    fontSize === 'number' && styles.textNumber,
    fontSize === 'progres' && styles.subheadingProgressBar,
    fontSize === 'small' && styles.textSizeSmall,
    style
  ]
  return (
    <Text style={texStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

export default StyledText