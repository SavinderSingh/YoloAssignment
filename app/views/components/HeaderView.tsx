/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {images} from '../../constants/images';
import ButtonView from './ButtonView';
import { Screens } from '../../navigator/Screens';

export interface HeaderViewProps {
  hasLogo?: boolean;
  onLogoPress?: () => void;
  hasBack?: boolean;
  hasTitle?: boolean;
  title?: string;
  onGoBack?: () => void;
  hasSubscriptions?: boolean;
}

const HeaderView = (props: HeaderViewProps) => {
  const {
    hasLogo,
    onLogoPress,
    hasBack,
    hasTitle,
    title,
    onGoBack,
    hasSubscriptions,
  } = props;

  const navigation = useNavigation();

  const _onGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      navigation.goBack();
    }
  };

  const _onMySubscriptions = () =>
    navigation.navigate(Screens.MySubscriptions);

  return (
    <View style={styles.container}>
      {hasLogo && (
        <TouchableOpacity style={styles.logoView} onPress={onLogoPress}>
          <Image
            source={images.headerYoloLogo}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {hasBack && (
        <TouchableOpacity style={styles.leftIconView} onPress={_onGoBack}>
          <Icon name="arrow-back" type="material" color={colors.light.accent} />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}>
        {hasTitle && <Text style={styles.title}>{title}</Text>}
      </View>
      {hasSubscriptions && (
        <ButtonView
          title="my subscriptions"
          containerStyle={{marginRight: 8}}
          buttonStyle={{borderRadius: 20, paddingHorizontal: 12}}
          onPress={() => _onMySubscriptions()}
        />
      )}
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
  },
  logoView: {
    padding: 8,
  },
  headerLogo: {
    height: 64,
    width: 144,
  },
  leftIconView: {
    padding: 8,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.light.textDefaultColor,
  },
});
