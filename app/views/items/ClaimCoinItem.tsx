/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {colors} from '../../constants/colors';
import {SCREEN_WIDTH} from '../../constants/dimens';
import {images} from '../../constants/images';
import {fonts} from '../../constants/fonts';
import ButtonView from '../components/ButtonView';

interface ClaimCoinItemProps {
  item: object;
  index: number;
  onClaim: () => void;
}

const ClaimCoinItem = (props: ClaimCoinItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={images.claimSample} style={styles.image} />
      <View style={[styles.row, {paddingTop: 12}]}>
        <View style={{flex: 1}}>
          <Text style={styles.coinsRequiredText}>coins required</Text>
          <View style={styles.row}>
            <Image source={images.yLogo} style={styles.yLogo} />
            <Text style={styles.coinsText}> 1000 coins for ticket</Text>
          </View>
        </View>
        <ButtonView title="claim" onPress={props.onClaim} />
      </View>
    </View>
  );
};

export default ClaimCoinItem;

const styles = StyleSheet.create({
  container: {
    height: 320,
    borderWidth: 0.7,
    borderColor: colors.light.borderColor,
    width: SCREEN_WIDTH / 1.5,
    marginRight: 24,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  image: {
    height: 240,
    width: SCREEN_WIDTH / 1.5 - 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yLogo: {
    height: 24,
    width: 24,
  },
  coinsRequiredText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.light.lightTextColor,
  },
  coinsText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.light.textDefaultColor,
  },
});
