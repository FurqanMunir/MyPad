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
import {Dropdown} from 'react-native-element-dropdown';
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
const billType = [
  {label: 'Elercity', value: '1'},
  {label: 'Education', value: '2'},
  {label: 'Gas', value: '3'},
  {label: 'Internet', value: '4'},
  {label: 'Phone', value: '5'},
  {label: 'Rent', value: '6'},
  {label: 'Other', value: '7'},
];

const repeatData = [
  {label: 'Monthly', value: '1'},
  {label: 'After 2 Months', value: '2'},
  {label: 'After 3 Months', value: '3'},
  {label: 'After 6 Months', value: '4'},
  {label: 'Yearly', value: '5'},
];

let dateSelected = false;

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  due: Yup.string().required().label('Due Date'),
  last: Yup.string().required().label('Last Day'),
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

function AddBillReminder({navigation}) {
  const [selectedEndDate, setSelectedEndDate] = useState(
    moment(new Date()).add(10, 'days'),
  );
  const [selectedStartDate, setSelectedStartDate] = useState(
    moment(new Date()),
  );
  const [type, setType] = useState(null);
  const [repeat, setRepeat] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
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
  console.log('datemsg', new Date().getFullYear() + '-1-30');
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
        <Text style={styles.Heading}>Add Bill Details</Text>
        <Formik
          initialValues={{
            title: '',
            due: '',
            last: '',
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

              <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={billType}
                search
                searchPlaceholder="Search"
                placeholderStyle={styles.placeholder}
                selectedTextStyle={{color: theme.colors.font}}
                activeColor={theme.colors.primary}
                labelField="label"
                valueField="value"
                label="Dropdown"
                maxHeight={250}
                placeholder="Select Bill Type"
                value={type}
                onChange={item => {
                  setType(item.value);
                  console.log('selected', item);
                }}
                renderLeftIcon={() => (
                  <Image
                    style={styles.icon}
                    source={require('../components/assets/more.png')}
                  />
                )}
                renderItem={item => _renderItem(item)}
                textError="Error"
              />

              <Dropdown
                style={styles.dropdown}
                containerStyle={styles.shadow}
                data={repeatData}
                labelField="label"
                valueField="value"
                label="Dropdown"
                maxHeight={200}
                selectedTextStyle={{color: theme.colors.font}}
                activeColor={theme.colors.primary}
                placeholder="Select Repeat Duration"
                placeholderStyle={styles.placeholder}
                value={repeat}
                onChange={item => {
                  setRepeat(item.value);
                  console.log('selected', item);
                }}
                renderLeftIcon={() => (
                  <Image
                    style={styles.icon}
                    source={require('../components/assets/more.png')}
                  />
                )}
                renderItem={item => _renderItem(item)}
                textError="Error"
              />
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <DateHint
                  icon="calendar-multiselect"
                  date={
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
                      restrictMonthNavigation
                      textStyle={{color: theme.colors.font}}
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
    color: theme.colors.font,
  },
  icon: {
    marginRight: 5,
    width: 18,
    tintColor: theme.colors.dark,
    height: 18,
  },
  shadow: {
    shadowColor: theme.colors.light,
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
    color: theme.colors.font,
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
export default AddBillReminder;
