import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import colors from '../colors';
import Screen from '../components/Screen';
import {myTheme} from '../theme';

const theme = myTheme;
function ViewLoan(props) {
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
          Loan
        </Text>
        <Text style={{color: 'gray'}}>Due Date: Dec 20 2022 - Dec 30 2022</Text>
        <Text style={{color: 'gray'}}>Created: Jan 1, 2021</Text>
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
            Loan for Watch
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
            Name
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            Ahmad
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
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            20,0000
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
            Type
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            Give
          </Text>
        </View>

        <View>
          <Text style={{margin: 10, fontWeight: '500', fontSize: 18}}>
            Description
          </Text>
          <View
            style={{
              backgroundColor: colors.light,
              borderRadius: 10,
              marginHorizontal: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: 16}}>
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

export default ViewLoan;
