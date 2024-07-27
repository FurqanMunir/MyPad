import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from 'react-native-paper';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import moment from 'moment';
import {myTheme} from '../theme';

const theme = myTheme;
function ReminderListItem({
  title = 'title title title title title title title title title title title  title title',
  price = '599.89',
  onPress,
  onDelete,
  dueDate = new Date(),
  lastDate = moment(new Date()).add(10, 'days'),
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
  let icon = require('../components/assets/reminder.png');
  iconColor = theme.colors.primary;
  if (type === 'Loan') {
    icon = require('../components/assets/loan.png');
    iconColor = '#9B59B6';
  }
  if (type === 'Bill') {
    icon = require('../components/assets/invoice.png');
    iconColor = '#17A589';
  }
  if (type === 'Installment') {
    icon = require('../components/assets/installment.png');
    iconColor = '#2E86C1';
  }
  return (
    <Swipeable rightButtons={rightButton}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={theme.colors.light}
        onPress={onPress}>
        <View style={styles.listItem}>
          <Image
            source={icon}
            style={[
              styles.icon,
              {
                tintColor: iconColor,
              },
            ]}
          />
          <View style={{width: '80%'}}>
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
              {type + '  '}
              {moment(dueDate).format('DD-MM-YYYY') ===
              moment(new Date()).format('DD-MM-YYYY')
                ? 'Today '
                : moment(dueDate).format('MMM DD')}
              {' - '}
              {type === 'Basic'
                ? moment(dueDate).format('hh:mm A')
                : moment(lastDate).format('DD-MM-YYYY') ===
                  moment(new Date()).format('DD-MM-YYYY')
                ? 'Today '
                : moment(lastDate).format('MMM DD')}
            </Text>
          </View>
          {moment(new Date()).isBetween(moment(dueDate), moment(lastDate)) && (
            <View style={{justifyContent: 'center', alignSelf: 'center'}}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../components/assets/due-date.png')}
              />
            </View>
          )}
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
  icon: {
    height: 40,
    width: 40,
    marginRight: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ReminderListItem;
