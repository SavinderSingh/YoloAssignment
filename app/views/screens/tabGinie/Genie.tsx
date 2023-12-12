import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface GenieProps {}

const Genie = (props: GenieProps) => {
  return (
    <View style={styles.container}>
      <Text>Genie</Text>
    </View>
  );
};

export default Genie;

const styles = StyleSheet.create({
  container: {}
});
