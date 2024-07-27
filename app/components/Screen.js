import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {myTheme} from '../theme';

const theme = myTheme;
function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
