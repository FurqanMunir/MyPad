import React, {useState, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';

import TextInput from '../components/TextInput';
import Screen from '../components/Screen';
import {myTheme} from '../theme';

const theme = myTheme;
const data = [
  {label: 'Home - elercity', value: '1'},
  {label: 'Home - gas', value: '2'},
  {label: 'Shop - elercity', value: '3'},
  {label: 'Shop - ptcl', value: '4'},
];

const validationSchema = Yup.object().shape({
  price: Yup.string().required().label('Price'),
  note: Yup.string().min(3).label('Note'),
});

function AddBill({navigation}) {
  const [dropdown, setDropdown] = useState(null);

  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
      </View>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="done"
          size={25}
          color={theme.colors.primary}
          onPress={() => alert('Password Save')}
        />
      ),
    });
  }, [navigation]);
  return (
    <Screen style={styles.container}>
      <Text style={styles.Heading}>Add Bill Payment info.</Text>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.shadow}
        data={data}
        search
        searchPlaceholder="Search"
        labelField="label"
        valueField="value"
        maxHeight={250}
        label="Dropdown"
        placeholder="Select item"
        value={dropdown}
        onChange={item => {
          setDropdown(item.value);
          console.log('selected', item);
        }}
        renderLeftIcon={() => (
          <Image
            style={styles.icon}
            source={require('../components/assets/invoice.png')}
          />
        )}
        renderItem={item => _renderItem(item)}
        textError="Error"
      />

      <Formik
        initialValues={{
          price: '',
          note: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <TextInput
              icon="cash"
              placeholder="Price"
              autoCapitalize="none"
              keyboardType="numeric"
              backgroundColor={theme.colors.light}
              onChangeText={handleChange('price')}
              onBlur={() => setFieldTouched('price')}
              iconColor={
                errors.price && touched.price
                  ? theme.colors.danger
                  : theme.colors.secondary
              }
            />

            <View style={styles.error}>
              {touched.price && errors.price && (
                <Text style={{color: theme.colors.danger}}>
                  {' '}
                  {errors.price}
                </Text>
              )}
            </View>

            <TextInput
              icon="note"
              placeholder="Note"
              autoCapitalize="none"
              multiline
              height={200}
              style={{
                width: '90%',
                alignSelf: 'flex-start',
                paddingRight: 10,
                height: '100%',
              }}
              backgroundColor={theme.colors.light}
              onChangeText={handleChange('note')}
              onBlur={() => setFieldTouched('note')}
              iconColor={theme.colors.secondary}
              autoCorrect={false}
            />
          </>
        )}
      </Formik>
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
  container: {
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: theme.colors.light,
    marginTop: 20,
    marginBottom: 10,
    width: (Dimensions.get('window').width / 100) * 90,
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
    width: 18,
    tintColor: theme.colors.dark,
    height: 18,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: theme.colors.light,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});

export default AddBill;
