import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';
import ReminderListItem from '../components/ReminderListItem';
import {myTheme} from '../theme';

const theme = myTheme;
const data = [
  {
    id: 1,
    title: 'Shop - Elercity',
    dueDate: moment(new Date()).add(5, 'days'),
    lastDate: moment(new Date()).add(10, 'days'),
    createdDate: moment(new Date()).add(5, 'months'),
    amount: '5000 (avg)',
    last: '45433',
    type: 'Bill',
    subType: 'Elercity',
    repeat: 'Monthly',
    note: 'bill Note',
  },
  {
    id: 2,
    title: 'Car',
    dueDate: moment(new Date()).subtract(5, 'days'),
    lastDate: moment(new Date()).add(5, 'days'),
    startDate: moment(new Date()).add(5, 'months'),
    totalAmount: '800000',
    amount: '20000',
    type: 'Installment',
    note: 'Installment note',
  },
  {
    id: 3,
    title: 'Car loan',
    name: 'Ahmad',
    dueDate: moment(new Date()).subtract(20, 'days'),
    lastDate: moment(new Date()).add(10, 'days'),
    amount: '5000',
    type: 'Loan',
    subType: 'Giving',
    createDate: moment(new Date()).subtract(2, 'months'),
    note: 'Note data Note data Note data Note data Note data Note data ',
  },
  {
    id: 4,
    title: 'Home - Internet',
    dueDate: moment(new Date()).add(5, 'days'),
    lastDate: moment(new Date()).add(10, 'days'),
    createdDate: moment(new Date()).add(5, 'months'),
    amount: '2000 (avg)',
    last: '2000',
    type: 'Bill',
    subType: 'Internet',
    repeat: 'Monthly',
    note: 'bill Note',
  },
  {
    id: 5,
    title: 'Shop - Internet',
    dueDate: moment(new Date()).add(5, 'days'),
    lastDate: moment(new Date()).add(10, 'days'),
    createdDate: moment(new Date()).add(5, 'months'),
    amount: '2000 (avg)',
    last: '2000',
    type: 'Bill',
    subType: 'Internet',
    repeat: 'Monthly',
    note: 'bill Note',
  },
  {
    id: 6,
    title: 'iPhone 13 Pro Max',
    dueDate: moment(new Date()).subtract(5, 'days'),
    lastDate: moment(new Date()).add(5, 'days'),
    startDate: moment(new Date()).add(5, 'months'),
    totalAmount: '200000',
    amount: '20000',
    type: 'Installment',
    note: 'Installment note',
  },
  {
    id: 7,
    title: 'House loan',
    name: 'HBL',
    dueDate: moment(new Date()).subtract(20, 'days'),
    lastDate: moment(new Date()).add(10, 'days'),
    amount: '5000',
    type: 'Loan',
    subType: 'Taking',
    createDate: moment(new Date()).subtract(2, 'months'),
    note: 'Note data Note data Note data Note data Note data Note data ',
  },
  {
    id: 8,
    title: 'Birthday',
    dueDate: moment(new Date()).add(7, 'days'),
    type: 'Basic',
    note: 'birthday msg',
  },
];

