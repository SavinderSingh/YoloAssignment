import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProgressCircle from '../../../utils/ProgressCircle';
import {fonts} from '../../../constants/fonts';
import {colors} from '../../../constants/colors';
import {useSelector} from 'react-redux';
import {getStudentsListSelectors} from '../../../redux/selectors';

const HomeAverageScoreCard = () => {
  const studentsList = useSelector(getStudentsListSelectors);
  let marks = 0;

  studentsList?.forEach(it => {
    marks += it?.marks;
  });

  const averageMarks = marks / studentsList.length;
  const passedStudentsLength = studentsList.filter(
    it => it?.marks >= 40,
  ).length;
  let circleColor = colors.light.percentBelow40;
  let average = 'Poor';
  if (averageMarks <= 40) {
    circleColor = colors.light.percentBelow40;
    average = 'Poor';
  } else if (averageMarks > 40 && averageMarks < 80) {
    circleColor = colors.light.percent40_80;
    average = 'Good';
  } else if (averageMarks > 80) {
    circleColor = colors.light.percentAbove80;
    average = 'Excellent';
  }

  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={averageMarks}
        radius={56}
        borderWidth={12}
        color={circleColor}
        shadowColor="#F0F0F0"
        bgColor="#fff">
        <Text style={styles.percentage}>{averageMarks}%</Text>
      </ProgressCircle>
      <View style={styles.view}>
        <Text style={styles.average}>Average Scorecard {average}!</Text>
        <Text style={styles.text}>
          {passedStudentsLength} out of {studentsList.length} students passed!
        </Text>
      </View>
    </View>
  );
};

export default HomeAverageScoreCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentage: {
    fontSize: 20,
    fontFamily: fonts.extraBold,
    color: colors.light.textDefaultColor,
  },
  view: {
    flex: 1,
    paddingLeft: 16,
    marginHorizontal: 24,
  },
  average: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.light.textDefaultColor,
    lineHeight: 24,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.light.placeholderColor,
    lineHeight: 20,
    marginTop: 8,
  },
});
