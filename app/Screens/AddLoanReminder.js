import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import Screen from '../components/Screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import {Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import DateHint from '../components/DateHint';
import Button from '../components/Button';
import {myTheme} from '../theme';

const theme = myTheme;

let dateSelected = false;
// let giving = false;

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  company: Yup.string().required().label('To or From'),
  price: Yup.string().required().label('Price'),
  note: Yup.string().min(3).label('Note'),
});

const _renderItem = item => {
  return (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
    </View>
  );
};

function AddLoanReminder({navigation}) {
  const [selectedEndDate, setSelectedEndDate] = useState(
    moment(new Date()).add(10, 'days'),
  );
  const [selectedStartDate, setSelectedStartDate] = useState(
    moment(new Date()),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  const [giving, setGiving] = useState(false);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(date);
      setSelectedStartDate(date);
    }
    dateSelected = true;
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

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Screen style={styles.container}>
        <Text style={styles.Heading}>Add Loan Remider</Text>
        <Formik
          initialValues={{
            title: '',
            company: '',
            price: '',
            dueDate: '',

            note: '',
          }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
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
                icon="format-title"
                placeholder="Name (e.g. company or person)"
                backgroundColor={theme.colors.light}
                autoCorrect="none"
                onChangeText={handleChange('company')}
                onBlur={() => setFieldTouched('company')}
                iconColor={
                  errors.company && touched.company
                    ? theme.colors.danger
                    : theme.colors.secondary
                }
              />

              <View style={styles.error}>
                {touched.company && errors.company && (
                  <Text style={{color: theme.colors.danger}}>
                    {' '}
                    {errors.company}
                  </Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  width: '90%',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Pressable
                  onPress={() => setGiving(!giving)}
                  style={{
                    backgroundColor: giving
                      ? theme.colors.primary
                      : theme.colors.light,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: giving ? theme.colors.white : theme.colors.dark,
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Giving
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => setGiving(!giving)}
                  style={{
                    backgroundColor: !giving
                      ? theme.colors.secondary
                      : theme.colors.light,

                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 40,
                    borderBottomLeftRadius: 40,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: !giving ? theme.colors.white : theme.colors.dark,
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Taking
                    </Text>
                  </View>
                </Pressable>
              </View>

              <TextInput
                icon="cash"
                placeholder="Price"
                autoCapitalize="none"
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
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <DateHint
                  icon="calendar-multiselect"
                  date={
                    'Due Date ' +
                    moment(startDate).format('DD MMM YYYY') +
                    ' to ' +
                    moment(endDate).format('DD MMM YYYY')
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
                      maxDate={new Date().getFullYear() + 5 + '-12-31'}
                      minDate={new Date().getFullYear() + '-01-01'}
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
  dropdown: {
    backgroundColor: theme.colors.light,
    marginTop: 10,
    marginBottom: 10,
    width: (Dimensions.get('window').width / 100) * 90,
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
    width: 18,
    tintColor: theme.colors.dark,
    height: 18,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: theme.colors.light,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
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
export default AddLoanReminder;
