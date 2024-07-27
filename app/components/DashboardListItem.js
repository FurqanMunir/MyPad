import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {Text} from 'react-native-paper';
import {myTheme} from '../theme';

const theme = myTheme;
function DashboardListItem({
  title,
  number = 0,
  onPress,
  color = theme.colors.secondary,
}) {
  let displayNum = '0';
  if (number > 999) {
    displayNum = '999+';
  } else {
    displayNum = number;
  }

  return (
    <TouchableHighlight
      style={styles.touch}
      underlayColor={theme.colors.light}
      onPress={onPress}>
      <View style={styles.listItem}>
        <Text style={[styles.titleText, {color: color}]}>{title}</Text>
        <Text style={[styles.titleText, {color: color}]}>{displayNum}</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
    paddingHorizontal: 40,
  },
  touch: {
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 25,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default DashboardListItem;
