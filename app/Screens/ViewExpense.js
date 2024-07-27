import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import colors from '../colors';
import Screen from '../components/Screen';
import {myTheme} from '../theme';

const theme = myTheme;
function ViewExpense(props) {
  return (
    <Screen>
      <View
        style={{
          backgroundColor: colors.light,
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', color: colors.secondary}}>
          Expense
        </Text>
        <Text style={{color: 'gray'}}>Jan 1, 2021 4:40PM</Text>
      </View>

      <Text style={{margin: 10, fontWeight: '500', fontSize: 18}}>Details</Text>
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            flexDirection: 'row',
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              flex: 1,
              marginBottom: 10,
            }}>
            Title
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            Lunch with friends
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            flexDirection: 'row',
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              flex: 1,
              marginBottom: 10,
            }}>
            Amount
          </Text>
          <Text
            onPress={() => alert('Copy Email')}
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            1000
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            flexDirection: 'row',
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              flex: 1,
              marginBottom: 10,
            }}>
            Location
          </Text>
          <Text
            onPress={() => alert('Copy Password')}
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            KFC Johar Town, Lahore
          </Text>
        </View>

        <View>
          <Text style={{margin: 10, fontWeight: '500', fontSize: 18}}>
            Note
          </Text>
          <View
            style={{
              backgroundColor: colors.light,
              borderRadius: 10,
              marginHorizontal: 10,
              padding: 10,
            }}>
            <Text onPress={() => alert('Copy Note')} style={{fontSize: 16}}>
              You need to collect past due payments, but clients don’t answer
              your phone calls or emails. Whether they’re tied up at work, in a
              place where they can’t answer the phone, or just plain don’t want
              to deal with checking their email for bills, clients aren’t seeing
              your payment reminders.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default ViewExpense;
