import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';
import {SCREEN_WIDTH} from '../../constants/dimens';
import {fonts} from '../../constants/fonts';
import {Image} from 'react-native';
import {images} from '../../constants/images';

interface CategoryItemProps {
  item: object;
  onPress: () => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const {item, onPress} = props;
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imagesView}>
          <Image source={images.claimSample} style={styles.image1} />
          <Image source={images.claimSample} style={styles.image2} />
          <View style={styles.image3}>
            <Text style={styles.text}>+10</Text>
          </View>
        </View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.platforms}>+20 platforms</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  main: {
    marginRight: 16,
    marginBottom: 16,
  },
  container: {
    height: 144,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
    flex: 1,
    width: (SCREEN_WIDTH - 64) / 3,
    alignItems: 'center',
    paddingVertical: 12,
  },
  name: {
    color: colors.light.textDefaultColor,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  platforms: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  imagesView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
  },
  image2: {
    height: 44,
    width: 44,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 1000,
    borderWidth: 2,
  },
  image3: {
    height: 44,
    width: 44,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 1000,
    borderWidth: 2,
    backgroundColor: '#00000080',
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.light.textDefaultColor,
    fontFamily: fonts.medium,
  },
});
