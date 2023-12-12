import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {fonts} from '../../../constants/fonts';
import BaseView from '../../hoc/BaseView';
import {getSalutation} from '../../../utils/DateFormats';
import HomeAverageScoreCard from './HomeAverageScoreCard';
import {colors} from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getStudentsListSelectors} from '../../../redux/selectors';
import StudentItem from '../../items/StudentItem';
import {setStudentsList} from '../../../redux/slices/homeSlice';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../../navigator/Screens';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const studentsList = useSelector(getStudentsListSelectors);

  useEffect(() => {
    _init();
  }, []);

  const _init = () => {
    dispatch(setStudentsList(studentsListJson));
  };

  const _renderItem = ({item}: any) => {
    return (
      <StudentItem
        item={item}
        onPress={() => _onStudentItemPress(item)}
        hasPercentageView
      />
    );
  };

  const _onStudentItemPress = (item: object) => {
    console.log('[Home.tsx] onStudentItemPress', item);
    navigation.navigate(Screens.StudentScoreCard, {item: item});
  };

  return (
    <BaseView>
      <View style={styles.container}>
        <Text style={styles.salutation}>{getSalutation()}</Text>
        <HomeAverageScoreCard />

        <FlatList
          data={studentsList}
          renderItem={_renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </BaseView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  salutation: {
    fontSize: 20,
    fontFamily: fonts.bold,
    paddingHorizontal: 16,
    color: colors.light.textDefaultColor,
  },
});

const studentsListJson = [
  {
    id: 1,
    name: 'Sunny',
    subject: 'Science',
    marks: 30,
    totalMarks: 100,
  },
  {
    id: 2,
    name: 'Astor',
    subject: 'Commerce',
    marks: 45,
    totalMarks: 100,
  },
  {
    id: 3,
    name: 'Peter',
    subject: 'Science',
    marks: 80,
    totalMarks: 100,
  },
  {
    id: 4,
    name: 'Tony',
    subject: 'Commerce',
    marks: 81,
    totalMarks: 100,
  },
  {
    id: 5,
    name: 'Roman',
    subject: 'Science',
    marks: 90,
    totalMarks: 100,
  },
  {
    id: 6,
    name: 'Willian',
    subject: 'Science',
    marks: 40,
    totalMarks: 100,
  },
  {
    id: 7,
    name: 'Becham',
    subject: 'Commerce',
    marks: 25,
    totalMarks: 100,
  },
  {
    id: 8,
    name: 'Seth',
    subject: 'Commerce',
    marks: 56,
    totalMarks: 100,
  },
  {
    id: 9,
    name: 'Rami',
    subject: 'Commerce',
    marks: 64,
    totalMarks: 100,
  },
  {
    id: 39,
    name: 'John Doe',
    subject: 'Science',
    marks: 30,
    totalMarks: 100,
  },
];
