import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {myTheme} from '../theme';

const theme = myTheme;
export default function BackButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name="arrow-back-ios"
        color={theme.colors.primary}
        size={24}
        style={{marginLeft: 10}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 10,
  },
});
