import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Screen from '../components/Screen';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {myTheme} from '../theme';

const theme = myTheme;
function ViewBill({navigation, route}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <Icon
            style={{marginHorizontal: 10}}
            name="delete"
            size={25}
            color={theme.colors.primary}
            onPress={() => alert('Bill Added')}
          />
        </>
      ),
    });
  }, [navigation]);

  const item = route.params.item;
  return (
    <Screen>
      <View
        style={{
          backgroundColor: theme.colors.light,
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: theme.colors.secondary,
          }}>
          Bill
        </Text>
        <Text style={{color: 'gray'}}>
          Due Date: {moment(item.date).format('MMM DD')} {' - '}
          {moment(item.lastDate).format('MMM DD')}
        </Text>
        <Text style={{color: 'gray'}}>Created on: Jan 1, 2021</Text>
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
            {item.title}
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
            Account (avg)
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            {item.price}
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
            Last Pay
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            {item.price}
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
            Repeat
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            {item.repeat}
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
            {item.subType}
          </Text>
        </View>

        <View>
          <Text style={{margin: 10, fontWeight: '500', fontSize: 18}}>
            Note
          </Text>
          <View
            style={{
              backgroundColor: theme.colors.light,
              borderRadius: 10,
              marginHorizontal: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: 16}}>{item.note}</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default ViewBill;
