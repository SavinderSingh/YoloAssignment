import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import BaseView from '../../hoc/BaseView';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import {mySubscriptionsJson} from '../../../json/categoriesJson';
import PlatformItem from '../../items/PlatformItem';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../../navigator/Screens';

const MySubscriptions = () => {
  const navigation = useNavigation();

  const [platforms, setPlatforms] = useState(mySubscriptionsJson);

  const _renderPlatform = ({item, index}: any) => {
    return (
      <PlatformItem
        item={item}
        index={index}
        onPress={() => _onPlatformPress(item)}
      />
    );
  };

  const _onPlatformPress = (item: object) =>
    navigation.navigate(Screens.PlatformDetail, {
      platform: item,
    });

  return (
    <BaseView
      hasHeader
      headerProps={{
        hasBack: true,
      }}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.subHeading}>Active subscriptions</Text>
          <FlatList
            data={platforms.filter(it => it.status === 'active')}
            renderItem={_renderPlatform}
          />
          <Text style={styles.subHeading}>Expired subscriptions</Text>
          <FlatList
            data={platforms.filter(it => it.status === 'expired')}
            renderItem={_renderPlatform}
          />
        </ScrollView>
      </View>
    </BaseView>
  );
};

export default MySubscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeading: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.medium,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
