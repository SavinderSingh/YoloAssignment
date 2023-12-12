/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/dimens';
import {images} from '../../constants/images';

interface PackageItemProps {
  item: object;
  index: number;
  onPress: () => void;
}

const PackageItem = (props: PackageItemProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image source={images.claimSample} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default PackageItem;

const styles = StyleSheet.create({
  container: {
    height: 196,
    width: SCREEN_WIDTH / 1.2,
    marginRight: 24,
  },
  image: {
    height: 196,
    width: SCREEN_WIDTH / 1.2,
    borderRadius: 12,
  },
});
