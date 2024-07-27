import React, {useState} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import NoteListItem from '../components/NoteListItem';
import Screen from '../components/Screen';
import moment from 'moment';
import {myTheme} from '../theme';

const theme = myTheme;
const n = [
  {
    id: 1,
    heading: 'T1',
    text: 'text text text text text text text text text text text text text text text text text text ',
    date: moment(new Date()),
  },
  {
    id: 2,
    heading: 'T2',
    text: 'text text text text text text text text text text text text text text text text text text ',
    date: moment(new Date()).subtract(10, 'days'),
  },
  {
    id: 3,
    heading: 'T3',
    text: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text t',
    date: moment(new Date()).subtract(5, 'days'),
  },
  {
    id: 4,
    heading: 'T4',
    text: 'text text text text text text text text text text text text text text text text text text ',
    date: moment(new Date()).subtract(10, 'days'),
  },
  {
    id: 5,
    heading: 'T5',
    text: 'text text text text text text text text text text text text text text text text text text ',
    date: moment(new Date()).subtract(7, 'days'),
  },
];
const getHeader = () => {
  return <Text style={styles.Heading}>Personal Notes</Text>;
};

function NotesList({navigation}) {
  const [notes, setNotes] = useState(n);
  const handelDelete = note => {
    let res = notes.filter(n => n.id !== note.id);
    setNotes(res);
  };
  return (
    <Screen style={{flex: 1, backgroundColor: theme.colors.background}}>
      <FlatList
        data={notes}
        keyExtractor={note => note.id.toString()}
        renderItem={({item}) => (
          <NoteListItem
            heading={item.heading}
            text={item.text}
            date={item.date}
            onDelete={() => handelDelete(item)}
            onPress={() => alert(item.id + ' Selected')}
          />
        )}
        ListHeaderComponent={getHeader}></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default NotesList;
