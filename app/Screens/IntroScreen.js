import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import colors from '../colors';

function IntroScreen({navigation}) {
  return (
    <Background>
      <Image
        style={styles.icon}
        source={require('../components/assets/icon.png')}
      />
      <Text style={styles.header}>Welcome to MyPad </Text>
      <Text style={styles.subtitle}>
        The easiest way to manage your accounts, notes and reminder
      </Text>
      <Button
        title="Login"
        color={colors.primary}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Register"
        color={colors.secondary}
        onPress={() => navigation.navigate('Register')}
      />
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1,
  },
  header: {
    fontSize: 21,
    color: colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  subtitle: {
    color: colors.dark,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
});

export default IntroScreen;
