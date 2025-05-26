//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Button} from 'react-native';
import HeaderLogo from '../component/headerLogo';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomButton from '../component/customButton';
import { FirebaseAuthTypes, getAuth, signInWithPhoneNumber } from '@react-native-firebase/auth';

const EnterNumber = ({navigation}:any) => {
  const [number, onChangeNumber] = useState('+91');
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
    // console.log(confirm)
    // console.log(number)

async function handleSignInWithPhoneNumber(phoneNumber: string) {
    try {
      const confirmation = await signInWithPhoneNumber(getAuth(),phoneNumber);
      setConfirm(confirmation); // ✅ No error now
    navigation.navigate('verificationscreen', { confirmation });
    } catch (error) {
      console.error('SMS not sent:', error);
    }

  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // platform-specific
      style={{ flex: 1 }}
    >

    <View style={styles.container}>
      <HeaderLogo />

      <Text style={styles.InputHeader}>Mobile Number</Text>
      <View>
        {/* <Text>91</Text> */}
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType='default'
        placeholderTextColor={COLORS.grey}
      />
      </View>
      <Text style={styles.bottomtxt}>
        We'll send a verification code to this number.
      </Text>
      <View style={{alignItems:'center', paddingTop: SPACING.space_10*7}}>
      <CustomButton
        title="Phone Number singin"
        onPress={() => handleSignInWithPhoneNumber(number)}
        buttonStyle={styles.buttonstyle}
        textStyle={styles.btntext}
      />
      </View>
    </View>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  InputHeader: {
    paddingLeft: SPACING.space_20,
    paddingTop: SPACING.space_18 * 4,
    color: COLORS.Black,
    fontSize: FONTSIZE.size_14,
    fontWeight: '400',
    fontFamily: FONTFAMILY.openSans,
  },
  input: {
    color: COLORS.grey,
    height: SPACING.space_20 * 3,
    margin: SPACING.space_15,
    borderWidth: 1,
    paddingVertical: SPACING.space_18,
    borderRadius: BORDERRADIUS.radius_25,
    borderColor: COLORS.Grey,
    paddingLeft:30 
  },
  bottomtxt: {
    color: COLORS.Black,
    fontSize: FONTSIZE.size_10,
    fontWeight: '400',
    fontFamily: FONTFAMILY.openSans,
    paddingLeft: SPACING.space_18,
  },
  buttonstyle: {
    paddingLeft: SPACING.space_20,
    width: SPACING.space_15 * 24,
    
  },
  btntext: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_16,
    fontWeight: '700',
    fontFamily: FONTFAMILY.openSans,
  }
});

//make this component available to the app
export default EnterNumber;
