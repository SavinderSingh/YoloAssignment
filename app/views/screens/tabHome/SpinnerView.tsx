/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {dimens} from '../../../constants/dimens';
import ReelSet from './ReelSet';
import {images} from '../../../constants/images';
import {colors} from '../../../constants/colors';
import {showAlert} from '../../../utils/Messages';

const SpinnerView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.playContainer}>
        <ReelSet />
      </View>
      <TouchableOpacity
        style={{margin: 24}}
        onPress={() => showAlert('error', 'Not Works. Available soon')}>
        <Image
          source={images.spinBtn}
          style={styles.spinBtn}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SpinnerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 60,
    width: dimens.MAX_WIDTH,
  },
  playContainer: {
    height: 172,
    width: dimens.MAX_WIDTH,
    marginHorizontal: 48,
    borderWidth: 2,
    borderColor: colors.light.borderColor,
    backgroundColor: '#00000080',
    paddingLeft: 32,
    paddingTop: 12,
    marginTop: 16,
  },
  spinBtn: {
    height: 64,
    width: '100%',
  },
});
