//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { BORDERRADIUS, COLORS, SPACING } from '../theme/theme';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: any;
  textStyle?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return ( 
  <TouchableOpacity
   onPress={onPress}
    style={[styles.container,buttonStyle]}>
    <Text style={[textStyle]}>{title}</Text>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SPACING.space_10 * 7,
    backgroundColor: COLORS.AppColor,
    width: SPACING.space_10 * 33,
    borderRadius: BORDERRADIUS.radius_20,
  },
});

//make this component available to the app
export default CustomButton;
