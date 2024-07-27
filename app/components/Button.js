import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {myTheme} from '../theme';
import colors from '../colors';

const theme = myTheme;
let load = false;

function Button({
  title,
  onPress,
  textColor = theme.colors.white,
  color = theme.colors.secondary,
  loading = false,
}) {
  load = loading;
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      {loading ? (
        <AnimatedLottieView
          source={require('./assets/loading.json')}
          autoPlay
          style={styles.loading}
        />
      ) : (
        <Text style={[styles.text, {color: textColor}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: load ? 0 : 15,
    flexDirection: 'row',
    width: '90%',
    height: 50,
    marginVertical: 10,
    backgroundColor: 'yellow',
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  loading: {
    //height: 40,
  },
});

export default Button;
