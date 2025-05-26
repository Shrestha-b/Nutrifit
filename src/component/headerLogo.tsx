//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, Images, SPACING} from '../theme/theme';

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.NutrifitLogo} style={styles.Imgstyle} />
      <View style={{alignItems: 'center'}}>
        <Text
          style={styles.TXT_1}>
          Get Started with DailyNutriFit
        </Text>
        <Text style={styles.TXT_2}>Sign up with your mobile number</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#2c3e50',
  },
  Imgstyle: {
    width: SPACING.space_10 * 5.5,
    height: SPACING.space_10 * 4,
    padding: SPACING.space_36 * 2,
    marginTop: SPACING.space_18 * 2,
  },
  TXT_1: {
    color: COLORS.Black,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.openSans,
    fontWeight: '600',
  },
  TXT_2: {
    color: COLORS.Black,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.openSans,
    paddingTop: SPACING.space_2 * 3
  },
});

export default HeaderLogo;
