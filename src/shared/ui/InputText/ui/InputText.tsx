import {
  CustomText,
  TextSize,
  TextWeight,
  TextSpacing,
} from '@shared/ui/CustomText';
import React, { useState } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import {
  TextInput as TextInputNative,
  TextInputProps,
  View,
} from 'react-native';
import { styles } from './InputTextStyle';

export type InputTextType = TextInputProps & {
  name: string;
  label?: string;
  rules?: Pick<
    RegisterOptions,
    'maxLength' | 'minLength' | 'validate' | 'required'
  >;
};

type InputTextProps = InputTextType & {
  control: Control<any, any>;
};

export const InputText = React.memo((props: InputTextProps) => {
  const { control, name, label, placeholder, secureTextEntry, rules, ...res } = props;
  const [isSecure, setIsSecure] = useState<boolean>(secureTextEntry || false);
  return (
    <Controller
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <CustomText size={TextSize.S_LG} weight={TextWeight.MEDIUM}>
            {label}
          </CustomText>
          <View style={[styles.wrapper]}>
            <TextInputNative
              {...res}
              value={value.toString()}
              secureTextEntry={isSecure}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardAppearance={'light'}
              style={[styles.input]}
              placeholder={placeholder}
            />
            {/* {secureTextEntry && (
              <Trailing show={isSecure} setShow={setIsSecure} />
            )} */}
            {error?.message && <CustomText>{error?.message}</CustomText>}
          </View>
        </View>
      )}
      name={name}
    />
  );
});
