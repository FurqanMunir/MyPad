import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import TextInput from '../components/TextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {myTheme} from '../theme';

const theme = myTheme;
const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  note: Yup.string().min(3).label('Note'),
});

function AddPassword({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="done"
          size={25}
          color={theme.colors.primary}
          onPress={() => alert('Password Save')}
        />
      ),
    });
  }, [navigation]);

  return (
    <Screen>
      {/* <KeyboardAvoidingView style={{flex: 1}} behavior="padding"> */}
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Add your email and password</Text>
          <Text style={styles.subtitle}>
            Save your data securely into you phone and copy easily from password
            section
          </Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
              note: '',
              title: '',
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <TextInput
                  icon="format-title"
                  placeholder="Title (e.g. Facebook)"
                  backgroundColor={theme.colors.light}
                  autoCapitalize
                  onChangeText={handleChange('title')}
                  onBlur={() => setFieldTouched('title')}
                  iconColor={
                    errors.title && touched.title
                      ? theme.colors.danger
                      : theme.colors.secondary
                  }
                />
                <View style={styles.error}>
                  {touched.title && errors.title && (
                    <Text style={{color: theme.colors.danger}}>
                      {' '}
                      {errors.title}
                    </Text>
                  )}
                </View>

                <TextInput
                  icon="email"
                  placeholder="Email"
                  backgroundColor={theme.colors.light}
                  autoCapitalize="none"
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
                  placeholder="Password"
                  autoCapitalize="none"
                  backgroundColor={theme.colors.light}
                  onChangeText={handleChange('password')}
                  textContentType="password"
                  onBlur={() => setFieldTouched('password')}
                  iconColor={
                    errors.password && touched.password
                      ? theme.colors.danger
                      : theme.colors.secondary
                  }
                  autoCorrect={false}
                  secureTextEntry
                />

                <View style={styles.error}>
                  {touched.password && errors.password && (
                    <Text style={{color: theme.colors.danger}}>
                      {' '}
                      {errors.password}
                    </Text>
                  )}
                </View>

                <TextInput
                  icon="note"
                  placeholder="Note"
                  autoCapitalize="none"
                  multiline
                  height={200}
                  style={{
                    width: '90%',
                    alignSelf: 'flex-start',
                    paddingRight: 10,
                    height: '100%',
                  }}
                  backgroundColor={theme.colors.light}
                  onChangeText={handleChange('note')}
                  onBlur={() => setFieldTouched('note')}
                  iconColor={
                    errors.note && touched.note
                      ? theme.colors.danger
                      : theme.colors.secondary
                  }
                  autoCorrect={false}
                />

                <View style={styles.error}>
                  {touched.note && errors.note && (
                    <Text style={{color: theme.colors.danger}}>
                      {' '}
                      {errors.note}
                    </Text>
                  )}
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 290 : 0,
  },
  heading: {
    fontSize: 24,
    color: theme.colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.secondary,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default AddPassword;
