import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {myTheme, RoseTheme, LightTheme, DarkTheme} from '../theme';

import {EventRegister} from 'react-native-event-listeners';

import colors from '../colors';
import Screen from '../components/Screen';
import ThemeListItem from '../components/ThemeListItem';

function ThemeScreen({navigation}) {
  const HnadleTheme = name => {
    EventRegister.emit('theme', name);
  };

  return (
    <Screen>
      <ThemeListItem
        bg={'#080808'}
        title="Dark"
        onPress={() => HnadleTheme('DarkTheme')}
      />
      <ThemeListItem
        bg={'#f3f6f4'}
        title="Light"
        onPress={() => HnadleTheme('LightTheme')}
      />
      <ThemeListItem
        bg={'#e83526'}
        title="Color Full"
        onPress={() => HnadleTheme('myTheme')}
        selected={true}
      />
      <ThemeListItem
        bg={'#c90076'}
        title="Rose"
        onPress={() => HnadleTheme('RoseTheme')}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  list: {flexDirection: 'row'},
  color: {
    height: 30,
    width: 30,
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
  content: {
    justifyContent: 'space-between',
  },
});
export default ThemeScreen;
