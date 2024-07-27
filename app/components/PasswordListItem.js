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
import {myTheme} from '../theme';
import {SocialIcon} from 'react-native-elements';

const theme = myTheme;
function PasswordListItem({
  title = 'Facebook',
  email = 'arslan@gmail.com',
  password = '12345678',
  onPress,
  onDelete,
  date = '3:40PM June 20',
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
  return (
    <Swipeable rightButtons={rightButton}>
      <TouchableHighlight
        style={styles.touch}
        underlayColor={theme.colors.light}
        onPress={onPress}>
        <View style={styles.listItem}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <SocialIcon
              type={title.toLowerCase()}
              iconSize={20}
              style={{height: 30, width: 30, borderRadius: 10, marginLeft: -2}}
            />
          </View>
          <View style={{width: '80%'}}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={{flexWrap: 'wrap'}}>
              <Text
                onPress={() => alert('Copy Email')}
                style={{
                  color: theme.colors.dark,
                  maxHeight: 20,
                  fontSize: 16,
                }}>
                {'Email: '}
                {email}
              </Text>
              <Text
                onPress={() => alert('Copy Password')}
                style={{
                  color: theme.colors.dark,

                  maxHeight: 20,
                  fontSize: 16,
                }}>
                {'Password: '}
                {password}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => alert('copy content')}
              name="content-copy"
              size={24}
              color={theme.colors.primary}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            />
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
    fontSize: 18,
    color: theme.colors.secondary,
    height: 20,
  },
});

export default PasswordListItem;
