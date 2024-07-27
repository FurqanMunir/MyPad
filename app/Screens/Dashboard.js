import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Text} from 'react-native-paper';
import {FloatingAction} from 'react-native-floating-action';
import {myTheme} from '../theme';

import Screen from '../components/Screen';
import colors from '../colors';
import DashboardListItem from '../components/DashboardListItem';

const theme = myTheme;

const buttonSize = 65;
const textStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.colors.font,
};

function Dashboard({navigation}) {
  const actions = [
    {
      text: 'Bill',
      textElevation: 0,
      color: '#17A589',
      buttonSize: buttonSize,
      icon: require('../components/assets/invoice.png'),
      name: 'AddBill',
      position: 3,
      textStyle: textStyle,
      textBackground: theme.colors.transparent,
    },
    {
      text: 'Expense',
      textElevation: 0,
      color: '#9B59B6',
      buttonSize: buttonSize,
      icon: require('../components/assets/expenses.png'),
      name: 'AddExpense',
      position: 5,
      textStyle: textStyle,
      textBackground: theme.colors.transparent,
    },
    {
      text: 'Notes',
      color: theme.colors.secondary,
      //color: '#2E86C1',
      buttonSize: buttonSize,
      textElevation: 0,
      icon: require('../components/assets/note.png'),
      name: 'AddNote',
      position: 4,
      textBackground: theme.colors.transparent,
      textStyle: textStyle,
    },
    {
      text: 'Password',
      color: '#BF4343',
      textElevation: 0,
      buttonSize: buttonSize,
      icon: require('../components/assets/lock.png'),
      name: 'AddPassword',
      position: 1,
      textBackground: theme.colors.transparent,
      textStyle: textStyle,
    },
    {
      text: 'Reminder',
      color: theme.colors.primary,
      textElevation: 0,
      buttonSize: buttonSize,
      icon: require('../components/assets/reminder.png'),
      name: 'Reminder',
      position: 2,
      textBackground: theme.colors.transparent,
      textStyle: textStyle,
    },
  ];

  return (
    <Screen>
      <View style={styles.Title}>
        <Text style={[styles.titleText, {color: theme.colors.primary}]}>
          My
        </Text>
        <Text style={[styles.titleText, {color: theme.colors.secondary}]}>
          {' '}
          Pad
        </Text>
      </View>
      <DashboardListItem
        title="Notes"
        color={theme.colors.secondary}
        onPress={() => navigation.navigate('NotesList')}
      />
      <DashboardListItem
        title="Account"
        number="8888"
        color={theme.colors.secondary}
        onPress={() => navigation.navigate('AccountList')}
      />
      <DashboardListItem
        title="Password"
        number="9"
        color={theme.colors.secondary}
        onPress={() => navigation.navigate('PasswordList')}
      />
      <DashboardListItem
        title="Reminder"
        number="10"
        color={theme.colors.danger}
        onPress={() => navigation.navigate('ReminderList')}
      />
      <FloatingAction
        color={theme.colors.primary}
        overlayColor={theme.colors.background}
        buttonSize={70}
        iconWidth={40}
        iconHeight={40}
        actions={actions}
        onPressItem={name => {
          navigation.navigate(name);
        }}
      />
      <TouchableHighlight
        onPress={() => navigation.navigate('Profile')}
        underlayColor={theme.colors.light}
        style={styles.floatingMenuButtonStyle}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.menu}
            source={require('../components/assets/more.png')}
          />
        </View>
      </TouchableHighlight>
    </Screen>
  );
}
const styles = StyleSheet.create({
  Title: {
    flexDirection: 'row',
    padding: 15,
    marginLeft: 30,
    marginBottom: 30,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  menu: {
    tintColor: theme.colors.secondary,
    height: 40,
    width: 40,
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 35,
    marginLeft: 30,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Dashboard;
