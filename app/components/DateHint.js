import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {myTheme} from '../theme';

const theme = myTheme;

function DateHint({
  icon,
  backgroundColor = theme.colors.light,
  iconColor = theme.colors.secondary,
  height = 50,
  date = '2-10 to 10-10',
  color = 'gray',
}) {
  return (
    <View
      style={[
        styles.container,
        (height = {height}),
        (backgroundColor = {backgroundColor}),
      ]}>
      <Icon name={icon} size={20} color={iconColor} style={styles.icon} />
      <Text style={{width: '90%', color: color}}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    width: '90%',
    //padding: Platform.OS === 'android' ? 5 : 15,
    paddingLeft: Platform.OS === 'android' ? 10 : 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default DateHint;
