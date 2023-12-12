/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import BaseView from '../../hoc/BaseView';
import {images} from '../../../constants/images';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/dimens';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import ClaimCoinItem from '../../items/ClaimCoinItem';
import PackageItem from '../../items/PackageItem';
import SearchView from '../../components/SearchView';
import { categoriesJson } from '../../../json/categoriesJson';
import CategoryItem from '../../items/CategoryItem';

const Categories = () => {

    const [search, setSearch] = useState('');

  const _renderPackage = ({item, index}: any) => {
    return <PackageItem item={item} index={index} onPress={() => {}} />;
  };

  const _renderCategory = ({item, index} : any) => {
    return (
        <CategoryItem item={item} onPress={() => {}}/>
    )
  }

  return (
    <BaseView
      hasHeader
      headerProps={{
        hasBack: true,
        hasSubscriptions: true,
      }}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.subscriptionText}>BUNDLE PRODUCTS</Text>
          <Text style={styles.headingText}>exclusive bundles</Text>
          <Text style={[styles.subscriptionText, {fontSize: 14}]}>
            We have carefully curated a few subscription packages for you.
          </Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={_renderPackage}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 16, paddingTop: 16}}
          />

          <Text style={[styles.subscriptionText, {marginTop: 32}]}>
            EXPLORE BY
          </Text>
          <Text style={styles.headingText}>categories</Text>
          <Text style={[styles.subscriptionText, {fontSize: 14}]}>
            Choose the category for which you want to purchase a subscription
          </Text>
          <SearchView
            placeholder="search by subscription -categories"
            value={search}
            onChangeText={text => setSearch(text)}
          />
          <FlatList
            data={categoriesJson}
            renderItem={_renderCategory}
            numColumns={3}
            style={{marginLeft: 16, marginTop: 16,}}
          />
        </ScrollView>
      </View>
    </BaseView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subscriptionText: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.medium,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 12,
  },
  headingText: {
    color: colors.light.textDefaultColor,
    fontFamily: fonts.semiBold,
    fontSize: 20,
    paddingHorizontal: 16,
  },
  spinBtn: {
    height: 64,
    width: '100%',
  },
});
