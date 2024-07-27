import React, {useState, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';

import TextInput from '../components/TextInput';
import Screen from '../components/Screen';
import {myTheme} from '../theme';

const theme = myTheme;
const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  price: Yup.string().required().label('Price'),
  note: Yup.string().min(3).label('Note'),
});

function AddExpense({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="done"
          size={25}
          color={theme.colors.primary}
          onPress={() => alert('Expense Added')}
        />
      ),
    });
  }, [navigation]);

  return (
    <Screen style={styles.container}>
      <Text style={styles.Heading}>Add Expense</Text>
      <Formik
        initialValues={{
          price: '',
          note: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <TextInput
              icon="format-title"
              placeholder="Title"
              backgroundColor={theme.colors.light}
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
              icon="cash"
              placeholder="Price"
              keyboardType="numeric"
              backgroundColor={theme.colors.light}
              onChangeText={handleChange('price')}
              onBlur={() => setFieldTouched('price')}
              iconColor={
                errors.price && touched.price
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
            />

            <View style={styles.error}>
              {touched.price && errors.price && (
                <Text style={{color: theme.colors.danger}}>
                  {' '}
                  {errors.price}
                </Text>
              )}
            </View>

            <TextInput
              icon="note"
              placeholder="You can add note here for this expense"
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
                <Text style={{color: theme.colors.danger}}> {errors.note}</Text>
              )}
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
  },
});

export default AddExpense;
