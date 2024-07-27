import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {RichToolbar} from 'react-native-pell-rich-editor';
import colors from '../colors';
import Screen from '../components/Screen';
import {theme} from '../theme';
function AddNote({navigation}) {
  const richText = useRef();

  return (
    <Screen>
      <RichToolbar
        editor={richText}
        ref={r => (this.richtext = r)}
        initialContentHTML={
          'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
  },
});

export default AddNote;
