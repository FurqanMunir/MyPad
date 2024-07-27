import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Text} from 'react-native-paper';

import Screen from '../components/Screen';
import ListItem from '../SettinglistItem';
import {myTheme} from '../theme';

const theme = myTheme;
function ProfileScreen({navigation}) {
  return (
    <Screen>
      <TouchableHighlight
        underlayColor={theme.colors.light}
        style={styles.profileTop}
        onPress={() => navigation.navigate('EditProfile')}>
        <View>
          <Text style={styles.topText}>Arslan Naeem</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: theme.colors.font}}>
              arslanneem17@hotmail.com
            </Text>
            <Image
              style={styles.arrow}
              source={require('../components/assets/right-arrow.png')}
            />
          </View>
        </View>
      </TouchableHighlight>
      <View>
        <ListItem
          title="App Lock"
          icon="shield-lock-outline"
          bg={'#28B463'}
          onPress={() => alert('App Lock')}
        />
        <ListItem
          title="Delete Account"
          icon="delete-forever-outline"
          bg={'#9B59B6'}
          onPress={() => alert('Delete Account')}
        />
        <ListItem
          title="Theme"
          icon="palette"
          bg={theme.colors.primary}
          onPress={() => navigation.navigate('Theme')}
        />
        <ListItem
          title="Backup"
          icon="backup-restore"
          bg={'#2471A3'}
          onPress={() => alert('Backup')}
        />

        <ListItem
          title="Sign Out"
          icon="logout"
          bg={theme.colors.danger}
          onPress={() => alert('App Lock')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileTop: {
    backgroundColor: theme.colors.light,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  arrow: {
    height: 13,
    width: 15,
    tintColor: theme.colors.black,
    marginLeft: 5,
  },
});
export default ProfileScreen;
