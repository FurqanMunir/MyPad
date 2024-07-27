/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen';

import IntroScreen from './app/Screens/IntroScreen';
import LoginScreen from './app/Screens/LoginScreen';
import RegisterScreen from './app/Screens/RegisterScreen';
import Dashboard from './app/Screens/Dashboard';
import ProfileScreen from './app/Screens/ProfileScreen';
import EditProfile from './app/Screens/EditProfile';
import ThemeScreen from './app/Screens/ThemeScreen';
import AddNote from './app/Screens/AddNote';
import Reminderintro from './app/Screens/Reminderintro';
import AddPassword from './app/Screens/AddPassword';
import AddBill from './app/Screens/AddBill';
import AddExpense from './app/Screens/AddExpense';
import AddBasicReminder from './app/Screens/AddBasicReminder';
import AddBillReminder from './app/Screens/AddBillReminder';
import AddLoanReminder from './app/Screens/AddLoanReminder';
import AddInstallmentReminder from './app/Screens/AddInstallmentReminder';
import NotesList from './app/Screens/NotesList';
import AccountList from './app/Screens/AccountList';
import PasswordList from './app/Screens/PasswordList';
import ReminderList from './app/Screens/ReminderList';
import ViewInstallment from './app/Screens/ViewInstallment';
import {EventRegister} from 'react-native-event-listeners';
import {myTheme, myThemex} from './app/theme';
import {Platform} from 'react-native';
import ViewLoan from './app/Screens/ViewLoan';
import ViewBill from './app/Screens/ViewBill';
import ViewBasicReminder from './app/Screens/ViewBasicReminder';
import ViewPassword from './app/Screens/ViewPassword';
import ViewExpense from './app/Screens/ViewExpense';
import ViewReceipt from './app/Screens/ViewReceipt';
import {SafeAreaView} from 'react-native-safe-area-context';

const DashboardStack = createNativeStackNavigator();
const ReminderStack = createNativeStackNavigator();
const IntroStack = createNativeStackNavigator();

const theme = myTheme;
function IntroStackScreen() {
  return (
    <IntroStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <IntroStack.Screen
        name="Intro"
        component={IntroScreen}></IntroStack.Screen>

      <IntroStack.Screen
        name="Login"
        component={LoginScreen}></IntroStack.Screen>

      <IntroStack.Screen
        name="Register"
        component={RegisterScreen}></IntroStack.Screen>
    </IntroStack.Navigator>
  );
}

function ReminderStackScreen() {
  return (
    <ReminderStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <ReminderStack.Screen
        name="Reminder"
        options={{headerShown: false}}
        component={Reminderintro}
      />
      <ReminderStack.Screen
        name="BillReminder"
        options={{title: ''}}
        component={AddBillReminder}
      />
      <ReminderStack.Screen
        name="LoanReminder"
        options={{title: ''}}
        component={AddLoanReminder}
      />
      <ReminderStack.Screen
        name="InstallmentReminder"
        options={{title: ''}}
        component={AddInstallmentReminder}
      />
      <ReminderStack.Screen
        name="BasicReminder"
        options={{title: ''}}
        component={AddBasicReminder}
      />
    </ReminderStack.Navigator>
  );
}

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.light,
        },
      }}
      initialRouteName="Dashboard">
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen
        name="NotesList"
        component={NotesList}
        options={{
          title: '',
          headerStyle: {
            titleColor: theme.colors.secondary,
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="AccountList"
        component={AccountList}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="PasswordList"
        component={PasswordList}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="ReminderList"
        component={ReminderList}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="ViewBill"
        component={ViewBill}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="ViewExpense"
        component={ViewExpense}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="ViewBasicReminder"
        component={ViewBasicReminder}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="ViewLoan"
        component={ViewLoan}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="ViewPassword"
        component={ViewPassword}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="ViewReceipt"
        component={ViewReceipt}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="ViewInstallment"
        component={ViewInstallment}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          title: 'Select Theme',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
      <DashboardStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerShadowVisible: false,
          headerRight: () => (
            <Icon
              name="done"
              size={25}
              color={theme.colors.primary}
              onPress={() => alert('Profile Updated')}
            />
          ),
        }}
      />
      <DashboardStack.Screen
        name="Reminder"
        component={ReminderStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <DashboardStack.Screen
        name="AddPassword"
        component={AddPassword}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="AddBill"
        component={AddBill}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />

      <DashboardStack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
        }}
      />
      <DashboardStack.Screen
        name="AddNote"
        component={AddNote}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
          headerRight: ({size = 24}) => (
            <>
              <Icon
                name="delete-outline"
                style={{paddingHorizontal: 5}}
                size={size}
                color={theme.colors.primary}
                onPress={() => alert('Profile Updated')}
              />
              <Icon
                name={Platform.OS === 'ios' ? 'ios-share' : 'share'}
                size={size}
                style={{paddingHorizontal: 5}}
                color={theme.colors.primary}
                onPress={() => alert('Profile Updated')}
              />
            </>
          ),
        }}
      />
    </DashboardStack.Navigator>
  );
}

const App = () => {
  //call event register and get that theme here

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={myTheme}>
      <DashboardStackScreen />
      {/* <IntroStackScreen /> */}
    </NavigationContainer>
  );
};

export default App;
