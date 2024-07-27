import React from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import Icon from './components/Icon';
import {myTheme} from './theme';

const theme = myTheme;

function SettinglistItem({title, icon, bg, onPress}) {
  return (
    <TouchableHighlight
      style={styles.border}
      underlayColor={theme.colors.light}
      onPress={onPress}>
      <View style={styles.list}>
        <View style={styles.icon}>
          <Icon name={icon} size={30} backgroundColor={bg} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.arrow}
            source={require('./components/assets/right-arrow.png')}
          />
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
  },
  border: {margin: 5, borderRadius: 10},
  arrow: {
    height: 20,
    width: 20,
    tintColor: theme.colors.primary,
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

export default SettinglistItem;
