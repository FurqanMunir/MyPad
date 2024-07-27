import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SlidableDrawer from 'react-native-slidable-drawer-panel';

function renderContent() {
  return (
    <View style={{height: 100, backgroundColor: 'yellow'}}>
      <Text>Get directions to your location</Text>
    </View>
  );
}

function renderContent2() {
  return (
    <View style={{height: 100, backgroundColor: 'blue'}}>
      <Text>Hello</Text>
    </View>
  );
}

function kuchBhe(props) {
  const TAB_BAR_HEIGHT = 49;
  const [showDrawer, setShowDrawer] = useState(false);
  const [event, setEvent] = useState('none');
  return (
    <SafeAreaView>
      <Button title="Show Drawer" onPress={showDrawerFn} />
      {showDrawer && (
        <SlidableDrawer
          onSlideEnd={onSlideEnd}
          drawerOpenSpeed={3}
          event={event}>
          <Button title="Close drawer" onPress={closeDrawer} />
        </SlidableDrawer>
      )}
      <View style={{height: 200, backgroundColor: 'blue'}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
export default kuchBhe;
