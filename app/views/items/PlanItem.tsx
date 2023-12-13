/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {colors} from '../../constants/colors';
import {RUPEES_SIGN} from '../../constants/appConstants';
import {fonts} from '../../constants/fonts';
import Collapsible from 'react-native-collapsible';

interface PlanItemProps {
  item: object;
  isSelected: boolean;
  onPress: () => void;
}

const PlanItem = (props: PlanItemProps) => {
  const {item, isSelected, onPress} = props;

  const tintColor = isSelected
    ? colors.light.primary
    : colors.light.borderColor;

  const _renderItem = ({item}: any) => {
    return (
      <View style={[styles.row, {paddingTop: 8}]}>
        <Icon name="check" type="entypo" color={colors.light.check} size={16} />
        <Text style={styles.detailText}>{item}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={[styles.container, {borderColor: tintColor}]}>
        <View style={styles.row}>
          <Icon
            name={isSelected ? 'radio-button-on' : 'radio-button-off'}
            type="material"
            color={colors.light.primary}
          />
          <View style={{flex: 1, paddingLeft: 16}}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.validity}>validity: {item?.duration}</Text>
          </View>
          <Text style={styles.title}>
            {RUPEES_SIGN} {item?.price}.00
          </Text>
        </View>
        <Collapsible collapsed={!isSelected}>
          <View>
            <View style={styles.divider} />
            <FlatList data={item?.details} renderItem={_renderItem} />
          </View>
        </Collapsible>
      </View>
    </TouchableOpacity>
  );
};

export default PlanItem;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  container: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.light.textDefaultColor,
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  validity: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.regular,
    paddingTop: 4,
    fontSize: 12,
  },
  divider: {
    marginVertical: 16,
    height: 1,
    backgroundColor: colors.light.borderColor,
  },
  detailText: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.medium,
    fontSize: 12,
    paddingLeft: 12,
  },
});
