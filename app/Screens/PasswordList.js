import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PasswordListItem from '../components/PasswordListItem';
import {myTheme} from '../theme';

const theme = myTheme;
const data = [
  {
    id: 1,
    title: 'Facebook',
    email: 'arslan@email.com',
    password: '12345678',
    date: new Date().setDate(10),
    note: 'Hello Backup pass',
  },
  {
    id: 2,
    title: 'Instagram',
    email: 'arslan@email.com',
    password: '12345678',
    date: new Date(),
  },
  {
    id: 3,
    title: 'Google',
    email: 'arslan@email.com',
    password: '12345678',
    date: new Date(),
  },
  {
    id: 4,
    title: 'email',
    email: 'arslan@email.com',
    password: '12345678',
    date: new Date(),
  },
  {
    id: 5,
    title: 'Linkedin',
    email: 'arslan@email.com',
    password: '12345678',
    date: new Date(),
  },
  {
    id: 6,
    title: 'Pinterest',
    email: 'arslan@email.com',
    password: '12345678',
    date: new Date(),
  },
];

const getHeader = () => {
  return <Text style={styles.Heading}>Passwords</Text>;
};

function PasswordList({navigation}) {
  const [passwords, setPassword] = useState(data);
  const handelDelete = password => {
    let res = passwords.filter(n => n.id !== password.id);
    setPassword(res);
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <FlatList
        data={passwords}
        keyExtractor={password => password.id.toString()}
        renderItem={({item}) => (
          <PasswordListItem
            title={item.title}
            email={item.email}
            password={item.password}
            onDelete={() => handelDelete(item)}
            onPress={() => navigation.navigate('ViewPassword', {item: item})}
          />
        )}
        ListHeaderComponent={getHeader}></FlatList>
    </View>
  );
}

export default PasswordList;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
