import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import { SPACING } from '../theme/theme';

const CELL_COUNT = 6;
interface otpinputs {
value: any
setValue:  any
placeholder: string
}

const OtpInput:React.FC<otpinputs> = ({
  value,
  setValue,
  placeholder

}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({value, setValue});

  return (
    <View style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        // textContentType
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {padding: 20, alignItems: 'center', paddingTop: SPACING.space_20 * 2},
  title: {textAlign: 'center', fontSize: 20, marginBottom: 20},
  codeFieldRoot: {marginTop: 20, justifyContent: 'center', gap: SPACING.space_10},
  cell: {
    width: 40,
    height: 50,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
    marginHorizontal: 5,
    // borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 24,
  },
  focusCell: {
    borderColor: '#007AFF',
  },
});

export default OtpInput;