function ReminderList({navigation}) {
  const [selected, setSelected] = useState('All');
  const [reminders, setReminders] = useState(data);
  let tempDue = 0;
  const handelDelete = reminder => {
    let res = reminders.filter(n => n.id !== reminder.id);
    setReminders(res);
  };
  const handelFilter = type => {
    setSelected(type);
    if (type !== 'All') {
      let res = data.filter(n => n.type === type);
      setReminders(res);
    } else {
      setReminders(data);
    }
  };

  const ViewDetails = item => {
    if (item.type.toString().toUpperCase() === 'BASIC') {
      navigation.navigate('ViewBasicReminder', {item: item});
    } else if (item.type.toString().toUpperCase() === 'INSTALLMENT') {
      navigation.navigate('ViewInstallment', {item: item});
    } else if (item.type.toString().toUpperCase() === 'LOAN') {
      navigation.navigate('ViewLoan', {item: item});
    } else if (item.type.toString().toUpperCase() === 'BILL') {
      navigation.navigate('ViewBill', {item: item});
    }
  };
  const getHeader = () => {
    return (
      <View>
        <Text style={styles.Heading}>Reminder</Text>
        <View style={{marginBottom: 10}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => handelFilter('All')}
              style={{marginHorizontal: 10}}>
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor:
                      selected === 'All'
                        ? theme.colors.secondary
                        : theme.colors.light,
                  },
                ]}>
                <Image
                  source={require('../components/assets/more.png')}
                  style={[
                    styles.icon,
                    {
                      tintColor: theme.colors.primary,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.type_text,
                    {
                      color:
                        selected === 'All'
                          ? theme.colors.font
                          : theme.colors.dark,
                    },
                  ]}>
                  All
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handelFilter('Bill')}
              style={{marginHorizontal: 10}}>
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor:
                      selected === 'Bill'
                        ? theme.colors.secondary
                        : theme.colors.light,
                  },
                ]}>
                <Image
                  source={require('../components/assets/invoice.png')}
                  style={[
                    styles.icon,
                    {
                      tintColor: '#17A589',
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.type_text,
                    {
                      color:
                        selected === 'Bill'
                          ? theme.colors.font
                          : theme.colors.dark,
                    },
                  ]}>
                  Bills
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handelFilter('Loan')}
              style={{marginHorizontal: 10}}>
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor:
                      selected === 'Loan'
                        ? theme.colors.secondary
                        : theme.colors.light,
                  },
                ]}>
                <Image
                  source={require('../components/assets/loan.png')}
                  style={[
                    styles.icon,
                    {
                      tintColor: '#9B59B6',
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.type_text,
                    {
                      color:
                        selected === 'Loan'
                          ? theme.colors.font
                          : theme.colors.dark,
                    },
                  ]}>
                  Loans
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handelFilter('Installment')}
              style={{marginHorizontal: 10}}>
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor:
                      selected === 'Installment'
                        ? theme.colors.secondary
                        : theme.colors.light,
                  },
                ]}>
                <Image
                  source={require('../components/assets/installment.png')}
                  style={[
                    styles.icon,
                    {
                      tintColor: '#2E86C1',
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.type_text,
                    {
                      color:
                        selected === 'Installment'
                          ? theme.colors.font
                          : theme.colors.dark,
                    },
                  ]}>
                  Installments
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handelFilter('Basic')}
              style={{marginHorizontal: 10}}>
              <View
                style={[
                  styles.type,
                  {
                    backgroundColor:
                      selected === 'Basic'
                        ? theme.colors.secondary
                        : theme.colors.light,
                  },
                ]}>
                <Image
                  source={require('../components/assets/reminder.png')}
                  style={[
                    styles.icon,
                    {
                      tintColor: '#6b6c93',
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.type_text,
                    {
                      color:
                        selected === 'Basic'
                          ? theme.colors.font
                          : theme.colors.dark,
                    },
                  ]}>
                  Basic
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  };

  function getDueReminders(item) {
    if (
      moment(new Date()).isBetween(moment(item.dueDate), moment(item.lastDate))
    ) {
      tempDue += 1;
    }
  }

  const getfooter = () => {
    return (
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{textAlign: 'center', color: theme.colors.secondary}}>
          Total {reminders.length} Reminders and {tempDue} Due Reminders
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      {getHeader()}
      {reminders.forEach(getDueReminders)}
      <FlatList
        data={reminders}
        keyExtractor={reminder => reminder.id.toString()}
        renderItem={({item}) => (
          <ReminderListItem
            title={item.title}
            price={item.amount}
            dueDate={item.dueDate}
            lastDate={item.lastDate}
            type={item.type}
            onDelete={() => handelDelete(item)}
            onPress={() => ViewDetails(item)}
          />
        )}
        ListFooterComponent={getfooter}></FlatList>
    </View>
  );
}

export default ReminderList;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    height: 40,
    color: theme.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  type: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.light,
    borderRadius: 10,
  },
  type_text: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    color: theme.colors.dark,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
});
