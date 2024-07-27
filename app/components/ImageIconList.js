import React from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {myTheme} from '../theme';

const theme = myTheme;

function Icon({name, size = 40, backgroundColor = '#000', iconColor = '#fff'}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 7,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {name && (
        <Image
          style={{
            tintColor: iconColor,
            height: size * 0.7,
            width: size * 0.7,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={name}
        />
      )}
    </View>
  );
}

function ImageIconlist({title, icon, bg, onPress}) {
  return (
    <TouchableHighlight
      style={styles.border}
      underlayColor={theme.colors.light}
      onPress={onPress}>
      <View style={styles.list}>
        <View style={styles.icon}>
          <Icon name={icon} size={40} backgroundColor={bg} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.arrow}
            source={require('../components/assets/right-arrow.png')}
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

export default ImageIconlist;
