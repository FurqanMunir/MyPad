import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, Pressable} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import Button from './Button';
import Screen from './Screen';

const _renderItem = item => {
  return (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {/* <Image style={styles.icon} source={require('./assets/tick.png')} /> */}
    </View>
  );
};

function Test() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Screen style={styles.container}>
      <Text>Test Screen</Text>
      <Modal
        //style={{width: '100%', backgroundColor: colors.danger}}
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          alert('Hide');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Due Date</Text>
            <View style={{flexDirection: 'row', height: 50}}>
              <View
                style={{
                  flexDirection: 'column',
                  flex: 1,
                  backgroundColor: colors.black,
                }}>
                <Dropdown
                  style={styles.dropdown}
                  containerStyle={styles.shadow}
                  data={day}
                  placeholderStyle={styles.placeholder}
                  labelField="label"
                  valueField="value"
                  label="Dropdown"
                  placeholder="Select Day"
                  renderItem={item => _renderItem(item)}
                  textError="Error"
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  flex: 1,
                  backgroundColor: colors.danger,
                }}></View>
            </View>

            <Button
              title="Save"
              onPress={() => setModalVisible(!modalVisible)}></Button>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    //    width: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  modalView: {
    margin: 20,
    width: '100%',
    height: '100%',
    backgroundColor: colors.light,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: colors.dark,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  dropdown: {
    backgroundColor: colors.light,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
    width: 18,
    tintColor: colors.dark,
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
    backgroundColor: colors.light,
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

export default Test;
