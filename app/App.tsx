import React, {useEffect} from 'react';
import {Text, StyleSheet, LogBox} from 'react-native';
import Routes from './navigator/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux/configStore';

const App = () => {
  useEffect(() => {
    _init();
    // props.start();
    return () => {};
  }, []);

  const _init = () => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested',
      'Non-serializable values were found in the navigation state',
    ]);
  };
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Routes />
        {/* <Toast refs={ref => Toast.setRef(ref)} config={toastConfig} /> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
