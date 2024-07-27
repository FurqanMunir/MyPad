import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from 'react-native-paper';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {myTheme} from '../theme';
import moment from 'moment';

const theme = myTheme;
function AccountListItem({
  title = 'title title title title title title title title title title title  title title',
  price = '599.89',
  loc = '',
  onPress,
  onDelete,
  date = '3:40PM June 20',
  type = '',
}) {
  const rightButton = [
    <TouchableWithoutFeedback
      underlayColor={theme.colors.danger}
      onPress={onDelete}
      style={{justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: theme.colors.danger,
          height: 78,
          marginTop: 5,
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: theme.colors.light,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Icon
          name="delete"
          size={34}
          color={theme.colors.white}
          style={{padding: 10}}
        />
      </View>
    </TouchableWithoutFeedback>,
  ];
  let icon = '';
  iconColor = '#283747';
  if (type === 'expense') {
    icon = 'wallet';
    iconColor = '#2E4053';
  }
  if (type === 'bill') {
    icon = 'note-text';
    iconColor = '#2E86C1';
  }
  if (type === 'installment') {
    icon = 'cash-refund';
    iconColor = '#28B463';
  }
  return (
    <Swipeable rightButtons={rightButton}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={theme.colors.light}
        onPress={onPress}>
        <View style={styles.listItem}>
          <Icon2
            name={icon}
            size={34}
            color={iconColor}
            style={{alignSelf: 'center', paddingRight: 5}}
          />
          <View style={{width: '90%'}}>
            <Text style={styles.titleText}>{title}</Text>
            <Text
              style={{
                fontWeight: '500',
                color: theme.colors.primary,
                height: 21,
                fontSize: 18,
              }}>
              {'Rs. '}
              {price}
            </Text>
            <Text style={{color: theme.colors.secondary, maxHeight: 20}}>
              {moment(date).format('DD-MM-YYYY') ===
              moment(new Date()).format('DD-MM-YYYY')
                ? 'Today ' + moment(date).format('hh:mm A') + '  ' + loc
                : moment(date).format('MMM DD hh:mm A') + '  ' + loc}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  deletebtn: {backgroundColor: theme.colors.danger},
  touch: {
    marginHorizontal: 5,
    borderRadius: 10,
    margin: 5,
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxHeight: 78,
    elevation: 5,
  },
  titleText: {
    fontWeight: '500',
    color: theme.colors.secondary,
    height: 18,
  },
});

export default AccountListItem;
