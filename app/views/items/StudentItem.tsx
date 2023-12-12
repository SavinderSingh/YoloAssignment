import {Avatar} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';
import ProgressCircle from '../../utils/ProgressCircle';
import {fonts} from '../../constants/fonts';

interface StudentItemProps {
  item: object;
  onPress?: () => void;
  disabled?: boolean;
  hasPercentageView?: boolean;
  style?: object;
}

const StudentItem = (props: StudentItemProps) => {
  const {item, onPress, hasPercentageView, disabled} = props;

  let circleColor = colors.light.percentBelow40;
  if (item?.marks < 40) {
    circleColor = colors.light.percentBelow40;
  } else if (item?.marks >= 40 && item?.marks <= 80) {
    circleColor = colors.light.percent40_80;
  } else if (item?.marks > 80) {
    circleColor = colors.light.percentAbove80;
  }

  const avatarBgColor =
    item?.subject === 'Science' ? colors.light.science : colors.light.commerce;

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}>
      <View style={[styles.container, props.style]}>
        <View style={[styles.avatarView, {backgroundColor: avatarBgColor}]}>
          <Text style={styles.avatarText}>{item?.name[0]}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.studentName}>{item?.name}</Text>
          <Text style={styles.subjectName}>{item?.subject}</Text>
        </View>
        {hasPercentageView && (
          <ProgressCircle
            percent={item?.marks}
            radius={28}
            borderWidth={6}
            color={circleColor}
            shadowColor="#F0F0F0"
            bgColor="#fff">
            <Text style={styles.percentage}>{item?.marks}%</Text>
          </ProgressCircle>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default StudentItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
  },
  avatarView: {
    height: 56,
    width: 56,
    borderRadius: 32,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: fonts.bold,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  studentName: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.light.textDefaultColor,
  },
  subjectName: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.light.placeholderColor,
  },
  percentage: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.light.textDefaultColor,
  },
});
