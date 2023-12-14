import * as React from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Overlay} from '@rneui/themed';
import { colors } from '../../constants/colors';
interface LoaderProps {
  isVisible: boolean;
  hasLoaderMessage?: boolean;
  loaderMessage?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <Overlay
      isVisible={props.isVisible}
      overlayStyle={styles.overlayStyle}
      backdropStyle={styles.backdropStyle}>
      <ActivityIndicator size="large" color={colors.light.primary} />
      {props.hasLoaderMessage && (
        <Text style={styles.message}>{props.loaderMessage}</Text>
      )}
    </Overlay>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: '#0000',
    elevation: 0,
  },
  backdropStyle: {
    backgroundColor: '#00000080',
  },
  message: {},
});
