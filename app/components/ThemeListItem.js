import React from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import colors from '../colors';
import Icon from './Icon';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {myTheme} from '../theme';

const theme = myTheme;

function ThemeListItem({title, bg, onPress, selected = false}) {
  return (
    <TouchableHighlight
      style={styles.border}
      underlayColor={colors.light}
      onPress={onPress}>
      <View style={styles.list}>
        <View style={styles.icon}>
          <Icon size={30} backgroundColor={bg} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          {selected && <MIcon name="done" size={25} color={colors.primary} />}
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  border: {marginHorizontal: 5, borderRadius: 10},
  arrow: {
    height: 20,
    width: 20,
    tintColor: colors.dark,
  },
  icon: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: theme.colors.font,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
});

export default ThemeListItem;
