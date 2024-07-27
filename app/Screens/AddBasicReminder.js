import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
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
  time: Yup.string().label('Time'),
  due: Yup.string().required().label('Due Date'),
  last: Yup.string().required().label('Last Day'),
  note: Yup.string().min(3).label('Note'),
});

function AddBasicReminder({navigation}) {
  let repeatSelected = false;
  const [time, setTime] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [repeat, setRepeat] = useState(null);

  const repeatData = [
    {label: 'Monthly', value: '1'},
    {label: 'After 2 Months', value: '2'},
    {label: 'After 3 Months', value: '3'},
    {label: 'After 6 Months', value: '4'},
    {label: 'Yearly', value: '5'},
  ];

  const onDateChange = (event, value) => {
    console.log('Date value: ', value);
    setTime(value);
    setDateSelected(true);
  };

  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
      </View>
    );
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
          <Text style={styles.Heading}>Add Reminder</Text>

          <Formik
            initialValues={{
              title: '',
              time: '',
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
                <Pressable onPress={() => setShowTimer(!showTimer)}>
                  <DateHint
                    icon="calendar-multiselect"
                    date={moment(time).format('MMM DD hh:mm')}
                    backgroundColor={theme.colors.light}
                    iconColor={theme.colors.secondary}
                    color={dateSelected ? theme.colors.dark : 'gray'}
                  />
                </Pressable>
                {Platform.OS === 'ios' && (
                  <Modal animationType="slide" transparent visible={showTimer}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={time}
                          mode="datetime"
                          display="spinner"
                          style={{width: '100%'}}
                          minimumDate={new Date()}
                          onChange={onDateChange}
                        />
                        <Button
                          title="Save"
                          onPress={() => setShowTimer(!showTimer)}
                        />
                      </View>
                    </View>
                  </Modal>
                )}
                {Platform.OS === 'android' && showTimer && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode="datetime"
                    display="spinner"
                    minimumDate={new Date()}
                    onChange={onDateChange}
                  />
                )}
                <Dropdown
                  style={styles.dropdown}
                  containerStyle={styles.shadow}
                  data={repeatData}
                  labelField="label"
                  valueField="value"
                  label="Dropdown"
                  maxHeight={200}
                  placeholder="Select Repeat Duration"
                  placeholderStyle={{
                    color: 'gray',
                  }}
                  selectedTextStyle={{color: theme.colors.font}}
                  activeColor={theme.colors.primary}
                  value={repeat}
                  onChange={item => {
                    setRepeat(item.value);
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

                {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <DateHint
                    icon="calendar-multiselect"
                    date={'Reminde me on ' + moment(endDate).format('DD MMM')}
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
                        maxDate={new Date().getFullYear() + 5 + '-12-31'}
                        minDate={new Date().getFullYear() + '-01-01'}
                        //minRangeDuration={moment.format('yyyy')}
                        selectedDayColor={theme.colors.primary}
                        onDateChange={onDateChange}
                      />
                      <Button
                        title="Save"
                        onPress={() => setModalVisible(!modalVisible)}
                      />
                    </View>
                  </View>
                </Modal> */}
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
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.light,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.font,
  },
  icon: {
    marginRight: 5,
    width: 18,
    tintColor: theme.colors.dark,
    height: 18,
  },
});
export default AddBasicReminder;
