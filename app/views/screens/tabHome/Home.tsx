/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import { Screens } from '../../../navigator/Screens';
import SpinnerView from './SpinnerView';
import { showAlert } from '../../../utils/Messages';

const Home = () => {
  const navigation = useNavigation();

  const _renderClaimCoin = ({item, index}: any) => {
    return (
      <ClaimCoinItem
        item={item}
        index={index}
        onClaim={() => _onClaimCoins()}
      />
    );
  };

  const _onClaimCoins = () => {
    showAlert('success', '1000 Coins Claimed Successfully');
  };

  const _onViewAll = () => navigation.navigate(Screens.Categories);

  return (
    <BaseView
      hasHeader
      headerProps={{
        hasLogo: true,
        onLogoPress: () => {},
      }}>
      <View style={styles.container}>
        <Image
          source={images.bgHome}
          style={styles.bgHome}
          resizeMode="stretch"
        />

        <ScrollView>
          <View style={styles.row}>
            <Text style={styles.subscriptionText}>SUBSCRIPTIONS</Text>
            <TouchableOpacity style={styles.viewAll} onPress={_onViewAll}>
              <Text style={styles.viewAllText}>view all</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.headingText}>
            xperience the thrill of {'\n'} winning
          </Text>

          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={_renderClaimCoin}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 16, paddingTop: 16}}
          />

          <SpinnerView />
        </ScrollView>
      </View>
    </BaseView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgHome: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subscriptionText: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.medium,
  },
  viewAllText: {
    color: colors.light.primary,
    fontFamily: fonts.medium,
  },
  viewAll: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light.primary,
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
