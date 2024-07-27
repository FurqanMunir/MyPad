import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Icon from './Icon';

function PickerItem({reminder, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon name={reminder.icon} size={40} />
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
