/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BaseView from '../../hoc/BaseView';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import SearchView from '../../components/SearchView';
import {categoriesJson} from '../../../json/categoriesJson';
import PlatformItem from '../../items/PlatformItem';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../../navigator/Screens';

const Platforms = (props: {route: {params: {category: any}}}) => {
  const {category} = props.route.params;

  const navigation = useNavigation();

  const categoryFlatListRef = useRef(null);

  const [search, setSearch] = useState('');
  const [platforms, setPlatforms] = useState(category?.platforms || []);
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    if (categoryFlatListRef.current) {
      setTimeout(() => {
        const index = categoriesJson.findIndex(it => it?.id === category?.id);
        console.log('[Platform.tsx] useEffect: ', index);
        categoryFlatListRef.current.scrollToIndex({index: index});
      }, 300);
    }
    return () => {};
  }, [])

  const _renderCategory = ({item}: any) => {
    const isSelected =
      selectedCategory !== null ? selectedCategory?.id === item?.id : false;
    const tintColor = isSelected ? colors.light.primary : colors.light.accent;
    return (
      <TouchableOpacity
        onPress={() => _onCategoryPress(item)}
        style={{marginRight: 12}}>
        <View style={[styles.categoryView, {borderColor: tintColor}]}>
          <Text style={[styles.category, {color: tintColor}]}>
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const _onCategoryPress = (item: object) => {
    setSelectedCategory(item);
    setPlatforms(item?.platforms);
  };

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

  const _onSearchCategory = (text: string) => {
    setSearch(text);
    if (text) {
      const newData = category?.platforms.filter(function (item) {
        const itemData = item?.name
          ? item?.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setPlatforms(newData);
    } else {
      setPlatforms(category?.platforms || []);
    }
  };

  return (
    <BaseView
      hasHeader
      headerProps={{
        hasBack: true,
      }}>
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            ref={categoryFlatListRef}
            data={categoriesJson}
            renderItem={_renderCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 16, paddingTop: 16}}
          />

          <SearchView
            placeholder="search by platform"
            value={search}
            onChangeText={text => _onSearchCategory(text)}
          />
          {platforms.length > 0 ? (
            <FlatList data={platforms} renderItem={_renderPlatform} />
          ) : (
            <Text style={styles.noData}>No Platform found</Text>
          )}
        </ScrollView>
      </View>
    </BaseView>
  );
};

export default Platforms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryView: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  category: {
    color: colors.light.textDefaultColor,
    fontFamily: fonts.medium,
    fontSize: 16,
    paddingHorizontal: 16,
  },
  noData: {
    fontFamily: fonts.medium,
    color: colors.light.lightTextColor,
    textAlign: 'center',
    padding: 64,
  },
});
