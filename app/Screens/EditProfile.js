import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import TextInput from '../components/TextInput';
import {myTheme} from '../theme';

const theme = myTheme;
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  oldpassword: Yup.string().required().min(6).label('Old Password'),
  newpassword: Yup.string().required().min(6).label('New Password'),
  name: Yup.string().required().min(3).label('Name'),
  phone: Yup.string().required().min(11).label('Phone'),
});

function EditProfile(props) {
  return (
    <Screen style={styles.back}>
      <Formik
        initialValues={{
          email: '',
          oldpassword: '',
          newpassword: '',
          phone: '',
          name: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <TextInput
              icon="account"
              placeholder="Full Name"
              autoCapitalize="none"
              autoCorrect={false}
              backgroundColor={theme.colors.white}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              iconColor={
                errors.name && touched.name
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
            />
            <View style={styles.error}>
              {touched.name && errors.name && (
                <Text style={{color: theme.colors.danger}}> {errors.name}</Text>
              )}
            </View>

            <TextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              backgroundColor={theme.colors.white}
              autoCorrect={false}
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              textContentType="emailAddress"
              iconColor={
                errors.email && touched.email
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
            />
            <View style={styles.error}>
              {touched.email && errors.email && (
                <Text style={{color: theme.colors.danger}}>
                  {' '}
                  {errors.email}
                </Text>
              )}
            </View>

            <TextInput
              icon="lock"
              placeholder="New Password"
              backgroundColor={theme.colors.white}
              autoCapitalize="none"
              onChangeText={handleChange('newpassword')}
              textContentType="password"
              onBlur={() => setFieldTouched('newpassword')}
              iconColor={
                errors.newpassword && touched.newpassword
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
              autoCorrect={false}
              secureTextEntry
            />

            <View style={styles.error}>
              {touched.newpassword && errors.newpassword && (
                <Text style={{color: theme.colors.danger}}>
                  {' '}
                  {errors.newpassword}
                </Text>
              )}
            </View>

            <TextInput
              icon="phone"
              placeholder="Phone"
              autoCapitalize="none"
              backgroundColor={theme.colors.white}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              iconColor={
                errors.phone && touched.phone
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
              autoCorrect={false}
            />

            <View style={styles.error}>
              {touched.phone && errors.phone && (
                <Text style={{color: theme.colors.danger}}>
                  {' '}
                  {errors.phone}
                </Text>
              )}
            </View>

            <TextInput
              icon="lock"
              placeholder="Old Password"
              backgroundColor={theme.colors.white}
              autoCapitalize="none"
              onChangeText={handleChange('oldpassword')}
              textContentType="password"
              onBlur={() => setFieldTouched('oldpassword')}
              iconColor={
                errors.oldpassword && touched.oldpassword
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
              autoCorrect={false}
              secureTextEntry
            />

            <View style={styles.error}>
              {touched.oldpassword && errors.oldpassword && (
                <Text style={{color: theme.colors.danger}}>
                  {' '}
                  {errors.oldpassword}
                </Text>
              )}
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  error: {
    width: '90%',
    alignItems: 'flex-start',
  },

  back: {
    backgroundColor: theme.colors.light,
    alignItems: 'center',
  },
});

export default EditProfile;
