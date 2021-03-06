import React from 'react';
import { Pressable, ActivityIndicator } from 'react-native';
import Text from '../../config/AppText';
import styles from './ButtonStyle';

interface Props {
  onPress?: () => void;
  btnStyles?: any;
  btnText?: String;
  Icon?: JSX.Element;
  btnTextStyle?: object;
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
}

function CustomButton(props: Props) {
  const {
    btnText,
    btnStyles,
    onPress,
    Icon,
    loading
  } = props;

  return (
    <Pressable
      style={[
        styles.button,
        btnStyles,
        styles.withShadow,
        {
          flexDirection: loading ? 'row' : 'row',
          opacity: loading ? 0.7 : 1,
        }
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {Icon ? Icon : null}
      <Text style={styles.text}>{btnText}</Text>
      {loading ? <ActivityIndicator style={styles.loader} size='small' /> : null}
    </Pressable>
  );
}

export default CustomButton;
