import {Icon} from '@rneui/base';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Image,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import {images} from '../constants/images';
import {colors} from '../constants/colors';
import {SCREEN_WIDTH} from '../constants/dimens';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentTabSelector} from '../redux/selectors';
import {Screens} from './Screens';
import {setCurrentTab} from '../redux/slices/homeSlice';
import {useNavigation} from '@react-navigation/native';

const CustomBottomTabView = props => {
  const dispatch = useDispatch();

  const currentTab = useSelector(getCurrentTabSelector);

  const _onTabPress = (tab: string) => {
    dispatch(setCurrentTab(tab));
    if (tab === Screens.TabYoloPay) {
    } else {
      props.navigation.jumpTo(tab);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={images.tabBorder}
        style={styles.tabBorder}
        resizeMode="center"
      />

      <ItemView
        source={images.tabHome}
        onPress={() => _onTabPress(Screens.TabHome)}
        imageStyle={styles.imageStyleHomeAndGenie}
        containerStyle={styles.containerStyleHomeAndGenie}
        isSelected={currentTab === Screens.TabHome}
      />
      <ItemView
        source={images.tabYoloPay}
        onPress={() => _onTabPress(Screens.TabYoloPay)}
        imageStyle={styles.imageStyleYoloPay}
        containerStyle={styles.containerStyleYoloPay}
        isSelected={currentTab === Screens.TabYoloPay}
      />
      <ItemView
        source={images.tabGenie}
        onPress={() => _onTabPress(Screens.TabGenie)}
        imageStyle={styles.imageStyleHomeAndGenie}
        containerStyle={styles.containerStyleHomeAndGenie}
        isSelected={currentTab === Screens.TabGenie}
      />
    </View>
  );
};

export default CustomBottomTabView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.light.bgColor,
    paddingVertical: 32,
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    alignItems: 'center',
  },
  tabBorder: {
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    width: SCREEN_WIDTH,
  },
  imageStyleHomeAndGenie: {
    tintColor: '#888',
    height: 24,
    width: 24,
  },
  imageStyleYoloPay: {
    height: 36,
    width: 36,
  },
  containerStyleHomeAndGenie: {
    borderWidth: 1,
    borderColor: '#888',
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyleYoloPay: {
    borderWidth: 1,
    borderColor: '#888',
    height: 64,
    width: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ItemView = ({
  source,
  onPress,
  containerStyle,
  imageStyle,
  isSelected,
}: {
  source: ImageSourcePropType;
  onPress: () => void;
  containerStyle: ViewStyle;
  imageStyle: ImageStyle;
  isSelected: boolean;
}) => {
  const tintColor = isSelected ? colors.light.accent : colors.light.borderColor;
  return (
    <TouchableOpacity
      style={[containerStyle, {borderColor: tintColor}]}
      onPress={onPress}>
      <Image source={source} style={[imageStyle, {tintColor: tintColor}]} />
    </TouchableOpacity>
  );
};
