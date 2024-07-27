import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, Pressable, Modal} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import {Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import DateHint from '../components/DateHint';
import Button from '../components/Button';
import Screen from '../components/Screen';
import {myTheme} from '../theme';

const theme = myTheme;
const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  totalAmmount: Yup.string().required().label('Total Ammount'),
  installmentAmmount: Yup.string().required().label('Installment Ammount'),
  due: Yup.string().required().label('Due Date'),
  last: Yup.string().required().label('Last Day'),
  note: Yup.string().min(3).label('Note'),
});
let dateSelected = false;
let startDateSelected = false;

function AddInstallmentReminder({navigation}) {
  const [selectedEndDate, setSelectedEndDate] = useState(
    moment(new Date().setDate(10)),
  );
  const [selectedStartDate, setSelectedStartDate] = useState(
    moment(new Date().setDate(1)),
  );
  const [installmentStartDate, setInstallmentStartDate] = useState(
    new Date().setDate(1),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [startDateVisible, setStartDateVisible] = useState(false);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';

  const onDateChange = (date, type) => {
    console.log('date', date);
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(date);
      setSelectedStartDate(date);
    }
    dateSelected = true;
  };

  const onStartDateChange = date => {
    setInstallmentStartDate(date);
    console.log(
      'Installment Start Date',
      moment(installmentStartDate).format('DD MM YYYY'),
    );
    startDateSelected = true;
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="done"
          size={25}
          color={theme.colors.primary}
          onPress={() => alert('Bill Added')}
        />
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="done"
          size={25}
          color={theme.colors.primary}
          onPress={() => alert('This installment is added to reminder')}
        />
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Screen>
        <View style={styles.container}>
          <Text style={styles.Heading}>Add New Installment</Text>

          <Formik
            initialValues={{
              title: '',
              totalAmmount: '',
              installmentAmmount: '',
              due: '',
              last: '',
              note: '',
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
                  placeholder="Title"
                  autoCapitalize="none"
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
                  placeholder="Total Ammount"
                  keyboardType="numeric"
                  backgroundColor={theme.colors.light}
                  onChangeText={handleChange('totalAmmount')}
                  onBlur={() => setFieldTouched('totalAmmount')}
                  iconColor={
                    errors.totalAmmount && touched.totalAmmount
                      ? theme.colors.danger
                      : theme.colors.secondary
                  }
                />

                <View style={styles.error}>
                  {touched.totalAmmount && errors.totalAmmount && (
                    <Text style={{color: theme.colors.danger}}>
                      {errors.totalAmmount}
                    </Text>
                  )}
                </View>

                <TextInput
                  icon="cash"
                  placeholder="Installment Ammount"
                  keyboardType="numeric"
                  backgroundColor={theme.colors.light}
                  onChangeText={handleChange('installmentAmmount')}
                  onBlur={() => setFieldTouched('installmentAmmount')}
                  iconColor={
                    errors.installmentAmmount && touched.installmentAmmount
                      ? theme.colors.danger
                      : theme.colors.secondary
                  }
                />

                <View style={styles.error}>
                  {touched.installmentAmmount && errors.installmentAmmount && (
                    <Text style={{color: theme.colors.danger}}>
                      {errors.installmentAmmount}
                    </Text>
                  )}
                </View>

                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <DateHint
                    icon="calendar-multiselect"
                    date={
                      'Due Date ' +
                      moment(startDate).format('DD MMM') +
                      ' to ' +
                      moment(endDate).format('DD MMM')
                    }
                    backgroundColor={theme.colors.light}
                    iconColor={theme.colors.secondary}
                    color={dateSelected ? theme.colors.dark : 'gray'}
                  />
                </Pressable>
                <Modal animationType="slide" transparent visible={modalVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <CalendarPicker
                        textStyle={{color: theme.colors.font}}
                        restrictMonthNavigation
                        maxDate={new Date().getFullYear() + '-12-31'}
                        minDate={new Date().getFullYear() + '-01-01'}
                        //minRangeDuration={moment.format('yyyy')}
                        selectedDayColor={theme.colors.primary}
                        onDateChange={onDateChange}
                        allowRangeSelection
                      />
                      <Button
                        title="Save"
                        onPress={() => setModalVisible(!modalVisible)}
                      />
                    </View>
                  </View>
                </Modal>
                <Pressable
                  onPress={() => setStartDateVisible(!startDateVisible)}>
                  <DateHint
                    icon="calendar-multiselect"
                    date={
                      ' Start from ' +
                      moment(installmentStartDate).format('DD MMM YYYY')
                    }
                    backgroundColor={theme.colors.light}
                    iconColor={theme.colors.secondary}
                    color={startDateSelected ? theme.colors.dark : 'gray'}
                  />
                </Pressable>
                <Modal
                  animationType="slide"
                  transparent
                  visible={startDateVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <CalendarPicker
                        textStyle={{color: theme.colors.font}}
                        restrictMonthNavigation
                        maxDate={new Date().getFullYear() + 5 + '-12-31'}
                        minDate={new Date().getFullYear() - 5 + '-01-01'}
                        selectedDayColor={theme.colors.primary}
                        onDateChange={onStartDateChange}
                      />
                      <Button
                        title="Save"
                        onPress={() => setStartDateVisible(!startDateVisible)}
                      />
                    </View>
                  </View>
                </Modal>
                <TextInput
                  icon="note"
                  placeholder="Note"
                  autoCapitalize="none"
                  multiline
                  height={150}
                  style={{
                    width: '90%',
                    alignSelf: 'flex-start',
                    paddingRight: 10,
                    height: '100%',
                  }}
                  backgroundColor={theme.colors.light}
                  onChangeText={handleChange('note')}
                  onBlur={() => setFieldTouched('note')}
                  iconColor={theme.colors.secondary}
                  autoCorrect={false}
                />
              </>
            )}
          </Formik>
        </View>
      </Screen>
    </KeyboardAwareScrollView>
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
    flex: 1,
  },
  placeholder: {
    color: 'gray',
  },
  centeredView: {
    flex: 1,
    //    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  modalView: {
    margin: 20,
    width: '100%',
    backgroundColor: theme.colors.light,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: theme.colors.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  calender: {},
});
export default AddInstallmentReminder;
