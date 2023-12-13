/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RUPEES_SIGN} from '../../constants/appConstants';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

interface PlatformItemProps {
  item: object;
  onPress: () => void;
}

const PlatformItem = (props: PlatformItemProps) => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={item?.image} style={styles.image} />
        <View style={{paddingLeft: 16}}>
          <Text style={styles.name}>{item?.name}</Text>
          {item?.status === '' && (
            <Text style={styles.name}>
              plan starts from {RUPEES_SIGN} {item?.starting_price}
            </Text>
          )}
          {item?.status === 'active' && (
            <Text style={styles.plan}>plan expires on {item?.expiry_date}</Text>
          )}
          {item?.status === 'expired' && (
            <Text style={styles.plan}>plan expired on {item?.expiry_date}</Text>
          )}
          {item?.status === '' || item?.status === 'active' ? (
            <TouchableOpacity style={styles.viewDetails} onPress={onPress}>
              <Text style={styles.viewDetailsText}>view details</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.viewDetails, {width: 92}]}
              onPress={onPress}>
              <Text style={[styles.viewDetailsText]}>renew again</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlatformItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.light.borderColor,
  },
  image: {
    height: 64,
    width: 64,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
  },
  viewDetailsText: {
    color: colors.light.primary,
    fontFamily: fonts.medium,
  },
  viewDetails: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light.primary,
    width: 84,
  },
  name: {
    color: colors.light.accent,
    fontFamily: fonts.medium,
  },
  plan: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.medium,
  },
});
