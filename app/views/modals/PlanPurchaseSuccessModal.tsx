/* eslint-disable react-native/no-inline-styles */
import {Overlay} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ButtonView from '../components/ButtonView';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {SCREEN_WIDTH} from '../../constants/dimens';

interface PlanPurchaseSuccessModalProps {
  isVisible: boolean;
  data: object;
  subscription: object;
  onClose: () => void;
}

const PlanPurchaseSuccessModal = (props: PlanPurchaseSuccessModalProps) => {
  const {isVisible, data, subscription, onClose} = props;
  return (
    <Overlay overlayStyle={{backgroundColor: '#0000'}} isVisible={isVisible}>
      <View style={styles.container}>
        <Image source={data?.image} style={styles.image} />
        <Text style={styles.platformName}>{data?.name}</Text>
        <Text style={styles.description}>
          You have successfully purchased {subscription?.title} plan.
        </Text>
        <ButtonView title="close" onPress={onClose} />
      </View>
    </Overlay>
  );
};

export default PlanPurchaseSuccessModal;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.light.primary,
    borderRadius: 16,
    alignItems: 'center',
    width: SCREEN_WIDTH - 32,
  },
  image: {
    height: 64,
    width: 64,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
    borderRadius: 4,
  },
  platformName: {
    color: colors.light.accent,
    fontFamily: fonts.semiBold,
    fontSize: 18,
    paddingBottom: 24,
  },
  description: {
    color: colors.light.accent,
    fontFamily: fonts.medium,
    fontSize: 12,
    paddingBottom: 12,
  },
});
