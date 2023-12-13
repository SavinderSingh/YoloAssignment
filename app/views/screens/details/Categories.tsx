/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import BaseView from '../../hoc/BaseView';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import PackageItem from '../../items/PackageItem';
import SearchView from '../../components/SearchView';
import {categoriesJson} from '../../../json/categoriesJson';
import CategoryItem from '../../items/CategoryItem';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../../navigator/Screens';

const Categories = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const [categories, setCategories] = useState(categoriesJson);

  const _renderPackage = ({item, index}: any) => {
    return <PackageItem item={item} index={index} onPress={() => {}} />;
  };

  const _renderCategory = ({item}: any) => {
    return <CategoryItem item={item} onPress={() => _onCategoryPress(item)} />;
  };

  const _onCategoryPress = (item: object) =>
    navigation.navigate(Screens.Platforms, {category: item});

  const _onSearchCategory = (text: string) => {
    setSearch(text);
    if (text) {
      const newData = categoriesJson.filter(function (item) {
        const itemData = item?.name
          ? item?.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setCategories(newData);
    } else {
      setCategories(categoriesJson);
    }
  };

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
            onChangeText={text => _onSearchCategory(text)}
          />
          {categories.length > 0 ? (
            <FlatList
              data={categories}
              renderItem={_renderCategory}
              numColumns={3}
              style={{marginLeft: 16, marginTop: 16}}
            />
          ) : (
            <Text style={styles.noData}>No Categories found.</Text>
          )}
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
  noData: {
    fontFamily: fonts.medium,
    color: colors.light.lightTextColor,
    textAlign: 'center',
    padding: 64,
  },
});
