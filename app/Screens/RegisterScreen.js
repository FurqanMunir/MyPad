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
  name: Yup.string().required().min(3).label('Name'),
  phone: Yup.string().required().min(11).label('Phone'),
});

function RegisterScreen({navigation}) {
  return (
    <Background>
      <BackButton onPress={() => navigation.goBack()} />
      <Image
        style={styles.icon}
        source={require('../components/assets/icon.png')}
      />
      <Text style={styles.header}>Create Account </Text>
      <Text style={styles.subtitle}>Keep your records safe</Text>
      <Formik
        initialValues={{email: '', password: '', phone: '', name: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <TextInput
              icon="account"
              placeholder="Full Name"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              iconColor={
                errors.name && touched.name ? colors.danger : colors.secondary
              }
            />
            <View style={styles.error}>
              {touched.name && errors.name && (
                <Text style={{color: colors.danger}}> {errors.name}</Text>
              )}
            </View>

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
                errors.email && touched.email ? colors.danger : colors.secondary
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

            <TextInput
              icon="phone"
              placeholder="Phone"
              autoCapitalize="none"
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              iconColor={
                errors.phone && touched.phone ? colors.danger : colors.secondary
              }
              autoCorrect={false}
            />

            <View style={styles.error}>
              {touched.phone && errors.phone && (
                <Text style={{color: colors.danger}}> {errors.phone}</Text>
              )}
            </View>
            <Button title="Register" loading={false} onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  icon: {
    width: 94,
    height: 94,
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
    color: colors.dark,
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

export default RegisterScreen;
