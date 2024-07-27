import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import {myTheme} from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = myTheme;
function AppTextInput({
  icon,
  backgroundColor = theme.colors.light,
  iconColor = theme.colors.secondary,
  height = 50,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        (height = {height}),
        (backgroundColor = {backgroundColor}),
      ]}>
      <Icon name={icon} size={20} color={iconColor} style={styles.icon} />
      <TextInput
        placeholderTextColor="gray"
        style={{width: '90%', height: '100%', color: theme.colors.font}}
        {...otherProps}
      />
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

export default AppTextInput;
