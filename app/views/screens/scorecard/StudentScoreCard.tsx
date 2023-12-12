/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import BaseView from '../../hoc/BaseView';
import StudentItem from '../../items/StudentItem';
import {fonts} from '../../../constants/fonts';
import {colors} from '../../../constants/colors';
import {Slider} from '@rneui/base';
import ButtonView from '../../components/ButtonView';
import {updateStudentScore} from '../../../redux/slices/homeSlice';
import {useNavigation} from '@react-navigation/native';

const StudentScoreCard = props => {
  const {item} = props.route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [marks, setMarks] = useState(item?.marks || 0);

  const _onSave = () => {
    dispatch(updateStudentScore({id: item?.id, marks: marks}));
    navigation.goBack();
  };

  return (
    <BaseView
      hasHeader
      headerProps={{
        hasBack: true,
        hasTitle: true,
        title: 'Scorecard',
      }}>
      <View style={styles.container}>
        <View style={styles.view}>
          <StudentItem item={item} disabled style={{padding: 0}} />
          <View style={styles.viewInner}>
            <Text style={styles.score}>Score: {marks}%</Text>
            <Slider
              value={marks}
              onValueChange={setMarks}
              maximumValue={100}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{
                height: 4,
                backgroundColor: '#0000',
              }}
              thumbStyle={{
                height: 16,
                width: 16,
                backgroundColor: colors.light.sliderThumb,
              }}
              minimumTrackTintColor={colors.light.sliderThumb}
            />
            <View style={styles.row}>
              <Text style={styles.score}>Result:</Text>
              <Text style={styles.result}>{marks >= 40 ? 'Pass' : 'Fail'}</Text>
            </View>
          </View>
        </View>

        {marks !== item?.marks && (
          <ButtonView title="Save" onPress={() => _onSave()} />
        )}
      </View>
    </BaseView>
  );
};

export default StudentScoreCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
  },
  view: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    paddingTop: 16,
  },
  viewInner: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  score: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.light.textDefaultColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  result: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.light.textDefaultColor,
  },
});
