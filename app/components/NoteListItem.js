import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from 'react-native-paper';
import Swipeable from 'react-native-swipeable';
import colors from '../colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {myTheme} from '../theme';

const theme = myTheme;

function NoteListItem({
  heading = 'heading',
  text = 'dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy dummy text dummy text dummy text dummy text dummy text dummy text dummy text dummy  text dummy text dummy text ',
  onPress,
  onDelete,
  date = 'June 20, 1999 3:40PM',
}) {
  const rightButton = [
    <TouchableWithoutFeedback
      underlayColor={theme.colors.danger}
      onPress={onDelete}
      style={{justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: theme.colors.danger,
          height: 90,
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

  return (
    <Swipeable rightButtons={rightButton}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={theme.colors.light}
        onPress={onPress}>
        <View style={styles.listItem}>
          <Text style={styles.titleText}>{heading}</Text>
          <Text style={{maxHeight: 48, color: theme.colors.font}}>{text}</Text>
          <Text style={{color: theme.colors.secondary, marginTop: 2}}>
            {moment(date).format('DD-MM-YYYY') ===
            moment(new Date()).format('DD-MM-YYYY')
              ? 'Today ' + moment(date).format('hh:mm A')
              : moment(date).format('MMM DD hh:mm A')}
          </Text>
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
    maxHeight: 90,
    elevation: 5,
  },
  titleText: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
    height: 17,
  },
});

export default NoteListItem;
