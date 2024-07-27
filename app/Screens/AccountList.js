import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import colors from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountListItem from '../components/AccountListItem';
import {myTheme} from '../theme';

const theme = myTheme;
const n = [
  {
    id: 3,
    price: '356500',
    title:
      'text text text text text text text text text text text text text text text text text text ',
    date: new Date(),
    loc: 'Model Town',
    type: 'expense',
    note: 'Note Note Note Note Note Note ',
  },
  {
    id: 4,
    price: '3565',
    title: 'text text text text text text text text text',
    date: new Date().setDate(1),
    lastDate: new Date().setDate(10),
    repeat: 'After 2 Months',
    type: 'bill',
    subType: 'Internet',
    note: 'Note Note Note Note Note Note',
  },
  {
    id: 5,
    price: '3432',
    title:
      'text text text text text text text text text text text text text text text text text text ',
    date: new Date(),
    loc: 'Johar Town',
    type: 'expense',
    note: 'Note Note Note Note Note Note ',
  },
  {
    id: 6,
    price: '6765',
    title: 'text text text text text text text text text text',
    date: new Date(),
    repeat: 'After 2 Months',
    type: 'bill',
    subType: 'Internet',
    note: 'Note Note Note Note Note Note ',
  },
];

const getHeader = () => {
  return (
    <View>
      <Text style={styles.Heading}>Account & Expenses</Text>
      <View style={styles.accountW}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="calendar-month" size={18} color={theme.colors.white} />
          <Text style={{color: theme.colors.white, marginHorizontal: 5}}>
            Date Range Dec 01 - Dec 30
          </Text>
        </View>
        <Text style={styles.balance}>Rs. 1000340</Text>
      </View>
    </View>
  );
};

function AccountList({navigation}) {
  const [accounts, setAccount] = useState(n);
  const handelDelete = account => {
    let res = accounts.filter(n => n.id !== account.id);
    setAccount(res);
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <FlatList
        data={accounts}
        keyExtractor={account => account.id.toString()}
        renderItem={({item}) => (
          <AccountListItem
            title={item.title}
            price={item.price}
            date={item.date}
            loc={item.loc}
            type={item.type}
            onDelete={() => handelDelete(item)}
            onPress={() => navigation.navigate('ViewReceipt', {item: item})}
          />
        )}
        ListHeaderComponent={getHeader}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  accountW: {
    backgroundColor: theme.colors.secondary,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  balance: {color: theme.colors.white, fontSize: 40, fontWeight: '500'},
});

export default AccountList;
