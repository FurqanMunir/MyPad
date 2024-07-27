import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Screen from '../components/Screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {myTheme} from '../theme';

const theme = myTheme;
const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function ViewPassword({navigation, route}) {
  const item = route.params.item;
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
          <Icon
            style={{marginHorizontal: 10}}
            name="edit"
            size={25}
            color={theme.colors.primary}
            onPress={() => alert('Bill Added')}
          />
          <Icon2
            style={{marginHorizontal: 10}}
            name="content-copy"
            size={25}
            color={theme.colors.primary}
            onPress={() => alert('Bill Added')}
          />
        </>
      ),
    });
  }, [navigation]);
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
          Password
        </Text>
        <Text style={{color: 'gray'}}>
          Created on: {moment(item.date).format('MMM DD YYYY - hh:mm A')}
        </Text>
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
            {capitalize(item.title)}
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
            Email
          </Text>
          <Text
            onPress={() => alert('Copy Email')}
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            {item.email}
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
            Password
          </Text>
          <Text
            onPress={() => alert('Copy Password')}
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              color: 'gray',
              maxWidth: '80%',
            }}>
            {item.password}
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
            <Text onPress={() => alert('Copy Note')} style={{fontSize: 16}}>
              {item.note}
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default ViewPassword;
