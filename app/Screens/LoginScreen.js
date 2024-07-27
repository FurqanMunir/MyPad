import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Background from '../components/Background';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import colors from '../colors';
import Button from '../components/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function LoginScreen({navigation}) {
  return (
    <>
      <Background>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          style={styles.icon}
          source={require('../components/assets/icon.png')}
        />
        <Text style={styles.header}>Welcome Back </Text>
        <Text style={styles.subtitle}>
          Login with your registered account to continue old activities, task,
          and bills.
        </Text>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, setFieldTouched, errors, touched}) => (
            <>
              <TextInput
                icon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                textContentType="emailAddress"
                iconColor={
                  errors.email && touched.email
                    ? colors.danger
                    : colors.secondary
                }
              />
              <View style={styles.error}>
                {touched.email && errors.email && (
                  <Text style={{color: colors.danger}}> {errors.email}</Text>
                )}
              </View>

              <TextInput
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={handleChange('password')}
                textContentType="password"
                onBlur={() => setFieldTouched('password')}
                iconColor={
                  errors.password && touched.password
                    ? colors.danger
                    : colors.secondary
                }
                autoCorrect={false}
                secureTextEntry
              />

              <View style={styles.error}>
                {touched.password && errors.password && (
                  <Text style={{color: colors.danger}}> {errors.password}</Text>
                )}
              </View>
              <View style={styles.forgotPassword}>
                <TouchableOpacity>
                  <Text style={styles.insturation}>Forget Password?</Text>
                </TouchableOpacity>
              </View>
              <Button title="Login" loading={false} onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <View style={styles.row}>
          <Text style={{color: colors.dark}}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  error: {
    width: '90%',
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 21,
    color: colors.primary,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  subtitle: {
    paddingHorizontal: 12,
    color: colors.dark,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 20,
  },
  insturation: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 21,
    width: '100%',
    alignItems: 'flex-end',
  },

  forgotPassword: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  link: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
