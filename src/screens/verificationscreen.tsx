//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import HeaderLogo from '../component/headerLogo';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomButton from '../component/customButton';
import { useRoute } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import OtpInput from '../component/otpinput';

// create a component
const VerificationScreen = ({navigation}:any) => {
 const route = useRoute();
  const { confirmation } = route.params as { confirmation: any }; 
  const [code,setcode] = useState('')
  const handleVerify = async () => {
    try {
      await confirmation.confirm(code); // ✅ Firebase verification
      navigation.navigate('bottomtabnavigator')
      console.log('Phone number verified!');
    } catch (error) {
      console.error('Invalid code:', error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // platform-specific
      style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderLogo />
        <OtpInput 
        value={code}
        setValue={setcode}
        placeholder="useless placeholder"
        />       
        <View style={{alignItems: 'center', paddingTop: SPACING.space_10 * 7}}>
          <CustomButton
            title="Send Code"
            onPress={handleVerify}
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
    flex: 1,
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
    paddingLeft: 30,
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
  },
});

//make this component available to the app
export default VerificationScreen;
