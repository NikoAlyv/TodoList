import {View, Text, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../theme/colors';

interface IButtons {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle> | any;
}
export const Buttons: React.FC<IButtons> = ({text, onPress, style}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
