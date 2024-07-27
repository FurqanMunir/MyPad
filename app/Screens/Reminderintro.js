import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageIconlist from '../components/ImageIconList';
import Screen from '../components/Screen';
import {myTheme} from '../theme';

const theme = myTheme;
function Reminderintro({navigation}) {
  return (
    <Screen style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-ios"
          color={theme.colors.primary}
          size={24}
          style={{marginLeft: 10, marginTop: 10}}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center', width: '100%'}}>
        <Text style={styles.Heading}>Select Reminder Type</Text>
        {/* <Text style={styles.subHeading}>
          Please select reminder according to reminder type (e.g. For a bill
          select Bill, from bill you can select bill type gas, elercity,
          internet etc)
        </Text> */}
      </View>
      <View>
        <ImageIconlist
          title="Bill"
          onPress={() => navigation.navigate('BillReminder')}
          bg={'#00a86b'}
          icon={require('../components/assets/invoice.png')}
        />
        <ImageIconlist
          title="Loan"
          bg={'#cd6090'}
          onPress={() => navigation.navigate('LoanReminder')}
          icon={require('../components/assets/expenses.png')}
        />
        <ImageIconlist
          title="Installment"
          bg={'#36677a'}
          onPress={() => navigation.navigate('InstallmentReminder')}
          icon={require('../components/assets/calendar.png')}
        />
        <ImageIconlist
          title="Reminder"
          bg={'#6b6c93'}
          onPress={() => navigation.navigate('BasicReminder')}
          icon={require('../components/assets/reminder.png')}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  subHeading: {
    color: theme.colors.secondary,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  container: {
    //padding: 10,
  },
});
export default Reminderintro;
